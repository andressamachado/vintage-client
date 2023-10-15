import { createContext } from "react";

// true = there is session
// false = there is no session
export const SessionContext = createContext({
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
});
