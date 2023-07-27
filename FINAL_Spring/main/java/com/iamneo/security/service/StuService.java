package com.iamneo.security.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.iamneo.security.entity.StuEntity;
import com.iamneo.security.repository.StuRepo;
@Service
public class StuService {
	@Autowired //extends another class
    StuRepo stRepo; //reference variable
	
	public StuEntity saveDetails(StuEntity e) {
		return stRepo.save(e);
	}
	public List <StuEntity>getDetails()

{
		return stRepo.findAll();
		
}
	public StuEntity UpdateDetails(StuEntity e1)
	{
		return stRepo.saveAndFlush(e1);
	}
	
	public void deleteDetails (String name)
	{		
	
	    stRepo.deleteById(name);	
	
	}
}