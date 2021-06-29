import { darkTheme } from "./themes";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "./navbar/navbar";
import Content from "./content/Content";

const GlobalStyles = createGlobalStyle`
  body{
    min-height:90vh;
    width:100%;
    background-color:${props=>props.theme.secondBgColor};
  }
`
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles/>
      <Navbar/>
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
