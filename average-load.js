import http from "k6/http";
import { sleep } from "k6";

export const options = {
  // Key configurations for avg load test in this section
  stages: [
    { duration: "5m", target: 100 }, // traffic ramp-up from 1 to 100 users over 5 minutes.
    { duration: "10m", target: 100 }, // stay at 100 users for 10 minutes
    { duration: "5m", target: 0 }, // ramp-down to 0 users
  ],
};

export default () => {
  http.get("http://159.223.122.220:5001/api/campsites");
  http.get("http://159.223.122.220:5001/api/ratings");
  http.get("http://159.223.122.220:5001/api/camping-spots");
  http.get("http://159.223.122.220:5001/api/campers-also");
  http.get("http://159.223.122.220:5001/api/photogallery");
  http.get("http://159.223.122.220:5001/api/things-nearby");
  sleep(1);
  // MORE STEPS
  // Here you can have more steps or complex script
  // Step1
  // Step2
  // etc.
};
