import "./App.css";
import Home from "./Home";
import EmployeesView from "./components/employee/EmployeesView";
import "..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import "..//node_modules/bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div className="App">
      <h2>WELCOME TO FRONTEND</h2>
      <Home />
      <EmployeesView />
    </div>
  );
}

export default App;
