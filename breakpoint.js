import http from "k6/http";
import { sleep } from "k6";

export const options = {
  // Key configurations for breakpoint in this section
  executor: "ramping-arrival-rate", //Assure load increase if the system slows
  stages: [
    { duration: "15m", target: 5000 }, // just slowly ramp-up to a HUGE load
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
