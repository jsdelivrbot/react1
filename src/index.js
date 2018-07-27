import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from'youtube-api-search';
import * as types from './api_key';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import ControlledSearchbar from './components/controlled-searchbar.js';


class App extends Component {
  
  state = {
    videos: [],
    selectedVideo: null,
    term: 'Javascript'
  };

  componentWillMount() {
    this.runSearch();
  }

  handleVideoSearch = event => {
    const videoSearch = _.debounce(() => {this.runSearch()}, 400);
    this.setState({
      term: event.target.value
    }, () => {
      videoSearch();
    });
  }

  runSearch() {
    YTSearch({ key: types.YT_KEY, term: this.state.term }, (videos) => {
      this.setState({ 
        videos: videos, 
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className="row">
        <ControlledSearchbar handleChange={this.handleVideoSearch} term={this.state.term}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}



ReactDOM.render(<App />, document.querySelector('.container'));