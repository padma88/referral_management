import http from "./http-common";

function loginService(data) {
  return http.post("/user/login", data);
}

function create(data) {
    return http.post("/user", data);
}

export { loginService, create };
