import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./views/home";

export const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
