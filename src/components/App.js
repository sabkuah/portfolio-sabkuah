import { BrowserRouter as Router, Route } from "react-router-dom";
import "../App.css";
import Landing from "./Landing";
import Nav from "./Nav";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/portfolio" component={Portfolio} />
      </Router>
    </div>
  );
}

export default App;
