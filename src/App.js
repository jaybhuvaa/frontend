import "./App.css";
import Home from "./Home";
import EmployeesView from "./components/employee/EmployeesView";
import "..//node_modules/bootstrap/dist/css/bootstrap.min.css";
import "..//node_modules/bootstrap/dist/js/bootstrap.min.js";
import NavBar from "./components/common/NavBar.jsx";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  RouterProvider,
} from "react-router-dom";
import AddEmployee from "./components/employee/AddEmployee.js";
import EditEmployee from "./components/employee/EditEmployee.js";
import EmployeeProfile from "./components/employee/EmployeeProfile.js";
import Login from "./components/common/login.js";
import Protected from "./components/common/authLayout";
import Signup from "./components/common/signup.js";
import { Provider } from "react-redux";
import store from "./components/common/store.js";

function App() {
  return (
    <main className="container mt-5">
      <Provider store={store}>
        <Router>
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Protected authentication={false}>
                  <Home />
                </Protected>
              }
            ></Route>
            <Route
              exact
              path="/viewEmployee"
              element={
                <Protected authentication>
                  <EmployeesView />
                </Protected>
              }
            ></Route>
            <Route
              exact
              path="/addEmployee"
              element={
                <Protected authentication>
                  <AddEmployee />
                </Protected>
              }
            ></Route>
            <Route
              exact
              path="/editEmployee/:id"
              element={
                <Protected authentication>
                  <EditEmployee />
                </Protected>
              }
            ></Route>
            <Route
              exact
              path="/employeeProfile/:id"
              element={
                <Protected authentication>
                  <EmployeeProfile />
                </Protected>
              }
            ></Route>
            <Route
              exact
              path="/login"
              element={
                <Protected authentication={false}>
                  <Login />
                </Protected>
              }
            ></Route>
            <Route
              exact
              path="/signup"
              element={
                <Protected authentication={false}>
                  <Signup />
                </Protected>
              }
            ></Route>
          </Routes>
        </Router>
      </Provider>
    </main>
  );
}

export default App;
