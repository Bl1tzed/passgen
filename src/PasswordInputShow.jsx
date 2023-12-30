import TextField from '@mui/material/TextField';
import { useState } from 'react';
import T from 'prop-types'

export default function PasswordInputShow({ password }) {

  const [p, setP] = useState("")
  password.current = setP;
  
  return (
    <div>
      <TextField
        id="outlined-read-only-input"
        label="Password"
        value={p}
        InputProps={{
          readOnly: true,
        }}
      />
    </div>)
}

PasswordInputShow.propTypes = {
  password: T.shape({current: T.func})
}