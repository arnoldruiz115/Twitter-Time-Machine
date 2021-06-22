import React from 'react';

class Result extends React.Component{

    componentDidMount() {
        this.props.callAPI()
    }

    render() {
    const {values, iteratorHandler} = this.props;
    return (
        <div>
            {!values.APICalled ? 
            <div className="TTM-container">Loading...</div> :
            <div className="TTM-container">
                <div>Result Size: {values.tweetList.length}</div>
                {
                values.tweetList.map(tweet =>(
                    <div className="Tweet-Container">
                        <div className='userContainer'>
                            <img alt='Profile' src={tweet.profile_image_url}></img>
                            <div className='twtName'>
                                <div className='name'>{tweet.name}</div>
                                <div className='handle'>@{tweet.username}</div>    
                            </div>
                        </div>
                        <div className='twtText'>{tweet.text}</div>
                        {tweet.media_type === 'photo' ?
                        tweet.imgs.map(img => (
                            <img src={img} height="400"></img>
                        )) :
                        null
                        }
                        {tweet.media_type === 'video' ? 
                        <div>Tweet contains a video or GIF. Go to tweet to view.</div> :
                        null
                        }
                        <div className='twtDate'>{new Date(tweet.created_at).toLocaleDateString("en-US", {hour: 'numeric', minute:'numeric', month: 'short', day: 'numeric', year: 'numeric'})}</div>
                    </div>
                    ))
                }
            </div>
            }
        </div>
        );
    }
}

export default Result;