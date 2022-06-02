import http from "./http-common";

function loginService(data) {
  return http.post("/user/login", data);
}

function create(data) {
    return http.post("/user", data);
}


function fetchUser(data) {
  return http.get("/user/" + data);
}

function fetchAllUsers(data) {
  return http.post("/user/fetch-all", data);
}

export { loginService, create, fetchUser, fetchAllUsers };
