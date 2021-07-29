const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

const videos = () => {
  const videoData = fs.readFileSync("./data/videos.json");
  const parsedVideoData = JSON.parse(videoData);
  return parsedVideoData;
};
const videoDetail = () => {
  const videoDetailsData = fs.readFileSync("./data/video-details.json");
  const parsedDetailsData = JSON.parse(videoDetailsData);
  return parsedDetailsData;
};

router.get("/", (req, res) => {
  const videoList = videos();
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
    channel: req.body.channel,
    image: "image7.jpeg",
  };

  videoList.push(newVideoList);

  fs.writeFileSync("./data/videos.json", JSON.stringify(videoList));

  res.json(videoList);
});

module.exports = router;
