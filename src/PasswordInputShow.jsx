import TextField from "@mui/material/TextField";
import { useContext } from "react";
import T from "prop-types";
import { PasswordContext } from "./PasswordContext";

export default function PasswordInputShow() {
  const { password } = useContext(PasswordContext);
  return (
    <TextField
      id="outlined-read-only-input"
      label="Password"
      value={password.value}
      InputProps={{
        readOnly: true,
      }}
    />
  );
}

PasswordInputShow.propTypes = {
  password: T.shape({ current: T.func }),
};
