package com.employee.main.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.employee.main.Repository.EmployeeRepository;
import com.employee.main.Responses.DeleteResponse;
import com.employee.main.dto.EmployeeDTO;
import com.employee.main.entities.Employee;
import com.employee.main.exception.EmployeeResourceNotFoundException;
import com.employee.main.mapper.EmployeeMapper;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeServiceImplementation implements EmployeeService {

	private EmployeeRepository employeeRepository;
	
	@Override
	public EmployeeDTO createNewEmployee(EmployeeDTO empDto) {
	   
	    Employee newEmployee = EmployeeMapper.mapToEmployee(empDto);

	    newEmployee.setId(0); // Optional, as Hibernate ignores IDs for @GeneratedValue

	    Employee savedEmployee = employeeRepository.save(newEmployee);

	    return EmployeeMapper.mapToEmployeeDto(savedEmployee);
	}

	@Override
	public List<EmployeeDTO> getAllEmployees() {
		List<Employee> allEmployees = employeeRepository.findAll();
		return allEmployees.stream().map
				(e->EmployeeMapper.mapToEmployeeDto(e)).collect(Collectors.toList());
	}

	@Override
	public EmployeeDTO getEmployeeById(Long empId) {
		
		Employee getEmp = employeeRepository.findById(empId).orElseThrow(()->
		new EmployeeResourceNotFoundException("Employee not found with given id "+empId));
		return EmployeeMapper.mapToEmployeeDto(getEmp);
	}

	@Override
	public DeleteResponse deleteEmployeeById(long empId) {
		EmployeeDTO emp = getEmployeeById(empId);
		employeeRepository.deleteById(empId);
		DeleteResponse delete = new DeleteResponse();
		delete.setEmpDto(emp);
		delete.setMessage("Deleted Successfully!");
		return delete;
	}

	@Override
	public EmployeeDTO updateEmployeeByID(long empId, EmployeeDTO empDto) {
		
		Employee employee = employeeRepository.findById(empId).orElseThrow(
				()->new EmployeeResourceNotFoundException("Employee with id "+empId+" not found."));
				
				employee.setFname(empDto.getFname());
				employee.setLname(empDto.getLname());
				employee.setEmail(empDto.getEmail());
				employee.setDepartment(empDto.getDepartment());
				employee.setSalary(empDto.getSalary());
				employee.setJoining_date(empDto.getJoining_date());
				employee.setNo_of_leaves(empDto.getNo_of_leaves());
				employee.setVersion(employee.getVersion()+1);
				
				employeeRepository.save(employee);
				
		return EmployeeMapper.mapToEmployeeDto(employee);
	}

	@Override
	public EmployeeDTO updateSingleValue(long empId, EmployeeDTO empDto) {
		Employee emp = employeeRepository.findById(empId).orElseThrow(()->new EmployeeResourceNotFoundException("Employee with id "+empId+" not found."));
		
		boolean isUpdated = false;
		if(empDto.getFname()!=null && !empDto.getFname().trim().isEmpty()) {
			emp.setFname(empDto.getFname());
			isUpdated = true;
		}
		if(empDto.getLname()!=null && !empDto.getLname().trim().isEmpty()) {
			emp.setLname(empDto.getLname());
			isUpdated = true;
		}
		if(empDto.getEmail()!=null && !empDto.getEmail().trim().isEmpty()) {
			emp.setEmail(empDto.getEmail());
			isUpdated = true;
		}
		
		if(empDto.getDepartment()!=null && !empDto.getDepartment().trim().isEmpty()) {
			emp.setDepartment(empDto.getDepartment());
			isUpdated = true;
		}
		
		if(empDto.getJoining_date()!=null && !empDto.getJoining_date().trim().isEmpty()) {
			emp.setJoining_date(empDto.getJoining_date());
			isUpdated = true;
		}
		if(empDto.getSalary()>1000) {
			emp.setSalary(empDto.getSalary());
			isUpdated = true;
		}
		if(empDto.getNo_of_leaves()>=0) {
			emp.setNo_of_leaves(empDto.getNo_of_leaves());
			isUpdated = true;
		}
		
		if(isUpdated) {
			employeeRepository.save(emp);
			emp.setVersion(emp.getVersion()+1);
		}
		
		
		return EmployeeMapper.mapToEmployeeDto(emp);
	}
	
	

	
}
