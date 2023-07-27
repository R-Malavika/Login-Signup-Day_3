package com.iamneo.security.controller;

import java. util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.iamneo.security.entity.StuEntity;
import com.iamneo.security.service.StuService;
@CrossOrigin(origins="*")
@RestController

public class StudentController {

@Autowired //extends another class

StuService stuService;

@PostMapping("/post")

public StuEntity addInfo(@RequestBody StuEntity st) {

return stuService.saveDetails(st);

}

@GetMapping("/showDetails")

public List<StuEntity>fetchDetails()

{

return stuService.getDetails();

}

@PutMapping("/UpdateDetails")

public StuEntity UpdateInfo(@RequestBody StuEntity st1)

{

return stuService.UpdateDetails(st1);

}

@DeleteMapping("/Delete/{name}")

public String deleteInfo (@PathVariable("name")String name) {

stuService.deleteDetails(name);

return "Deleted details";

}
}