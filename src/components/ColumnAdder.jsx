import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector,useDispatch } from 'react-redux';
import { changeColumnCount } from '../redux/theme/themeSlice';

export default function BasicSelect() {
  const dispatch = useDispatch();
  let columnCount = useSelector(state => state.theme.columnCount)

  const handleChange = (event) => {
    console.log(event.target.value);
    dispatch(changeColumnCount(event.target.value));
    console.log(columnCount);
  };

  return (
    <Box sx={{minWidth: 120, minHeight: 15}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Column Count</InputLabel>
        <Select
          value={columnCount}
          label="Column Count"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={6}>6</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
