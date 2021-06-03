require('dotenv/config')
var express = require("express");
var needle = require('needle')
var router=express.Router();

const token = process.env.TOKEN

const endpointUrl = "https://api.twitter.com/2/users/by/username/";

var followList = []
var tweetList = []


async function getIDRequest(username) {

  const res = await needle('get', endpointUrl + username, {
      headers: {
          "authorization": `Bearer ${token}`
      }
  })

  if (res.body) {
      return res.body;
  } else {
      throw new Error('Unsuccessful request');
  }
}

async function shuffle(li){
    var currentIndex = li.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = li[currentIndex];
      li[currentIndex] = li[randomIndex];
      li[randomIndex] = temporaryValue;
    }
    return li;
}

async function populateTweetList(date) {
    await shuffle(followList);
    for (var i=0; i < 10; i++){
        await getTweetsfromDate(followList[i], date);
    }
}

async function resetLists(){
    followList = []
    tweetList = []
}

async function getFollowing(userID) {
    const followURL = 'https://api.twitter.com/2/users/' + userID + '/following';
  
    const res = await needle('get', followURL, {
        headers: {
            "authorization": `Bearer ${token}`
        }
    })
  
    if (res.body) {
        for (var i=0; i < res.body.meta.result_count; i++){
            followList.push(res.body.data[i].id)
        }
    } else {
        throw new Error('Unsuccessful request');
    }
}

async function getTweetsfromDate(userID, date) {
    const timelineURL = 'https://api.twitter.com/2/users/' + userID + '/tweets';
    const params = {
        'max_results': 5,
        'start_time': date + 'T00:00:00.000Z',
        'end_time': date + 'T23:59:59.000Z',
        'expansions': 'attachments.media_keys,author_id',
        'tweet.fields': ('text', 'created_at'),
        'media.fields': ('media_key', 'preview_image_url', 'type', 'url'),
        'user.fields': ('username','profile_image_url'),
    }

    const res = await needle('get', timelineURL, params, {
        headers: {
            "authorization": `Bearer ${token}`
        }
    })
  
    if (res.body) {
        if (!res.body.errors){
            var media_count = 0;
            for (var i=0; i < res.body.meta.result_count; i++){
                var imgs = []
                var media_type = null
                if (res.body.data[i].attachments){
                    img_count = Object.keys(res.body.data[i].attachments.media_keys).length
                    for (var j=0; j < img_count; j++){
                        imgs.push(res.body.includes.media[media_count + j].url)
                    }
                    media_type = res.body.includes.media[media_count].type
                    media_count += img_count;
                }
                tweetList.push({
                    text: res.body.data[i].text, 
                    created_at: res.body.data[i].created_at,
                    name: res.body.includes.users[0].name, 
                    username: res.body.includes.users[0].username,
                    profile_image_url: res.body.includes.users[0].profile_image_url,
                    imgs: imgs,
                    media_type: media_type
                })
            }
        }
        if(res.body.errors){
            console.log('error found')
            console.log(res.body.errors.parameters)
        }
    } else {
        throw new Error('Unsuccessful request');
    }
  }

router.get('/', async (req, res, next) => {
  res.send("Send Post Data");
});

router.post('/', async (req, res) => {
    resetLists();
    const userID = await getIDRequest(req.body.username);
    await getFollowing(userID.data.id);
    var dayOnly = req.body.date.slice(0, 10)
    await populateTweetList(dayOnly);
    res.send(tweetList);
  })


module.exports=router;