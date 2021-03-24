import React from 'react'
import './SearchedVideos.css';
import SearchedVideosList from './SearchedVideosList';

import TuneOutlinedIcon from '@material-ui/icons/Tune'

const SearchedVideos = ({data, selectedVideoId}) => {

    
    return (
        <div className="searched_videos">
            <div className="searchPage_filters">
                <TuneOutlinedIcon/>
                <h2>FILTERS</h2>
            </div>
            <hr/>
            
            <SearchedVideosList data={data} selectedVideoId={selectedVideoId}/>
            
        </div>
    )
}

export default SearchedVideos;
