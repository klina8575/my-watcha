import axiosInstance from "./index";

export const getlatest = () => axiosInstance.get("/movie/latest");

// export const getPost = (id) =>
//   axiosInstance.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

// export const getUsers = (id) =>
//   axiosInstance.get(`https://jsonplaceholder.typicode.com/users`);
