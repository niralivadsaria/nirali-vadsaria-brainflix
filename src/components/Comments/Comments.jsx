import "./Comments.scss";
import moment from "moment";

function Comments(props) {
  const comments = props.comments ?? [];
  return (
    <>
      {comments.map(function (c) {
        return (
          <div class="details">
            <div class="description">
              <img class="description__image" alt="" />
              <p class="description__name"> {c.name}</p>
              <p class="description__date">{moment(c.timestamp).fromNow()} </p>
            </div>
            <div>
              <p class="description__comment"> {c.comment}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Comments;
