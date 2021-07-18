import "./NextVideo.scss";

function NextVideo(props, eventHandler) {
  const videos = props.videoList;

  return (
    <div class="Nextvideo">
      <p class="sidevideo__next">Next Video </p>
      {videos.map(function (list) {
        return (
          <div class="sidevideo">
            <img class="sidevideo__image" src={list.image} alt="" />
            <div class="sidevideo__details">
              <h2 class="sidevideo__title">{list.title}</h2>
              <h3 class="sidevideo__channel"> {list.channel}</h3>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default NextVideo;
