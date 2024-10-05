import React from 'react'
import ThemeSwitch from './ThemeSwitch'

import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ColumnAdder from './ColumnAdder';


function Header() {
  const navigate = useNavigate();
  const themeValue = useSelector((state) => state.theme.mode)
  const logoValue = useSelector((state) => state.theme.logo)

  return (
    <div className={`${themeValue === 'dark' ? 'bg-mui-dark' : 'bg-white'} flex justify-between`}>
        <img onClick={() => navigate('/')} src={logoValue} className='h-12 w-44 mt-3 ml-3 cursor-pointer'></img>
        <div className='flex mt-3 mr-3 space-x-4'>
            <ColumnAdder/>
            <ThemeSwitch/>
        </div>
    </div>
  )
}

export default Header