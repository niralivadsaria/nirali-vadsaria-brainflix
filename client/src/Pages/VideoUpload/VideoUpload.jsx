import thumbnail from "../../Assets/Images/Upload-video-preview.jpg";
import "./VideoUpload.scss";
import { Link } from "react-router-dom";
import axios from "axios";
// import e from "express";

function VideoUpload(props) {
  function handlesubmit(event) {
    event.preventDefault();

    const newObj = {
      title: event.target.name.value,
      description: event.target.description.value,
    };

    axios
      .post("http://localhost:8080/videos", newObj)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    alert("upload video");
    props.history.goBack();
  }

  return (
    <div class="upload">
      <h2 className="upload__title">Upload Video </h2>
      <div className="upload__content">
        <h4 className="upload__thumbnail"> VIDEO THUMBNAIL</h4>
        <img className="upload__logo" src={thumbnail} alt="upload-logo" />

        <form onSubmit={handlesubmit} className="label">
          <label className="label__title"> TITLE YOUR VIDEO </label>
          <input
            placeholder="Add a title to your video"
            className="label__input"
            name="name"
            id="description"
          />
          <label className="label__title"> ADD A VIDEO DESCRIPTION </label>
          <input
            placeholder="Add a description of your video"
            className="label__comment"
            name="description"
            id="description"
          />
          <div className="label__content">
            <button className="label__publish"> PUBLISH </button>
            <h4 className="label__cancel">CANCEL</h4>
          </div>
        </form>
      </div>
      <div className="label__content"></div>
    </div>
  );
}

export default VideoUpload;
