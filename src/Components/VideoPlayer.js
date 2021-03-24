import React,{useState, useEffect} from 'react'
import './VideoList.css';


import LikedVideosIcon from '@material-ui/icons/ThumbUpAlt';
import DislikedVideosIcon from '@material-ui/icons/ThumbDownAlt';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SaveIcon from '@material-ui/icons/PlaylistAdd';
import ShareIcon from '@material-ui/icons/Share';
import { Avatar } from '@material-ui/core';
import Button from '@material-ui/core/Button';

let initialState ={
    channelTitle:'',
    videoTitle:'',
    videoDescription:'',
    views:'',
    publishedTime:'',
    likes:'',
    dislikes:'',
    subscribers:'',
}

const VideoPlayer = ({videoId}) => {

    

    const [videoDetails, setVideoDetails] = useState(initialState);

    useEffect(()=>{
        Promise.all([fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=AIzaSyAAvGxPsQAtcNShcUuSQ4CHxvIe5xjgLxI`),
        fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyAAvGxPsQAtcNShcUuSQ4CHxvIe5xjgLxI`)
        ])
        .then(([res1, res2]) => {
            if (res1.ok && res2.ok) {
              return Promise.all([res1.json(), res2.json()]);
            }
            throw Error(res1.statusText, res2.statusText);
        }).then(([data1, data2])=>{

            //console.log(data2.items[0].snippet.channelId);

            let publishedTime = new Date(data2.items[0].snippet.publishedAt).toString().slice(0,16);
            let channelId = data2.items[0].snippet.channelId;
            fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=AIzaSyAAvGxPsQAtcNShcUuSQ4CHxvIe5xjgLxI`)
            .then(res => res.json()).then((data) => {
                //console.log(data.items[0].statistics.subscriberCount)
                setVideoDetails({
                    channelTitle:data2.items[0].snippet.channelTitle,
                    videoTitle:data2.items[0].snippet.title,
                    videoDescription:data2.items[0].snippet.description,
                    views:data1.items[0].statistics.viewCount,
                    publishedTime:publishedTime,
                    likes:data1.items[0].statistics.likeCount,
                    dislikes:data1.items[0].statistics.dislikeCount,
                    subscribers:data.items[0].statistics.subscriberCount,
                })
            })
            

            // setVideoDetails({
            //     channelTitle:data2.items[0].snippet.channelTitle,
            //     videoTitle:data2.items[0].snippet.title,
            //     videoDescription:data2.items[0].snippet.description,
            //     views:data1.items[0].statistics.viewCount,
            //     publishedTime:publishedTime,
            //     likes:data1.items[0].statistics.likeCount,
            //     dislikes:data1.items[0].statistics.dislikeCount,
            //     subscribers:data.items[0].statistics.subscriberCount,
            // })
        })
    },[videoId])

    
    return (
        <div className="videoPlayer">

            <iframe 
                width="100%" 
                height="480"
                title={videoId}
                className="video-iframe" 
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
            />

            <div className="channelInfo"> 
                <h2>{videoDetails.videoTitle}</h2>
                <div className="videoStatistics">
                    <div className="video_views_publishedtime">
                        <p>{videoDetails.views} views </p> 
                        <span>•</span>
                        <p>{videoDetails.publishedTime}</p>
                    </div>
                    <div className="video_likes_dislikes">
                        <p><LikedVideosIcon/>{videoDetails.likes}</p>
                        <p><DislikedVideosIcon/>{videoDetails.dislikes}</p>
                        <p><ShareIcon/>SHARE</p>
                        <p><SaveIcon/>SAVE</p>
                        <p><MoreHorizIcon/></p>
                    </div>
                </div>
            </div>

            <hr/>

            <div className="channelProfile">
                <Avatar className="channelLogo" style={{width:'50px',height:'50px'}}/>
                <div className="channelDetails">
                    <h4 className="channelTitle">{videoDetails.channelTitle}</h4>
                    <p className="channelSubs">{videoDetails.subscribers} subscribers</p>
                    <p className="channelDescription">
                        {videoDetails.videoDescription}
                    </p>
                    <p className="showMoreBtn">SHOW MORE</p>
                </div>
                <Button variant="contained" style={{backgroundColor:'#CC0000',color:'white',fonrSize:'14px',margin:'0px 4px',padding:'8px 40px'}}>
                    SUBSCRIBE
                </Button>
                
            </div>

            <hr/>


        </div>
    )
}

export default VideoPlayer;
