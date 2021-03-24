import React,{useState, useEffect} from 'react'
import './RecommendedVideos.css';
import axios from 'axios';
//import { Avatar } from '@material-ui/core';
import RecommendedVideosList from './RecommendedVideosList';


const RecommendedVideos = () => {
    const [videoDetails, setVideoDetails] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyAAvGxPsQAtcNShcUuSQ4CHxvIe5xjgLxI`);
            setVideoDetails(response.data.items);
        };
        fetchData();
    },[])
    
    return(
        <div className="recommended_videos">
            
            {
                videoDetails.map((data)=>{
                    return (
                        <RecommendedVideosList key={data.id} videoId={data.id}/>
                    )
                })
            }
            
        </div>
    )

}

export default RecommendedVideos
