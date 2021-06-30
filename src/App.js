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
// eslint-disable-next-line no-lone-blocks
{/* <div>Icons made by <a href="" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
// eslint-disable-next-line no-lone-blocks
{/* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
// eslint-disable-next-line no-lone-blocks
{/* <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

export default App;
