import React, { useEffect, useState } from "react";
import axios from "axios";

const UpdateEmployee = ({ empId, onClose, onUpdate }) => {

    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const fetchEmployee = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/api/employees/${empId}`);
                setEmployee(response.data);
            } catch (error) {
                setError("Error fetching employee data.");
            } finally {
                setLoading(false);
            }
        };
        if (empId) {
            fetchEmployee();
        }
    }, [empId]);

   
    const handleChange = (e) => {
        const { name, value } = e.target;
        employee.joining_date = employee.joining_date;
        setEmployee((prev) => ({ ...prev, [name]: value }));
    };

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`/api/employees/${empId}`, employee);
            onUpdate(); 
            onClose();  
        } catch (error) {
            console.error(error);
            alert("Error updating employee.");
        }
    };

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>;
    }
    if (error) {
        return <div className="alert alert-danger text-center">{error}</div>;
    }

    return (
        <div
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
        }}
    >
        <div className="modal-dialog" role="document">
            <div
                className="modal-content"
                style={{
                    backgroundColor: "black",
                    color: "wheat",
                    padding: "5px",
                    borderRadius: "20px",
                    maxWidth: "800px",
                    width: "100%",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
            >
                <div className="modal-header" style={{
                    display: "flex",
                    justifyContent: "space-evenly"
                    
                }}>
                    <h5 className="modal-title">Update Employee</h5>
                    
                    <button
                        type="button"
                        className="close"
                        onClick={onClose}
                        aria-label="Close"
                        onMouseEnter={(e) => {
                            e.target.style.color = "red";
                            e.target.style.cursor = "pointer"; 
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.color = "wheat"; 
                            e.target.style.cursor = "";
                        }}
                        style={{
                            position: "absolute",
                            right: "0",
                            background: "transparent", 
                            border: "none",
                            fontSize: '24px',
                            color:"wheat"
                        }}
                        
                       
                    >
                        <span aria-hidden="true"  >&times;</span>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        <div className="form-group">
                            <label>First Name</label>
                            <input
                                type="text"
                                name="fname"
                                value={employee.fname || ""}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input
                                type="text"
                                name="lname"
                                value={employee.lname || ""}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={employee.email || ""}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Department</label>
                            <input
                                type="text"
                                name="department"
                                value={employee.department || ""}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Salary</label>
                            <input
                                type="number"
                                name="salary"
                                value={employee.salary || ""}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label>Number of Leaves</label>
                            <input
                                type="number"
                                name="no_of_leaves"
                                value={employee.no_of_leaves || ""}
                                onChange={handleChange}
                                className="form-control"
                            />
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="submit" className="btn btn-outline-success bg-dark">
                            Update
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-danger bg-dark"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    

    );
};

export default UpdateEmployee;
