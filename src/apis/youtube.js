import axios from "axios";

const KEY = "AIzaSyCvrPMXVRciJ7Mbo2zDzEXJ4V_h2LyqcXA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
