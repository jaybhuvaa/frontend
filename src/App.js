import "./App.css";
import Home from "./Home";
import EmployeesView from "./components/employee/EmployeesView";
import "..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import "..//node_modules/bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./components/common/NavBar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/view-employees"
            element={<EmployeesView />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
