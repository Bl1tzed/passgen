import {useState} from 'react';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

export default function Properties() {
	return (<>
		<InputSlider />
		<CheckboxBox />
	</>)
}

function InputSlider() {
	const [numOfChars, setNumOfChars] = useState(16);
	const storage = JSON.parse(localStorage.getItem('properties'));
	localStorage.setItem('properties', JSON.stringify(Object.assign(storage || {}, {numOfChars,})));
	return (<>
		<Typography id="input-slider" gutterBottom>Number of characters: {numOfChars}</Typography>
		<Slider
			size="medium"
			defaultValue={numOfChars}
			aria-label="<Medium>"
			min={1}
			max={32}
			valueLabelDisplay="auto"
			onChange={event => setNumOfChars(event.target.value)}
		/>
	</>)
}

function CheckboxBox() {
	const [defaultChars, setDefaultChars] = useState(true);
  const [register, setRegister] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [special, setSpecial] = useState(true);
	const storage = JSON.parse(localStorage.getItem('properties'));
	localStorage.setItem('properties', JSON.stringify(Object.assign(storage || {}, {
			defaultChars,
			register,
			numbers,
			special,
	})));



	return (<>
		<Box
      component="form"
      sx={{
        '& > :not(style)': { marginBottom: 2, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControlLabel 
        control={<Checkbox 
                    defaultChecked 
                    onChange={event => setRegister(event.target.checked)}
                />} 
        label="A-Z" 
        id="upRegisterCheckbox"
      />
      <FormControlLabel 
        control={<Checkbox 
                    defaultChecked 
                    onChange={event => setDefaultChars(event.target.checked)}
                />} 
        label="a-z" 
        id="defaultCharsCheckbox"
      />
      <FormControlLabel 
        control={<Checkbox 
                    defaultChecked 
                    onChange={event => setSpecial(event.target.checked)}
                />} 
        label="!$" 
        id="specialCheckbox"
      />
      <FormControlLabel 
        control={<Checkbox 
                    defaultChecked 
                    onChange={event => setNumbers(event.target.checked)}
                />} 
        label="0-9" 
        id="numbersCheckbox"
      />
    </Box>
	</>)
}

