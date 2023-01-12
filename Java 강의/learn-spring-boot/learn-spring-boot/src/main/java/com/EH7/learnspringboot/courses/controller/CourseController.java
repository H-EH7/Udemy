package com.EH7.learnspringboot.courses.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.EH7.learnspringboot.courses.bean.Course;

@RestController
public class CourseController {
	
	// http://localhost:8080/courses
	@GetMapping("/courses")
	public List<Course> getAllCourses() {
		return List.of(new Course(1, "Learn Microservices", "in28minutes"));
	}
	
}
