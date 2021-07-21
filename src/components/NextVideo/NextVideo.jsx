import "./NextVideo.scss";

function NextVideo(props, eventHandler) {
  const videos = props.videoList;
  // videos.splice(0, 1);

  return (
    <div className="Nextvideo">
      <p className="sidevideo__next">Next Video </p>
      {videos.map(function (list) {
        return (
          <div className="sidevideo">
            <img
              className="sidevideo__image"
              onClick={(event) => {
                props.eventHandler(list.id);
              }}
              src={list.image}
              alt=""
            />

            <div className="sidevideo__details">
              <h2 className="sidevideo__title">{list.title}</h2>
              <h3 className="sidevideo__channel"> {list.channel}</h3>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default NextVideo;
