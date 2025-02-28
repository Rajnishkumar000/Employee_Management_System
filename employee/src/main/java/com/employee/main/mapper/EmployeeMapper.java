package com.employee.main.mapper;

import com.employee.main.dto.EmployeeDTO;
import com.employee.main.entities.Employee;

public class EmployeeMapper {

	public static EmployeeDTO mapToEmployeeDto(Employee employee) {
		return new EmployeeDTO(
				employee.getId(),
				employee.getFname(),
				employee.getLname(),
				employee.getEmail(),
				employee.getSalary(),
				employee.getNo_of_leaves(),
				employee.getJoining_date(),
				employee.getDepartment()
				);
	}
	public static Employee mapToEmployee(EmployeeDTO employeeDto) {
		return new Employee(
				employeeDto.getId(),
				employeeDto.getSalary(),
				employeeDto.getFname(),
				employeeDto.getLname(),
				employeeDto.getJoining_date(),
				employeeDto.getDepartment(),
				employeeDto.getEmail(),
				employeeDto.getNo_of_leaves()
				);
				
	}
}
