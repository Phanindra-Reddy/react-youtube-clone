import React from 'react'
import './Sidebar.css';
import SideBarRow from './SideBarRow';

import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchlaterIcon from '@material-ui/icons/WatchLater';
import LikedVideosIcon from '@material-ui/icons/ThumbUpAlt';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import YoutubeIcon from '@material-ui/icons/YouTube';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import LocalMallIcon from '@material-ui/icons/LocalMall';

import SettingsIcon from '@material-ui/icons/Settings';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <SideBarRow selected Icon={HomeIcon} title="Home"/>
            <SideBarRow Icon={WhatshotIcon} title="Trending"/>
            <SideBarRow Icon={SubscriptionsIcon} title="Subscriptions"/>

            <hr/>

            <SideBarRow Icon={VideoLibraryIcon} title="Library"/>
            <SideBarRow Icon={HistoryIcon} title="History"/>
            <SideBarRow Icon={WatchlaterIcon} title="Watch later"/>
            <SideBarRow Icon={LikedVideosIcon} title="Liked Videos"/>
            <SideBarRow Icon={ExpandMoreIcon} title="Show more"/>

            <hr/>
            
            <h2>SUBSCRIPTIONS</h2>
            <SideBarRow Icon={AddCircleIcon} title="Browse channels"/>

            <hr/>
            
            <h2>MORE FROM YOUTUBE</h2>
            <SideBarRow Icon={YoutubeIcon} title="Youtube Premium"/>
            <SideBarRow Icon={LocalMoviesIcon} title="Films"/>
            <SideBarRow Icon={SportsEsportsIcon} title="Gaming"/>
            <SideBarRow Icon={LiveTvIcon} title="Live"/>
            <SideBarRow Icon={LocalMallIcon} title="Fashion &amp; beauty"/>
            <SideBarRow Icon={EmojiObjectsIcon} title="Learning"/>
            <SideBarRow Icon={SportsBaseballIcon} title="Sport"/>

            <hr/>

            <SideBarRow Icon={SettingsIcon} title="Settings"/>
            <SideBarRow Icon={FlagIcon} title="Report history"/>
            <SideBarRow Icon={HelpIcon} title="Help"/>
            <SideBarRow Icon={FeedbackIcon} title="Send feedback"/>

            <hr/>

        </div>
    )
}

export default Sidebar
