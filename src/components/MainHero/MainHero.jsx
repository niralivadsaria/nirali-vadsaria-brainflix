import "./MainHero.scss";
import NextVideo from "../NextVideo/NextVideo";
import Comments from "../Comments/Comments";
import Likes from "../../Assets/Icons/Icon-likes.svg";
import Views from "../../Assets/Icons/Icon-views.svg";
import imageAvatar from "../../Assets/Images/Mohan-muruge.jpg";
import moment from "moment";

function MainHero(props) {
  const video = props.videoDetails[props.mainVideo];

  return (
    <>
      <div className="main">
        {/* {prop.currentVideo.map(function(details){


        })}; */}

        <video className="main__image" controls poster={video.image}></video>
        <div className="main__container">
          <div className="main__topcontainer">
            <div className="main__title">{video.title} </div>
            <div className="list">
              <div className="time">
                <p className="main__channel">By {video.channel}</p>
                <p className="main__timestamp">
                  {moment(video.timestamp).fromNow()}
                </p>
              </div>

              <div className="post">
                <img className="post__image" src={Views} alt="Views" />
                <p className="post__views">{video.views}</p>
                <img className="post__image" src={Likes} alt="Likes" />
                <p className="post__likes">{video.likes} </p>
              </div>
            </div>
            <div>
              <p className="desc">{video.description}</p>
            </div>

            <div>
              <h3 className="comment__no">3 Comments </h3>
            </div>
            <div className="comment">
              <img className="image__avatar" src={imageAvatar} alt="" />
              <div className="comment__details">
                <h2 className="comment__conversation">
                  {" "}
                  JOIN THE CONVERSATION{" "}
                </h2>
                <div className="comment-section">
                  <form>
                    <input
                      placeholder="Write comment here"
                      className="comment__enter"
                      name="name"
                    />
                  </form>
                  <button className="comment__button">COMMENT</button>
                </div>
              </div>
            </div>

            <Comments comments={video.comments} />
          </div>
          <div className="main__bottomcontainer">
            <NextVideo
              videoList={props.videos}
              eventHandler={props.eventHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainHero;
