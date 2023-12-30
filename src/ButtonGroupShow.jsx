import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import T from 'prop-types'

export default function ButtonGroupShow({ password, passwordArrayLocal }) {
  return (<>
    <ButtonGroup variant="contained" aria-label="contained button group">
      <Button
        onClick={() => generatePassword(password, passwordArrayLocal)}
        id="copyBtn">
        Generate
      </Button>
      <Button
        onClick={() => {
          const passwordInput = document.getElementById("outlined-read-only-input").value
          navigator.clipboard.writeText(passwordInput)
        }
        }
        id="copyBtn">
        Copy
      </Button>
    </ButtonGroup>
  </>)
}

ButtonGroupShow.propTypes = {
  password: T.shape({current: T.func}),
  passwordArrayLocal: T.shape({current: T.func}),
}

function generatePassword(password, passwordArrayLocal) {
  const defaultCharsString = "abcdefghijklnopqrstuvwxyz";
  const charsRegisterString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbersString = "1234567890";
  const specialString = "!@#$^&*()[]-=_+.,/?";

  let newPassword = "";
  let passwordChars = "";

  let { defaultChars, register, numbers, special, numOfChars } = JSON.parse(localStorage.getItem('properties')) || {};

  if (defaultChars) passwordChars += defaultCharsString;
  if (register) passwordChars += charsRegisterString;
  if (numbers) passwordChars += numbersString;
  if (special) passwordChars += specialString;

  if (passwordChars === "") { password.current("Incorrect Properties"); return }

  for (let i = 0; i < numOfChars; i++) {
    newPassword += passwordChars[getRandomInt(0, passwordChars.length - 1)]
  }

  localStorage.setItem('password', newPassword);
  const storage = JSON.parse(localStorage.getItem('passwordArray'));

  if (storage) {
    localStorage.setItem('passwordArray', JSON.stringify([newPassword].concat(storage)));
  } else {
    localStorage.setItem('passwordArray', JSON.stringify([newPassword]))
  }

  passwordArrayLocal.current(JSON.parse(localStorage.getItem('passwordArray')));
  password.current(newPassword);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
