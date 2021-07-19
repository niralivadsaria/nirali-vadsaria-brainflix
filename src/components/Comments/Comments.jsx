import "./Comments.scss";
import moment from "moment";

function Comments(props) {
  const comments = props.comments ?? [];
  return (
    <>
      {comments.map(function (c) {
        return (
          <div className="details">
            <div className="description">
              <img className="description__image" alt="" />
              <p className="description__name"> {c.name}</p>
              <p className="description__date">
                {moment(c.timestamp).fromNow()}
              </p>
            </div>
            <div>
              <p className="description__comment"> {c.comment}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Comments;
