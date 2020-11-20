import { Router, Route } from "react-router-dom";
import "../App.css";
import Landing from "./Landing";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Route exact path="/">
          <Landing />
        </Route> */}
    </div>
  );
}

export default App;
