import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 100,
  duration: "60s"
};

export default function() {
  let res = http.get(`http://localhost:3000/api/listings/${Math.floor(Math.random() * 10000000)}`);
  check(res, {
    "status was 200": (r) => r.status == 200,
    "transaction time OK": (r) => r.timings.duration < 2000
  });
  sleep(0.01);
};