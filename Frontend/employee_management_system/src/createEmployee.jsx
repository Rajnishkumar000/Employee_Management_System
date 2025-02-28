import React, { useState } from "react";
import axios from "axios";

const CreateEmployee = () => {
 
  const [employee, setEmployee] = useState({
    fname: "",
    lname: "",
    email: "",
    department: "",
    salary: 0.0,
    no_of_leaves: 0,
    joining_date: ""
  });

  const [message, setMessage] = useState("");

  const handleInputChanges = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        if(employee.salary<=0 || employee.no_of_leaves<0){
            alert("Salary must be greater than 1000 and Number of leaves must be greater than -1.")
            return;
        }
      
      const response = await axios.post(`/api/employees/newEmployee`, employee);
      setMessage("Employee Created Successfully!");
      
      
      setEmployee({
        fname: "",
        lname: "",
        email: "",
        department: "",
        salary: 0.0,
        no_of_leaves: 0,
        joining_date: ""
      });
      alert("Employee Created Successfully!")
    } catch (error) {
      setMessage("Error: " + error.message);
    }
  };

  return (
    <div>
      <h1>Create New Employee</h1>
      <form style={{
        padding: "10px"
      }}  onSubmit={handleSubmit}>
        <div className="form-group m-5">
          <label style={{
            color:"wheat",
            marginRight: "10px"
          }}>First Name: </label>
          <input
            style={{
                backgroundColor: "#415a77",
                outline: "none",
                border: "1px",
                width: "300px",
                borderRadius: "12px",
                borderColor: "#0a9396",
                padding:"5px",
                color: "wheat"
                
            }}
           
            type="text"
            name="fname"
            value={employee.fname}
            onChange={handleInputChanges}
            required
          />
        </div>
        <div className="form-group m-5">
          <label style={{
            color:"wheat",
            marginRight: "10px"
          }}>Last Name: </label>
          <input style={{
                backgroundColor: "#415a77",
                outline: "none",
                border: "1px",
                width: "300px",
                borderRadius: "12px",
                borderColor: "#0a9396",
                padding:"5px",
                color: "wheat"
                
            }}
            type="text"
            name="lname"
            value={employee.lname}
            onChange={handleInputChanges}
            required
          />
        </div>
        <div className="form-group m-5">
          <label style={{
            color:"wheat",
            marginRight: "10px"
          }}>Email: </label>
          <input style={{
                backgroundColor: "#415a77",
                outline: "none",
                border: "1px",
                width: "300px",
                borderRadius: "12px",
                borderColor: "#0a9396",
                padding:"5px",
                color: "wheat"
                
            }}
            type="email"
            name="email"
            value={employee.email}
            onChange={handleInputChanges}
            required
          />
        </div>
        <div className="form-group m-5">
          <label style={{
            color:"wheat",
            marginRight: "10px"
          }}>Department: </label>
          <input style={{
                backgroundColor: "#415a77",
                outline: "none",
                border: "1px",
                width: "300px",
                borderRadius: "12px",
                borderColor: "#0a9396",
                padding:"5px",
                color: "wheat"
                
            }}
            type="text"
            name="department"
            value={employee.department}
            onChange={handleInputChanges}
            required
          />
        </div>
        <div className="form-group m-5">
          <label style={{
            color:"wheat",
            marginRight: "10px"
          }}>Salary: </label>
          <input style={{
                backgroundColor: "#415a77",
                outline: "none",
                border: "1px",
                width: "300px",
                borderRadius: "12px",
                borderColor: "#0a9396",
                padding:"5px",
                color: "wheat"
                
            }}
            type="number"
            name="salary"
            value={employee.salary}
            onChange={handleInputChanges}
            required
          />
        </div>
        <div className="form-group m-5">
          <label style={{
            color:"wheat",
            marginRight: "10px"
          }}>Number of Leaves: </label>
          <input style={{
                backgroundColor: "#415a77",
                outline: "none",
                border: "1px",
                width: "300px",
                borderRadius: "12px",
                borderColor: "#0a9396",
                padding:"5px",
                color: "wheat"
                
            }}
            type="number"
            name="no_of_leaves"
            value={employee.no_of_leaves}
            onChange={handleInputChanges}
            required
          />
        </div>
        <button style={{
            borderRadius: "12px",
            padding: "5px",
            marginLeft: "100px"
        }} type="submit" className="btn btn-outline-success ">Create New Employee</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateEmployee;
