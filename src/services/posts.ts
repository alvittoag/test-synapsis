import { axiosInstance } from "./axios";

export default {
  getAll: (page: number) => {
    return axiosInstance.get(`/posts?page=${page ?? 0}&per_page=10`);
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
