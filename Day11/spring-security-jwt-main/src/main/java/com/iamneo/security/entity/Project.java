package com.iamneo.security.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="admin_access")
public class Project {
    @Id
    private int project_id;
    private String username;
    private String project1;
    private String requirement1;
    private String sector;
    private int budget;
  
    public Project() {
    }
    public Project(int project_id,String username,String project,String requirement,String project1,String requirement1,String sector,int budget) {
    	this.project_id=project_id;
        this.username=username;
        this.project1=project1;
        this.requirement1=requirement1;
        this.sector=sector;
        this.budget=budget;
       
    }
	public int getId() {
		return project_id;
	}
	public void setId(int id) {
		this.project_id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getProject1() {
		return project1;
	}
	public void setProject1(String project1) {
		this.project1 = project1;
	}
	public String getRequirement1() {
		return requirement1;
	}
	public void setRequirement1(String requirement1) {
		this.requirement1 = requirement1;
	}
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = sector;
	}
	public int getBudget() {
		return budget;
	}
	public void setBudget(int budget) {
		this.budget = budget;
	}

    // getters and setters
   
	
    
    
}