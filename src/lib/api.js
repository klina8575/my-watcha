import axiosInstance from "./index";

export const getlatest = () => axiosInstance.get("/movie/latest");

export const getUpcoming = () => axiosInstance.get("/movie/upcoming");

export const getNowPlaying = () => axiosInstance.get("/movie/now_playing");

export const getTopRated = () => axiosInstance.get("/movie/top_rated");

export const getPopular = () => axiosInstance.get("/movie/popular");

export const getDetail = (movieId) => axiosInstance.get(`/movie/${movieId}`);

export const getSimilar = (id) => axiosInstance.get(`/movie/${id}/similar`);

export const getSearch = (query) =>
  axiosInstance.get(`/search/movie?query=${query}`);

// export const getPost = (id) =>
//   axiosInstance.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

// export const getUsers = (id) =>
//   axiosInstance.get(`https://jsonplaceholder.typicode.com/users`);
