package com.employee.main.service;

import java.util.List;

import com.employee.main.Responses.DeleteResponse;
import com.employee.main.dto.EmployeeDTO;

public interface EmployeeService {
	
	public EmployeeDTO createNewEmployee(EmployeeDTO empDto);
	public List<EmployeeDTO> getAllEmployees();
	public EmployeeDTO getEmployeeById(Long empId);
	public DeleteResponse deleteEmployeeById(long empId);
	public EmployeeDTO updateEmployeeByID(long empId, EmployeeDTO empDto);
	public EmployeeDTO updateSingleValue(long empId, EmployeeDTO empDto);

}
