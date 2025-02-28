package com.employee.main.Responses;

import com.employee.main.dto.EmployeeDTO;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class DeleteResponse {
	
	private String message;
	private EmployeeDTO empDto;

}
