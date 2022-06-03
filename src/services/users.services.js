import config from "./api/config";
import { options, handleResponse } from "../helpers";
import { cookiesUtil } from "../utilities";
import ajaxHelper from "./api";

export const usersServices = {
  login,
  logout,
  getAll,
  getOne,
  getCurrent,
  deleteOne,
  deleteMany,
  register,
  update,
  create,
};

function login(email, password) {
  return handleResponse(
    ajaxHelper.post(config.URL_LOGIN, { username: email, password }, options())
  );
}

function logout() {
  cookiesUtil.remove("THIS IS USER IDENTIFY KEY");
  return true;
}

function getAll(params = {}) {
  return handleResponse(
    ajaxHelper.get(config.URL_USER + "/list", params, options())
  );
}

function getOne(id) {
  return handleResponse(
    ajaxHelper.get(config.URL_USER + `/${id}`, {}, options())
  );
}

function getCurrent() {
  return handleResponse(
    ajaxHelper.get(config.URL_USER + `/getCurrent`, {}, options())
  );
}

function register(user) {
  return handleResponse(
    ajaxHelper.post(config.URL_USER + `/new`, user, options())
  );
}

function create(user) {
  return handleResponse(
    ajaxHelper.post(config.URL_USER + `/new`, user, options())
  );
}

function update(user) {
  return handleResponse(
    ajaxHelper.put(config.URL_USER + `/${user._id}`, user, options())
  );
}

function deleteOne(id) {
  return handleResponse(
    ajaxHelper.delete(config.URL_USER + `/${id}`, options())
  );
}

function deleteMany(userIds) {
  return handleResponse(
    ajaxHelper.deleteMany(config.URL_USER, userIds, options())
  );
}
