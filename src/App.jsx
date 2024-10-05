import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import FooterNavigation from './components/FooterNavigation.jsx'
import Header from './components/Header.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import RoutedPage from './routes/RoutedPage.jsx';
import { useSelector } from 'react-redux';

function App() {
  
  const themeValue = useSelector((state) => state.theme.mode)

  const darkTheme = createTheme({
    palette: {
      mode: themeValue,
    },
  });

  return (
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header/>
      <RoutedPage/>
      <FooterNavigation/>
    </ThemeProvider>
    </>
  )
}

export default App
