var express = require('express');
var router = express.Router();


const testList = {"data":[{"id":"364970961","name":"Ben McLemore","username":"BenMcLemore"},{"id":"244800486","name":"Andre Drummond","username":"AndreDrummond"},{"id":"1684946220","name":"Damian Jones","username":"dameology"},{"id":"234661277","name":"Alfonzo McKinnie","username":"_Alvo_"},{"id":"24423418","name":"Marc Gasol","username":"MarcGasol"},{"id":"133726414","name":"Montrezl Harrell","username":"MONSTATREZZ"},{"id":"232049361","name":"Wesley Matthews","username":"WessyWes23"},{"id":"1019195455","name":"Judy Seto","username":"judyseto"},{"id":"1298031677181108224","name":"Elgin Baylor","username":"theelginbaylor"},{"id":"17461978","name":"SHAQ","username":"SHAQ"},{"id":"728028179554664448","name":"Laker Film Room","username":"LakerFilmRoom"},{"id":"1245488254792720385","name":"Phil Handy","username":"94feetofgame"},{"id":"90534836","name":"Lakers Season Seats","username":"LakersSTM"},{"id":"167821244","name":"Keef Morris","username":"Keefmorris"},{"id":"863111422678401024","name":"Lakers MR","username":"Lakers_MR"},{"id":"6395222","name":"Portland Trail Blazers","username":"trailblazers"},{"id":"2826500485","name":"Lionel Hollins","username":"LionelHollins14"},{"id":"179149890","name":"Jason Kidd","username":"RealJasonKidd"},{"id":"2328804703","name":"Kostas Antetokounmpo","username":"Kostas_ante13"},{"id":"706224606","name":"Devontae Cacok","username":"Vontae__15"},{"id":"54438929","name":"Jared Dudley","username":"JaredDudley619"},{"id":"159113258","name":"Anthony Davis","username":"AntDavis23"},{"id":"2272672902","name":"Talen","username":"Thortontucker"},{"id":"1026563481749807105","name":"Lakers Gaming","username":"LakersGaming"},{"id":"23083404","name":"LeBron James","username":"KingJames"},{"id":"443202788","name":"Nike LA","username":"NikeLA"},{"id":"2551259005","name":"WishShopping","username":"WishShopping"},{"id":"26982121","name":"UCLA Health","username":"UCLAHealth"},{"id":"1096007496","name":"Kentavious C.P","username":"CaldwellPope"},{"id":"255792011","name":"Alex Caruso","username":"ACFresh21"},{"id":"58564357","name":"Miles Simon","username":"milessimon"},{"id":"272616327","name":"kuz","username":"kylekuzma"},{"id":"248900032","name":"Earvin Magic Johnson","username":"MagicJohnson"},{"id":"760534819386175488","name":"UCLA Health TC","username":"UCLAHealthTC"},{"id":"731364698","name":"James Worthy","username":"JamesWorthy42"},{"id":"2377724724","name":"Los Lakers","username":"LosLakers"},{"id":"48011984","name":"NBA Summer League","username":"NBASummerLeague"},{"id":"2422665828","name":"NBA Draft","username":"NBADraft"},{"id":"28725783","name":"STAPLES Center","username":"STAPLESCenter"},{"id":"1059194370","name":"Kobe Bryant","username":"kobebryant"},{"id":"435497565","name":"Spectrum SportsNet","username":"SpectrumSN"},{"id":"80500654","name":"Lakers Community","username":"LakersCommunity"},{"id":"214537859","name":"#NBAAllStar","username":"NBAAllStar"},{"id":"130599831","name":"NBA Communications","username":"NBAPR"},{"id":"21991753","name":"Mike Trudell","username":"LakersReporter"},{"id":"73406718","name":"Toronto Raptors","username":"Raptors"},{"id":"37085464","name":"Los Angeles Sparks","username":"LASparks"},{"id":"37774152","name":"Kareem Abdul-Jabbar","username":"kaj33"},{"id":"34862549","name":"Jeanie Buss","username":"JeanieBuss"},{"id":"34338927","name":"Laker Girls","username":"LakerGirls"},{"id":"26270913","name":"Golden State Warriors","username":"warriors"},{"id":"26074296","name":"Denver Nuggets","username":"nuggets"},{"id":"14992591","name":"Washington Wizards","username":"WashWizards"},{"id":"24925573","name":"OKC THUNDER","username":"okcthunder"},{"id":"16727749","name":"Detroit Pistons","username":"DetroitPistons"},{"id":"22185437","name":"Dallas Mavericks","username":"dallasmavs"},{"id":"25564838","name":"South Bay Lakers","username":"SouthBayLakers"},{"id":"24903350","name":"New Orleans Pelicans","username":"PelicansNBA"},{"id":"20265254","name":"NEW YORK KNICKS","username":"nyknicks"},{"id":"21308488","name":"Charlotte Hornets","username":"hornets"},{"id":"19409270","name":"Indiana Pacers","username":"Pacers"},{"id":"17292143","name":"Atlanta Hawks","username":"ATLHawks"},{"id":"18371803","name":"San Antonio Spurs","username":"spurs"},{"id":"16201775","name":"Philadelphia 76ers","username":"sixers"},{"id":"18139461","name":"Boston Celtics","username":"celtics"},{"id":"19564719","name":"LA Clippers","username":"LAClippers"},{"id":"19537303","name":"Orlando Magic","username":"OrlandoMagic"},{"id":"18360370","name":"utahjazz","username":"utahjazz"},{"id":"15900167","name":"Milwaukee Bucks","username":"Bucks"},{"id":"18552281","name":"Brooklyn Nets","username":"BrooklynNets"},{"id":"20196159","name":"Minnesota Timberwolves","username":"Timberwolves"},{"id":"18481113","name":"Phoenix Suns","username":"Suns"},{"id":"19923144","name":"NBA","username":"NBA"},{"id":"19263978","name":"Cleveland Cavaliers","username":"cavs"},{"id":"16212685","name":"Chicago Bulls","username":"chicagobulls"},{"id":"7117962","name":"Memphis Grizzlies","username":"memgrizz"},{"id":"667563","name":"Sacramento Kings","username":"SacramentoKings"},{"id":"11026952","name":"Miami HEAT","username":"MiamiHEAT"},{"id":"19077044","name":"Houston Rockets","username":"HoustonRockets"},{"id":"16867043","name":"NBA G League","username":"nbagleague"}],"meta":{"result_count":80}}

