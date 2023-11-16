const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=ko-kr";
const popularUrl = baseUrl + "movie/popular" + "?language=ko-kr";
const topRatedUrl = baseUrl + "movie/top_rated" + "?language=ko-kr";
const upcomingUrl = baseUrl + "movie/upcoming" + "?language=ko-kr";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzQwMGUyZTZhZTI1NjcxNmIzM2JmMGU5NzZjN2U3MiIsInN1YiI6IjY1NGIzYjNiMjg2NmZhMDBmZTAxNzNlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eyrBSq1n6-zAMkPkgpWhL7ZF_xN7rGMsDt8YFQlK0DI",
  },
};

export const nowPlaying = () =>
  fetch(nowPlayingUrl, options).then((res) => res.json());
// options => 추가적으로 요청 할 옵션

export const popular = () =>
  fetch(popularUrl, options).then((res) => res.json());

export const topRated = () =>
  fetch(topRatedUrl, options).then((res) => res.json());

export const upcoming = () =>
  fetch(upcomingUrl, options).then((res) => res.json());
