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
                <div className="Tweet-Container">
                    <div className='userContainer'>
                        <img alt='Profile' src={values.tweetList[values.listIterator].profile_image_url}></img>
                        <div className='twtName'>
                            <div className='name'>{values.tweetList[values.listIterator].name}</div>
                            <div className='handle'>@{values.tweetList[values.listIterator].username}</div>    
                        </div>
                    </div>
                    <div className='twtText'>{values.tweetList[values.listIterator].text}</div>
                    {values.tweetList[values.listIterator].media_type === 'photo' ?
                    values.tweetList[values.listIterator].imgs.map(img => (
                        <img src={img} height="400"></img>
                    )) :
                    null
                    }
                    {values.tweetList[values.listIterator].media_type === 'video' ? 
                    <div>Tweet contains a video or GIF. Go to tweet to view.</div> :
                    null
                    }
                    <div className='twtDate'>{values.tweetList[values.listIterator].created_at}</div>
                </div>
                <div className='twtButtons'>
                    {values.listIterator > 0 ? <button onClick={iteratorHandler} value='decrease'>Prev</button> : null}
                    {values.listIterator === values.tweetList.length - 1 ? <button>Load More</button> : <button onClick={iteratorHandler} value='increase'>Next</button>}
                </div>
                <div>Result Size: {values.tweetList.length}</div>
            </div>
            }
        </div>
        );
    }
}

export default Result;