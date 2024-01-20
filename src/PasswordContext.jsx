import { useState, createContext } from "react";
import T from "prop-types";
export const PasswordContext = createContext();

function PasswordProvider({ children }) {
  const [password, setPassword] = useState({ value: "" });

  return (
    <PasswordContext.Provider value={{ password, setPassword }}>
      {children}
    </PasswordContext.Provider>
  );
}

export default PasswordProvider;

PasswordProvider.propTypes = {
  children: T.node,
};
