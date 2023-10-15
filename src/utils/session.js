export function checkUserLoggedIn() {
  //actual implementation is to check on backend
  const token = sessionStorage.getItem("token");
  return token && true;
}

export function logIn(token) {
  sessionStorage.setItem("token", token);
}

export function logOut() {
  sessionStorage.removeItem("token");
}
