import React from 'react';
import './SearchedVideos.css';
import Avatar from '@material-ui/core/Avatar';


// function selectVideo(videoIdObj, onVideoSelected) {
//     onVideoSelected(videoIdObj.videoId);
// }

const SearchedVideosList = (props) => {
    const {data, selectedVideoId} = props
    
    function selectVideo(videoIdObj, onVideoSelected) {
        onVideoSelected(videoIdObj.videoId);
    }

    return data.map(({snippet, id}, index) => {
        return (
            <div 
                className="searchedVideos_List" 
                key={index} 
                onClick={() => selectVideo(id, selectedVideoId)}
            >
                <img
                    className="video_thumbnail" 
                    src={snippet.thumbnails.medium.url} 
                    alt="video_thumbnail"
                    width={snippet.thumbnails.medium.width}
                    height={snippet.thumbnails.medium.height} 
                />
                <div className="searchedVideos_info">
                    <h3 className="video_title">{snippet.title}</h3>
                    <div className="channel_img_title">
                        <Avatar className="channel_img"/>
                        <h2 className="channel_title">{snippet.channelTitle}</h2>
                    </div>
                    <p className="video_description">{snippet.description}</p>
                </div>
            </div>
        )
    })
    
}

export default SearchedVideosList
