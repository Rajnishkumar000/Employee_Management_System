import React from "react";
import EmployeeList from "./EmployeeList";
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";
import CreateEmployee from "./createEmployee";

const App = () => {
  return (
    // For multiple pages we use Router:
    <Router>
      <div style={{ height: "100vh" }} className="bg-dark">
       
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="nav">
           
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/get"
                activeClassName="active"
                exact
              >
                EmployeeList
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/create" activeClassName="active">
                Create Employee
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Routes for the components */}
        <Routes>
          {/* Default route */}
          <Route path="/" element={<EmployeeList />} />
          <Route path="/get" element={<EmployeeList />} />
          <Route path="/create" element={<CreateEmployee />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
