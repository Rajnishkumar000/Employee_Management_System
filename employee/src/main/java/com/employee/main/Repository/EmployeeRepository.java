package com.employee.main.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.employee.main.entities.Employee;

public interface EmployeeRepository extends 
JpaRepository<Employee, Long>{
	
	

}
