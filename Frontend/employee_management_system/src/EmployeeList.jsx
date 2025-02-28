import React, { useEffect, useState } from "react";
import axios from "axios";
import UpdateEmployee from "./updateEmployee";

const EmployeeList = () => {
    const [Employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showModel, setShowModel] = useState(false);
    const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);

    const fetchEmployees = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`/api/employees/allEmployees`);
            setEmployees(response.data);
        } catch (error) {
            setError("Error fetching employee data.");
        } finally {
            setLoading(false);
        }
    };

    const updateEmployee = (empId) => {
        setSelectedEmployeeId(empId);
        setShowModel(true);
    };

    const handleModelClose = () => {
        setShowModel(false);
        setSelectedEmployeeId(null);
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>;
    }
    if (error) {
        return <div className="alert alert-danger text-center">{error}</div>;
    }

    const deleteEmployee = async (empId) => {
        const confirmed = window.confirm("Are you sure you want to delete this employee?");
        if (confirmed) {
            try {
                await axios.delete(`/api/employees/${empId}`);
                alert("Employee Deleted Successfully!");
                fetchEmployees();
            } catch (error) {
                console.error(error);
                alert(error);
            }
        }
    };

    return (
        <div className='container-fluid bg-dark'>
           <div style={{ textAlign: "center" }}>
    <h1
        style={{
            boxShadow: "black 0.5px 0.5px 0.5px",
            display: "inline-block", 
            color: "wheat",padding: "10px"
        }}
        className="text-center mb-4"
    >
        Employees: {Employees.length}
    </h1>
</div>

            <button className="btn btn-outline-primary bg-dark mb-4" onClick={fetchEmployees}>
                Refresh
            </button>
            {Employees.length === 0 ? (
                <p className="text-danger">No Employees Found.</p>
            ) : (
                <ul className="list-group">
                    {Employees.map((employee) => (
                        <div style={{backgroundColor: "transparent",boxShadow:"black 0.5px 0.5px 0.5px",padding:"8px"}} className="card mb-3" key={employee.id}>
                            <div className="card-body pd-5">
                                <div className="d-flex justify-content-between">
                                    <h5 style={{color:'wheat'}}>
                                        {employee.fname} {employee.lname}
                                    </h5>
                                    <strong style={{color:'wheat'}}>{employee.department}</strong>
                                </div>
                               <div style={{
                                display: "flex",
                                justifyContent: "space-evenly"
                               }}>
                                <div
                                style={{
                                    color: "wheat"
                                }}
                                >
                                <span>Email: </span>
                                <p>{employee.email}</p>
                                </div>
                                <div
                                 style={{
                                    color: "wheat"
                                }}
                                >
                                    <span>Salary: </span>
                                    <p>{employee.salary}</p>
                                </div>
                                 <div
                                  style={{
                                    color: "wheat"
                                }}
                                 >
                                    <span>Leaves: </span>
                                    <p>{employee.no_of_leaves}</p>
                                 </div>
                                 
                               </div>

                               <div
                                  style={{
                                    color: "wheat"
                                }}
                                 >
                                    <span>Date of Join: </span>
                                    <p>{employee.joining_date}</p>
                                 </div>
                                 
                               </div>
                                <div
                                    className="button-container d-flex justify-content-end"
                                    style={{ gap: "10px",backgroundColor: "transparent" }}
                                >
                                    <button
                                        type="button"
                                        className="btn btn-outline-success bg-dark"
                                        onClick={() => updateEmployee(employee.id)}
                                    >
                                        Update
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger bg-dark"
                                        onClick={() => deleteEmployee(employee.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        
                    ))}
                </ul>
            )}
            {showModel && (
            <UpdateEmployee
            empId={selectedEmployeeId}
            onClose={handleModelClose}
            onUpdate={fetchEmployees}
        />
    )}
        </div>

        
    );
    
};

export default EmployeeList;
