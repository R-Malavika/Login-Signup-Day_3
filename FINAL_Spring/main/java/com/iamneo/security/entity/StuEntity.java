package com.iamneo.security.entity;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="det")
public class StuEntity {
	@Id
			

	@Column(name="name")
	private String name;
	
@Column(name="projectid")
private Double projectid;
@Column(name="requirement")
private String requirement;

@Column(name="budget")
private String budget;

@Column(name="status")
private String status;

public StuEntity(String name, Double projectid, String requirement,String budget,String status) {
	super();
	this.name = name;
	this.projectid = projectid;
	this.requirement = requirement;
	this.budget=budget;
	this.status=status;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public Double getProjectid() {
	return projectid;
}
public void setProjectid(Double projectid) {
	this.projectid= projectid;
}

public String getRequirement() {
	return requirement;
}
public void setRequirement(String requirement) {
	this.requirement = requirement;
}

public String getBudget() {
	return budget;
}
public void setBudget(String budget) {
	this.budget = budget;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public StuEntity() {
}
}