import jwt_decode from "jwt-decode";

export function checkUserLoggedIn() {
  //actual implementation is to check on backend
  const user = sessionStorage.getItem("user");
  return user && true;
}

export function logIn(token) {
  var decoded = jwt_decode(token);
  sessionStorage.setItem("user", decoded);
  return decoded;
}

export function logOut() {
  sessionStorage.removeItem("user");
}

export function isUserAdmin() {
  if (checkUserLoggedIn()) {
    return JSON.parse(sessionStorage.getItem("user")).isAdmin;
  }
}
