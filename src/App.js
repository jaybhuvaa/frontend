import "./App.css";
import Home from "./Home";
import EmployeesView from "./components/employee/EmployeesView";
import "..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import "..//node_modules/bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./components/common/NavBar.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddEmployee from "./components/employee/AddEmployee.js";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/viewEmployee" element={<EmployeesView />}></Route>
          <Route exact path="/addEmployee" element={<AddEmployee />}></Route>
        </Routes>
      </Router>
      
    </main>
  );
}

export default App;
