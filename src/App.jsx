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
  };

  handleClick = (id) => {
    console.log(id);
  };

  render() {
    return (
      <>
        <header>
          <NavbarComponent />
        </header>
        <main>
          <MainHero
            videoDetails={this.state.videoDetails}
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
