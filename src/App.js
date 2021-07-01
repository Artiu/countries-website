import { darkTheme, lightTheme } from "./themes";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {useEffect, useState} from 'react';
import Navbar from "./navbar/navbar";
import Content from "./content/Content";

const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
    font-family: 'Roboto Slab',serif;
    text-decoration: none;
  }
  body{
    min-height:90vh;
    width:100%;
    background-color:${props=>props.theme.secondBgColor};
  }
`
function App() {
  const [isDark,setTheme] = useState(true);
  useEffect(()=>{
    if(localStorage.getItem("theme")) setTheme(JSON.parse(localStorage.getItem("theme")))
  },[]);
  const changeTheme = () =>{
    localStorage.setItem("theme",!isDark);
    setTheme(!isDark);
  }
  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles/>
      <Navbar changeTheme = {changeTheme} theme = {isDark}/>
      <Content/>
    </ThemeProvider>
  );
}

export default App;