package com.EH7.learnspringframework.sample.enterprise.flow.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EH7.learnspringframework.sample.enterprise.flow.business.BusinessService;

// Sending response in the right format
@RestController
public class Controller {
	
	@Autowired
	private BusinessService businessService;
	
	// "/sum" => 100
	@GetMapping("/sum")
	public long displaySum() {
		return businessService.calculateSum();
	}
}