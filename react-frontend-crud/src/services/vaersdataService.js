import http from "../http-common";

const getAll = () => {
  return http.get("/vaersdata");
};

const get = id => {
  return http.get(`/vaersdata/${id}`);
};

const create = data => {
  return http.post("/vaersdata", data);
};

const update = (id, data) => {
  return http.put(`/vaersdata/${id}`, data);
};

const remove = id => {
  return http.delete(`/vaersdata/${id}`);
};

const removeAll = () => {
  return http.delete(`/vaersdata`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll
};