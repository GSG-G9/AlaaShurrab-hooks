import "./App.css";
import { Link, Route, Switch } from "react-router-dom";
import Task1 from "./components/Task1";
import Task2 from "./components/Task2";
import Task3 from "./components/Task3";
import Task4 from "./components/Task4";

function App() {
  return (
    <div className="App">
      <h1>Welcome to task 2</h1>
      <Link to="/task1">Task1</Link>
      <br></br>
      <Link to="/task2">Task2</Link>
      <br></br>
      <Link to="/task3">Task3</Link>
      <br></br>
      <Link to="/task4">Task4</Link>
      <Switch>
        <Route path="/task1">
          <Task1 />
        </Route>
        <Route path="/task2">
          <Task2 />
        </Route>
        <Route path="/task3">
          <Task3 />
        </Route>
        <Route path="/task4">
          <Task4 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
