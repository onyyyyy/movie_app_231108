const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=ko-KR";
const popularUrl = baseUrl + "movie/popular" + "?language=ko-KR";
const topRatedUrl = baseUrl + "movie/top_rated" + "?language=ko-KR";
const upcomingUrl = baseUrl + "movie/upcoming" + "?language=ko-KR";
// const searchUrl = baseUrl + "search/movie" + "?language=ko-kr";

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

export const movieDetail = (id) => {
  const detailUrl = baseUrl + `movie/${id}` + "?language=ko-kr";
  return fetch(detailUrl, options).then((res) => res.json());
};

export const movieSearch = (keyword) => {
  const searchUrl = baseUrl + `search/movie?query=${keyword}&language=ko-kr`;
  return fetch(searchUrl, options).then((res) => res.json());
};

// export const movieSearch = () =>
//   fetch(searchUrl, options).then((res) => res.json());
