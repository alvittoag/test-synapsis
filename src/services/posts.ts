import { axiosInstance } from "./axios";

export default {
  getAll: () => {
    return axiosInstance.get("/posts");
  },
  getById: (id: number) => {
    return axiosInstance.get(`/posts/${id}`);
  },
  getByComments: (id: number) => {
    return axiosInstance.get(`/posts/${id}/comments`);
  },
  getByUserId: (id: number) => {
    return axiosInstance.get(`/users/${id}`);
  },
};
