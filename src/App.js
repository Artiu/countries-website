import { darkTheme } from "./themes";
import { ThemeProvider } from "styled-components";
import Navbar from "./navbar/navbar";
import Content from "./content/Content";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Navbar/>
      <Content/>
    </ThemeProvider>
  );
}
// eslint-disable-next-line no-lone-blocks
{/* <div>Icons made by <a href="" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
// eslint-disable-next-line no-lone-blocks
{/* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

export default App;
