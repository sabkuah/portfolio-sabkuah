import { BrowserRouter as Router, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "../App.css";
import About from "./About";
import Contact from "./Contact";
import Landing from "./Landing";
import Navigation from "./Navigation";
import Portfolio from "./Portfolio";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <Router>
        <AnimatePresence>
          <Navigation />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/" exact component={Landing} />
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
