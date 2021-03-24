import axios from "axios";

const KEY = "AIzaSyAAvGxPsQAtcNShcUuSQ4CHxvIe5xjgLxI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 50,
    key: KEY
  },
  headers: {}
});

// https://www.googleapis.com/youtube/v3