const testData = [
  {
    text: 'https://t.co/4Bbneihwl3',
    created_at: '2021-03-21T21:02:19.000Z',
    name: 'Cats you would love to pet',
    username: 'CatsYouLove',
    profile_image_url: 'https://pbs.twimg.com/profile_images/1362817131855945734/tfe1QTSS_normal.jpg',
    imgs: [
      'https://pbs.twimg.com/media/ExCC3kcXIAM4B2r.jpg',
      'https://pbs.twimg.com/media/ExCC3uoXIAUkrJH.jpg',
      'https://pbs.twimg.com/media/ExCC34xWgAszxQ6.jpg',
      'https://pbs.twimg.com/media/ExCC4ESWgAwENzE.jpg'
    ],
    media_type: 'photo'
  },
  {
    text: 'https://t.co/vaGHE4gO7O',
    created_at: '2021-03-21T12:33:22.000Z',
    name: 'Cats you would love to pet',
    username: 'CatsYouLove',
    profile_image_url: 'https://pbs.twimg.com/profile_images/1362817131855945734/tfe1QTSS_normal.jpg',
    imgs: [
      'https://pbs.twimg.com/media/ExAOYU6XAAgrq6-.jpg',
      'https://pbs.twimg.com/media/ExAOYhQW8AQa9yv.jpg'
    ],
    media_type: 'photo'
  },
  {
    text: 'This painting she made of MJ ��\n' +
      '\n' +
      '(via @erinmcloughlin8) https://t.co/VTBW9hj25R',
    created_at: '2021-03-21T23:41:44.000Z',
    name: 'ESPN',
    username: 'espn',
    profile_image_url: 'https://pbs.twimg.com/profile_images/1170690523201527808/FriNRiir_normal.png',
    imgs: [
      'https://pbs.twimg.com/media/ExCnWqTXAAwdjWc.jpg',
      'https://pbs.twimg.com/media/ExCnXBuWYAQCt0Q.jpg'
    ],
    media_type: 'photo'
  },
  {
    text: 'Blake Griffin makes his Nets debut � https://t.co/mTU3nU8RKz',
    created_at: '2021-03-21T23:29:58.000Z',
    name: 'ESPN',
    username: 'espn',
    profile_image_url: 'https://pbs.twimg.com/profile_images/1170690523201527808/FriNRiir_normal.png',
    imgs: [ undefined ],
    media_type: 'video'
  },
  {
    text: 'RT @SportsCenter: � ANOTHER UPSET �\n' +
      '\n' +
      '11-seed Syracuse takes down 3-seed West Virginia! https://t.co/kctidsVtNI',
    created_at: '2021-03-21T23:27:01.000Z',
    name: 'ESPN',
    username: 'espn',
    profile_image_url: 'https://pbs.twimg.com/profile_images/1170690523201527808/FriNRiir_normal.png',
    imgs: [ 'https://pbs.twimg.com/media/ExCj0qMXEAAECEg.jpg' ],
    media_type: 'photo'
  },
  {
    text: '5-seed Georgia Tech erases a 17-point deficit to beat 12-seed Stephen F. Austin in OT! #ncaaW https://t.co/B7HAo6pb57',
    created_at: '2021-03-21T23:08:28.000Z',
    name: 'ESPN',
    username: 'espn',
    profile_image_url: 'https://pbs.twimg.com/profile_images/1170690523201527808/FriNRiir_normal.png',
    imgs: [ undefined ],
    media_type: 'video'
  },
  {
    text: 'RT @espnW: FREE BASKETBALL ON ESPNU ‼️ https://t.co/gR7tN4AQxE',
    created_at: '2021-03-21T22:40:55.000Z',
    name: 'ESPN',
    username: 'espn',
    profile_image_url: 'https://pbs.twimg.com/profile_images/1170690523201527808/FriNRiir_normal.png',
    imgs: [ undefined ],
    media_type: 'animated_gif'
  },
  {
    text: 'RT @KingJames: Nothing angers and saddens me more than not being available to and for my teammates! I’m hurt inside and out right now.…',
    created_at: '2021-03-21T16:26:50.000Z',
    name: 'Los Angeles Lakers',
    username: 'Lakers',
    profile_image_url: 'https://pbs.twimg.com/profile_images/1396534366780547074/kTX1GhDy_normal.jpg',
    imgs: [],
    media_type: null
  },
  {
    text: 'RT @LakersReporter: Injury update: LeBron James has a high right ankle sprain; he’ll be out indefinitely.',
    created_at: '2021-03-21T00:34:36.000Z',
    name: 'Los Angeles Lakers',
    username: 'Lakers',
    profile_image_url: 'https://pbs.twimg.com/profile_images/1396534366780547074/kTX1GhDy_normal.jpg',
    imgs: [],
    media_type: null
  }
]


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send("Test Data");
});

router.post('/', function (req, res) {
    const body = req.body

    res.send(testData)
  })

module.exports = router;
