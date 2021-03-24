import React,{useState, useEffect} from 'react'
import './RecommendedVideos.css';

import { Avatar } from '@material-ui/core';

var initialState = {
    channelTitle:'',
    videoTitle:'',
    videoViews:'',
    publishedTime:'',
}

const RecommendedVideosList = ({videoId}) => {
    const [eachVideoDetails, setEachVideoDetails] = useState(initialState);

    useEffect(() => {

        // async function fetchData() {
        //     const response = await axios(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyAoO3GdNGndKNvYNOl4dre-RIcA0dcIyz8`);
        //     setEachVideoDetails(response.data);
        //     //console.log(response.data.items);
        // };
        // fetchData();

        Promise.all([fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyAAvGxPsQAtcNShcUuSQ4CHxvIe5xjgLxI`),
            fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=AIzaSyAAvGxPsQAtcNShcUuSQ4CHxvIe5xjgLxI`)
        ])
        .then(([res1, res2]) => {
            if (res1.ok && res2.ok) {
              return Promise.all([res1.json(), res2.json()]);
            }
            throw Error(res1.statusText, res2.statusText);
        }).then(([data1, data2])=>{
            let publishedTime = new Date(data1.items[0].snippet.publishedAt).toString().slice(0,16);
            //console.log(data1.items[0]);
            //console.log(data2.items[0]);
            setEachVideoDetails({
                channelTitle:data1.items[0].snippet.channelTitle,
                videoTitle:data1.items[0].snippet.title,
                videoViews:data2.items[0].statistics.viewCount,
                publishedTime:publishedTime,
            })
        })
        
    })


    return (
        <>
            <div className="videoDetails" key={videoId} style={{width:'253px'}}>
                
                <iframe
                    key={videoId}
                    title={videoId}
                    width="253" 
                    height="142"
                    className="video-iframe" 
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=0`} 
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                />

                <div className="videoMetaData">
                    <Avatar className="channelLogo"/>
                    <div className="videoInfo">
                        <h3 className="videoTitle">
                            {eachVideoDetails.videoTitle}
                        </h3>
                        <p className="channelTitle">{eachVideoDetails.channelTitle}</p>
                        <p className="videoViews">{eachVideoDetails.videoViews} views • {eachVideoDetails.publishedTime}</p>
                    </div>
                </div>
                        
            </div>
            
        </>
    )
}

export default RecommendedVideosList;
