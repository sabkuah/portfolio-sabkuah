import { BrowserRouter as Router, Route } from "react-router-dom";
import "../App.css";
import About from "./About";
import Contact from "./Contact";
import Landing from "./Landing";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
