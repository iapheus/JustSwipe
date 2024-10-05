import React from 'react'
import Main from '../pages/Main';
import Search from '../pages/Search';
import Profile from '../pages/Profile';
import Page from '../pages/Page';
import { Routes, Route } from 'react-router-dom';


function RoutedPage() {
  return (
    <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/r/:name" element={<Page />} />
    </Routes>
  )
}

export default RoutedPage