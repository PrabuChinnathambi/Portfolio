import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Project";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/education" component={Education}></Route>
          <Route path="/experience" component={Experience}></Route>
          <Route path="/projects" component={Project}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
