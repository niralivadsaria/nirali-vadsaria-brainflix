const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

const videos = () => {
  const videoData = fs.readFileSync("./data/video-details.json");
  const parsedVideoData = JSON.parse(videoData);
  return parsedVideoData;
};
const videoDetail = () => {
  const videoDetailsData = fs.readFileSync("./data/video-details.json");
  const parsedDetailsData = JSON.parse(videoDetailsData);
  return parsedDetailsData;
};

router.get("/", (req, res) => {
  const videoList = videoDetail();
  res.json(videoList);
});

router.get("/:videoId", (req, res) => {
  const videoDetailsId = videoDetail();
  const singleVideo = videoDetailsId.find(
    (list) => list.id === req.params.videoId
  );

  console.log(singleVideo);
  res.status(200).json(singleVideo);
});

router.post("/", (req, res) => {
  const videoList = videos();

  const newVideoList = {
    id: uniqid(),
    title: req.body.title,
    channel: "travel the world ",
    image: "http://localhost:8080/images/travel.jpeg",
    description: req.body.description,
    views: "0",
    likes: "0",
    duration: "0:00",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: +new Date(),
    comments: [],
  };

  videoList.push(newVideoList);

  fs.writeFileSync("./data/video-details.json", JSON.stringify(videoList));

  res.json(videoList);
});

module.exports = router;
