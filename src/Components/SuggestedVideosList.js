import React from 'react';
import './VideoList.css';

// function selectVideo(videoIdObj, onVideoSelected) {
//     onVideoSelected(videoIdObj.videoId);
// }

const SuggestedVideosList = (props) => {
    const {data, selectedVideoId} = props

    function selectVideo(videoIdObj, onVideoSelected) {
        onVideoSelected(videoIdObj.videoId);
    }
    
    return data.map(({snippet, id}, index) => {
        
        return (
            <div 
                className="suggestedVideos_List" 
                key={index} 
                onClick={() => selectVideo(id, selectedVideoId)}
            >
                <img
                    className="video_thumbnail" 
                    src={snippet.thumbnails.medium.url} 
                    alt="video_thumbnail"
                    width='170'
                    height='94'
                />
                <div className="suggestedVideos_info">
                    <h3 className="video_title">{snippet.title}</h3>
                    <h2 className="channel_title">{snippet.channelTitle}</h2>
                    {/* <h2 className="publishTime">1 month ago</h2> */}
                </div>
            </div>
        )
        
    })
    
}

export default SuggestedVideosList;
