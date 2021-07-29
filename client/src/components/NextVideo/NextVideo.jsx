import "./NextVideo.scss";
import { Link } from "react-router-dom";

function NextVideo(props) {
  const videos = props.videoList;

  return (
    <div className="Nextvideo">
      <p className="sidevideo__next">Next Video </p>
      {videos.map(function (list, id) {
        // if (list.id == props.match.params.id) {
        //   return null;
        // }

        return (
          <Link key={id} className="sidevideo__link" to={"/video/" + list.id}>
            <div className="sidevideo">
              <img
                className="sidevideo__image"
                src={list.image}
                alt="sidevideo-image"
              />

              <div className="sidevideo__details">
                <h2 className="sidevideo__title">{list.title}</h2>
                <h3 className="sidevideo__channel"> {list.channel}</h3>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default NextVideo;
