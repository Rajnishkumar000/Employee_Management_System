package com.employee.main.entities;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Version;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@Entity
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "fname",nullable = false)
	private String fname;
	
	@Column(name = "lname",nullable = false)
	private String lname;
	
	@Column(name = "email", nullable = false, unique = true)
	private String email;
	
	@Column(name = "salary",nullable = false)
	private double salary;
	
	@Column(name = "department",nullable = false)
	private String department;
	
	@Column(name = "joining_date")
	private String joining_date;
	
	
	@Column(name = "no_of_leaves",nullable = false)
	private int no_of_leaves;
	
	 @Version
	    private int version;
	 
	 public Employee(long emp_id, double emp_salary, String emp_fname, String emp_lname, 
	                 String emp_joining_date, String emp_department, String emp_email, 
	                 int emp_no_of_leaves) {
	     this.id = emp_id;
	     this.salary = emp_salary;
	     this.fname = emp_fname;
	     this.lname = emp_lname;
	     this.joining_date = emp_joining_date;
	     this.department = emp_department;
	     this.email = emp_email;
	     this.no_of_leaves = emp_no_of_leaves;
	 }

	
	

}
