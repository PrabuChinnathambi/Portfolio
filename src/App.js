import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
 

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/education" component={Education}></Route>
          <Route path="/experience" component={Experience}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
