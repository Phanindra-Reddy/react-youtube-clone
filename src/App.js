import React from 'react';
import './App.css';

import Header from './Components/Header.js';
import Sidebar from './Components/Sidebar.js';
import RecommendedVideos from './Components/RecommendedVideos.js';
import SearchedVideos from './Components/SearchedVideos';
import VideoPlayer from './Components/VideoPlayer';
import VideosList from './Components/VideosList';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import youtubeApi from './Components/YoutubeAPI'; 

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        showPage:true,
        videoMetaInfo:[],
        selectedVideoId:null
    }
   
  }

  onSearch = async (keyword) => {
    let response = await youtubeApi.get("/search",{
      params:{
        q:keyword
      }
    })

    this.setState({
      videoMetaInfo:response.data.items,
      selectedVideoId:response.data.items[0].id.videoId
    })

    //console.log(this.state);
  }

  onSelectedVideoId = (videoId) =>{
    this.setState({
      showPage:false,
      selectedVideoId:videoId
    })

  }


  render(){
    const{videoMetaInfo} = this.state
  return (
    
    <div className="App">
      <Router>
        <Header onSearch={this.onSearch}/>
        <Switch>

            <Route path="/search">
              {
                this.state.showPage ? 

                <div className="app_main_content">
                  <Sidebar/>
                  <SearchedVideos data={videoMetaInfo} selectedVideoId={this.onSelectedVideoId} />
                </div> :

                <div className="app_main_searched_content">
                  <VideoPlayer
                    videoId={this.state.selectedVideoId}
                    data={this.state.videoMetaInfo}
                  />
                  <VideosList data={videoMetaInfo} selectedVideoId={this.onSelectedVideoId} />
                </div>

              }
            </Route>

            <Route path="/">
              <div className="app_main_content">
                <Sidebar/>
                <RecommendedVideos />
              </div>
            </Route>
            
        </Switch>
      </Router>
    </div>
  );
  }
}

export default App;
