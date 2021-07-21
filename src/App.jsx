import React, { Component } from "react";
import "./App.css";
import NavbarComponent from "./components/Navbar/Navbar";
import MainHero from "./components/MainHero/MainHero";
import NextVideo from "./components/NextVideo/NextVideo";
import Videos from "./Assets/Data/videos.json";
import Video_detail from "./Assets/Data/video-details.json";

class App extends Component {
  state = {
    mainVideo: 0,
    videoDetails: Video_detail,
    videos: Videos,
    currentVideo: Video_detail[0],
  };

  handleClick = (id) => {
    // console.log(event);
    console.log(id);
    let sideVideo = this.state.videoDetails.find((video) => video.id === id);
    this.setState({
      currentVideo: sideVideo,
    });
  };

  render() {
    return (
      <>
        <header>
          <NavbarComponent />
        </header>
        <main>
          <MainHero
            videoDetails={this.state.currentVideo}
            mainVideo={this.state.mainVideo}
            videos={this.state.videos}
            eventHandler={this.handleClick}
          />
        </main>
      </>
    );
  }
}

export default App;
