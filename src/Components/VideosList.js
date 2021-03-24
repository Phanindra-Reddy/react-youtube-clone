import React from 'react';
import './VideoList.css';
import SuggestedVideosList from './SuggestedVideosList';


const VideosList = (props) => {
    const {data, selectedVideoId} = props

    return(
        <div className="videosList">
            <SuggestedVideosList data={data} selectedVideoId={selectedVideoId}/>
        </div>
    )

}

export default VideosList;
