import { darkTheme } from "./themes";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Content from "./content/Content";
import CountryDetails from "./country/CountryDetails";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Content} />
          <Route path="/country/:name" component={CountryDetails} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
// eslint-disable-next-line no-lone-blocks
{/* <div>Icons made by <a href="" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
// eslint-disable-next-line no-lone-blocks
{/* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}

export default App;
