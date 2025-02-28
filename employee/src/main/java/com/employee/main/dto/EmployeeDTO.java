package com.employee.main.dto;

import org.antlr.v4.runtime.misc.NotNull;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDTO {

	private long Id;
	private String fname;
	private String lname;
    
	private String email;
	private double salary;
	private int no_of_leaves;
	private String joining_date;
	private String department;
	
	


	
	
}
