import * as React from 'react';
import { changeTheme, changeLogo } from '../redux/theme/themeSlice'
import { useSelector, useDispatch } from 'react-redux'
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';

function ThemeSwitch() {
  const dispatch = useDispatch();
  const themeValue = useSelector((state) => state.theme.mode)
  return (
    <div className='flex items-center justify-center'  onClick={() => {dispatch(changeTheme()); dispatch(changeLogo());}}>
        {
            themeValue === 'light' ? (
                <BedtimeIcon></BedtimeIcon>
            ) : (
                <LightModeIcon></LightModeIcon>
            )
        }
    </div>
  )
}

export default ThemeSwitch