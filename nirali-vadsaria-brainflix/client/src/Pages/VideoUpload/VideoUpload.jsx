import thumbnail from "../../Assets/Images/Upload-video-preview.jpg";
import "./VideoUpload.scss";

function VideoUpload() {
  return (
    <div class="upload">
      <h2 className="upload__title">Upload Video </h2>
      <div className="upload__content">
        <h4 className="upload__thumbnail"> VIDEO THUMBNAIL</h4>
        <img className="upload__logo" src={thumbnail} alt="upload-logo" />

        <form className="label">
          <label className="label__title"> TITLE YOUR VIDEO </label>
          <input
            placeholder="Add a title to your video"
            className="label__input"
            name="name"
          />
          <label className="label__title"> ADD A VIDEO DESCRIPTION </label>
          <input
            placeholder="Add a description of your video"
            className="label__comment"
            name="name"
          />
        </form>
      </div>
      <div className="label__content">
        <button className="label__publish"> PUBLISH </button>
        <h4 className="label__cancel">CANCEL</h4>
      </div>
    </div>
  );
}

export default VideoUpload;
