import { axiosInstance } from "./axios";

export default {
  getAll: (search: string) => {
    return axiosInstance.get(`/users?name=${search}`);
  },
  add: (body: any) => {
    return axiosInstance.post("/users", body);
  },
  edit: ({ id, body }: { id: number; body: any }) => {
    return axiosInstance.put(`/users/${id}`, body);
  },

  delete: (id: number) => {
    return axiosInstance.delete(`/users/${id}`);
  },
};
