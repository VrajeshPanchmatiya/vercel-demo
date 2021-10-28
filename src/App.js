import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import SimpleForm from "./SimpleForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/SimpleForm" component={SimpleForm} />
          <Route path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
