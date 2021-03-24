import React from 'react';
import './Header.css';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import NotificationsIcon from '@material-ui/icons/Notifications';
// import MicIcon from '@material-ui/icons/Mic';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';


class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchInput:'',
        }
        this.submitQuery = this.submitQuery.bind(this)
    }

    setSearchInput = (e) =>{
        this.setState({
            searchInput:e.target.value
        })
    }

    submitQuery(e) {
        e.preventDefault();
        if(this.state.searchInput !== '') 
            this.props.onSearch(this.state.searchInput);
        //console.log(this.state.searchInput);
    }

    render(){
        
    return (
        <>
        <div className="header">
            <div className="header_left">
                <MenuIcon />
                <Link to="/">
                    <img 
                        className="header_logo"
                        alt="YouTube Logo" 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/512px-YouTube_Logo_2017.svg.png"
                    />
                </Link>

            </div>


            <div className="header_search">
               <form className="form_search" onSubmit={this.submitQuery}>
                    <input
                        onChange={this.setSearchInput}
                        value={this.state.searchInput}
                        placeholder="Search" 
                        type="text"
                    />
                    <Link to={`/search/${this.state.searchInput}`}>
                        <Button className="searchBtn">
                            <SearchIcon/>
                        </Button> 
                       
                    </Link>
                </form>
            </div>
            

            <div className="header_right">
                <VideoCallIcon  className="header_icon"/>
                <AppsIcon className="header_icon"/>
                <NotificationsIcon className="header_icon"/>
                <Avatar src="" alt="my_avatar" className="header_icon"/>
            </div>
        </div>
        
        </>
    )
    }
}

export default Header;
