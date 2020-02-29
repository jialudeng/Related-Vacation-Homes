import http from "k6/http";
import { check, sleep } from "k6";

const categories = ['Entire guesthouse', 'Entire house', 'Entire apartment', 'Entire cabin', 'Entire guest suite', 'Entire cottage', 'Entire villa', 'Entire bungalow', 'Private room', 'Entire loft', 'Shared room'];

export let options = {
  vus: 100,
  duration: "60s"
};

export default function() {
  const url = 'http://localhost:3000/api/listings';
  const body = {
    category: `${categories[Math.floor(Math.random() * 11)]}`,
    beds: 4,
    title: 'urban oasis',
    price: 842,
    score: 4.2,
    reviews: 322,
    city: 'Guangzhou',
    state: 'Guangdong',
    country: 'China'
  };

  const params = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  let res = http.post(url, body, params);
  check(res, {
    "status was 200": (r) => r.status == 201,
    "transaction time OK": (r) => r.timings.duration < 2000
  });
  sleep(0.01);
}