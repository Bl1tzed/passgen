import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import T from "prop-types";
import { useContext } from "react";
import { PasswordContext } from "./PasswordContext";

export default function ButtonGroupShow({ passwordArrayLocal }) {
  const { password, setPassword } = useContext(PasswordContext);
  return (
    <>
      <ButtonGroup variant="contained" aria-label="contained button group">
        <Button
          onClick={() => generatePassword(passwordArrayLocal, setPassword)}
          className="copyBtn"
        >
          Generate
        </Button>
        <Button
          onClick={() => {
            navigator.clipboard.writeText(password.value);
          }}
          className="copyBtn"
        >
          Copy
        </Button>
      </ButtonGroup>
    </>
  );
}

ButtonGroupShow.propTypes = {
  password: T.shape({ current: T.func }),
  passwordArrayLocal: T.shape({ current: T.func }),
};

function generatePassword(passwordArrayLocal, setPassword) {
  const defaultCharsString = "abcdefghijklnopqrstuvwxyz";
  const charsRegisterString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersString = "1234567890";
  const specialString = "!@#$^&*()[]-=_+.,/?";

  let newPassword = "";
  let passwordChars = "";

  let { defaultChars, register, numbers, special, numOfChars } =
    JSON.parse(localStorage.getItem("properties")) || {};

  if (defaultChars) passwordChars += defaultCharsString;
  if (register) passwordChars += charsRegisterString;
  if (numbers) passwordChars += numbersString;
  if (special) passwordChars += specialString;

  if (passwordChars === "") {
    setPassword("Incorrect Properties");
    return;
  }

  for (let i = 0; i < numOfChars; i++) {
    newPassword += passwordChars[getRandomInt(0, passwordChars.length - 1)];
  }

  localStorage.setItem("password", newPassword);
  const storage = JSON.parse(localStorage.getItem("passwordArray"));

  localStorage.setItem(
    "passwordArray",
    JSON.stringify(storage ? [newPassword].concat(storage) : [newPassword])
  );

  passwordArrayLocal.current(storage || []);
  setPassword({ value: newPassword });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
