// const { config } = require('dotenv');
const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
// const fs = require("fs");
const videos = require("./routes/videos");

//middleware
app.use(express.json());

app.use(cors());

app.use("/videos", videos);

app.use("/images", express.static("public/images"));

// require('dotenv') config();

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
