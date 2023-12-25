// Sử dụng useContext để làm localStorage
// Setup
import { createContext, useContext, useState } from "react";
import { CURRENT_USER } from "../../constant";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(() => {
    const user = JSON.parse(localStorage.getItem(CURRENT_USER));
    return user || null;
  });

  const handleSignin = (user) => {
    setCurrentUser(user);
    localStorage.setItem(CURRENT_USER, JSON.stringify(user));
  };
  console.log("CURRENT_USER: ", CURRENT_USER);

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.clear(CURRENT_USER);
  };
  return (
    <UserContext.Provider value={{ currentUser, handleSignin, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(UserContext);
  return value;
};
