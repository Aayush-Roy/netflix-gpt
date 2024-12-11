import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '../utils/configSlice';

export default function BasicSelect() {
  const dispatch = useDispatch();
  const [age, setAge] = React.useState('');

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
    setAge(event.target.value);
  };

  return (
    <Box className="outline-none" sx={{ minWidth: 70 }}>
      <FormControl
        className="text-white rounded-md px-0 py-0 bg-zinc-700 outline-none"
        fullWidth
        size="small"
        color='white'
        // Use size="small" to reduce height
      >
        <InputLabel
          id="demo-simple-select-label"
          sx={{
            fontSize: '0.875rem', // Adjust font size
            color: 'white',
            padding:'',
            outline:"none",
          }}
        >
          <GTranslateIcon />
        </InputLabel>
        <Select 
          className="text-white"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleLanguageChange}
          sx={{
            fontSize: '0.875rem',
            color:"white",
            outline:"none" // Adjust font size inside the dropdown
          }}
        >
          {SUPPORTED_LANGUAGES.map(lang=><MenuItem value={lang.identifier}>{lang.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}
