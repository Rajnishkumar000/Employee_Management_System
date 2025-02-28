	package com.employee.main.controller;

	import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.employee.main.Responses.DeleteResponse;
import com.employee.main.dto.EmployeeDTO;
import com.employee.main.service.EmployeeServiceImplementation;

import lombok.AllArgsConstructor;

	@RestController
	@RequestMapping("/api/employees")
	@AllArgsConstructor
	public class EmployeeController {

		private EmployeeServiceImplementation empService;

		@PostMapping("/newEmployee")
		public ResponseEntity<EmployeeDTO> createNewEmployee(@RequestBody EmployeeDTO empDto) {
			if(empDto.getJoining_date()==null || empDto.getJoining_date().trim().isEmpty()) {
				LocalDateTime localTime = LocalDateTime.now();
				DateTimeFormatter dateFormater = DateTimeFormatter.ofPattern("yyy-MM-dd HH:mm:ss");
				String currentDate = localTime.format(dateFormater);
				empDto.setJoining_date(currentDate);
			}
		    EmployeeDTO savedEmployee = empService.createNewEmployee(empDto);
		    return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
		}

		@GetMapping("/allEmployees")
		public ResponseEntity<List<EmployeeDTO>> getAllEmployees(){
			List<EmployeeDTO> allEmployees = empService.getAllEmployees();
			return new ResponseEntity<>(allEmployees,HttpStatus.OK);
		}

		@GetMapping("/{id}")
		public ResponseEntity<EmployeeDTO> getEmployeeById(@PathVariable("id") Long empId){
			EmployeeDTO emp = empService.getEmployeeById(empId);
			return new ResponseEntity<>(emp,HttpStatus.OK);
		}

		@DeleteMapping("/{id}")
		public ResponseEntity<DeleteResponse> deleteEmployee(@PathVariable("id") long empId){
			DeleteResponse deleteResponse = empService.deleteEmployeeById(empId);
			return new ResponseEntity<>(deleteResponse,HttpStatus.OK);
		}

		@PutMapping("/{id}")
		public ResponseEntity<EmployeeDTO> updateEmployeeById(@PathVariable("id") long empId,@RequestBody EmployeeDTO empDto){
			if(empDto.getJoining_date()==null || empDto.getJoining_date().trim().isEmpty()) {
				LocalDateTime localTime = LocalDateTime.now();
				DateTimeFormatter dateFormater = DateTimeFormatter.ofPattern("yyy-MM-dd HH:mm:ss");
				String currentDate = localTime.format(dateFormater);
				empDto.setJoining_date(currentDate);
			}
			EmployeeDTO empdto = empService.updateEmployeeByID(empId,empDto);

			return new ResponseEntity<>(empdto,HttpStatus.OK);
		}

		@PatchMapping("/{id}")
		public ResponseEntity<EmployeeDTO> updateSingleValue(@PathVariable("id") long empId, @RequestBody EmployeeDTO empDto){
			if(empDto.getJoining_date()==null || empDto.getJoining_date().trim().isEmpty()) {
				LocalDateTime localTime = LocalDateTime.now();
				DateTimeFormatter dateFormater = DateTimeFormatter.ofPattern("yyy-MM-dd HH:mm:ss");
				String currentDate = localTime.format(dateFormater);
				empDto.setJoining_date(currentDate);
			}
			EmployeeDTO emp = empService.updateSingleValue(empId,empDto);
			return new ResponseEntity<>(emp,HttpStatus.OK);
		}

	}
