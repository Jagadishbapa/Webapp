package org.uw.engagement.events.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Speakers implements Serializable{
	
	
	@Column(name="FIRST_NAME")
	private String first_name;
	
	@Column(name="LAST_NAME")
	private String last_name;
	
	@Column(name="MIDDLE_NAME")
	private String middle_name;
	
	@Column(name="EMAIL")
	private String email;

public Speakers()
{}

public Speakers(String first_name, String last_name, String middle_name, String email) {
	super();
	this.first_name = first_name;
	this.last_name = last_name;
	this.middle_name = middle_name;
	this.email = email;
}

public String getFirst_name() {
	return first_name;
}

public void setFirst_name(String first_name) {
	this.first_name = first_name;
}

public String getLast_name() {
	return last_name;
}

public void setLast_name(String last_name) {
	this.last_name = last_name;
}

public String getMiddle_name() {
	return middle_name;
}

public void setMiddle_name(String middle_name) {
	this.middle_name = middle_name;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}


	
}