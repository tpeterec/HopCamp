import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 20 },
    { duration: "1m30s", target: 10 },
    { duration: "20s", target: 0 },
  ],
};

export default function () {
  http.get("http://159.223.122.220:3000/api/campsites");
  http.get("http://159.223.122.220:3000/api/ratings");
  http.get("http://159.223.122.220:3000/api/camping-spots");
  http.get("http://159.223.122.220:3000/api/campers-also");
  http.get("http://159.223.122.220:3000/api/photogallery");
  http.get("http://159.223.122.220:3000/api/things-nearby");
  //   const res = http.get("http://159.223.122.220t:3000/api/campsites");
  //   check(res, { "status was 200": (r) => r.status == 200 });
  //   sleep(1);
}
