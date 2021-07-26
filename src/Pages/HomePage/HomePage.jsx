import React from "react";
import MainHero from "../../components/MainHero/MainHero";
import axios from "axios";
import { API_URL } from "../../components/util/util";
import { API_KEY } from "../../components/util/util";
import { Route } from "react-router-dom";

class App extends React.Component {
  state = {
    videosDetails: null,
    videos: null,
    currentVideo: null,
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/videos/${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          videos: response.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });

    axios
      .get(`${API_URL}/videos/1af0jruup5gu/${API_KEY}`)

      .then((response) => {
        console.log(response.data);
        this.setState({
          currentVideo: response.data,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      let sideVideo = this.state.videos.find(
        (video) => video.id == this.props.match.params.id
      );

      axios
        .get(`${API_URL}/videos/${sideVideo.id}/${API_KEY}`)
        .then((response) => {
          this.setState({
            currentVideo: response.data,
          });
          console.log(this.state.currentVideo);
        });
    }
  }

  render() {
    return (
      <>
        {this.state.currentVideo && this.state.videos && (
          <main>
            <Route
              key={this.props.match.params.id}
              path="/video/:id"
              render={(routerProps) => (
                <MainHero
                  videoDetails={this.state.currentVideo}
                  videos={this.state.videos}
                  {...routerProps}
                />
              )}
            />
          </main>
        )}
      </>
    );
  }
}

export default App;
