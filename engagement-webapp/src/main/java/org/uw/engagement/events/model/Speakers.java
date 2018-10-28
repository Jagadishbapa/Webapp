package org.uw.engagement.events.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class Speakers implements Serializable{
	
	//@Column(name="event_id")
	//private Integer event_id;
	
	@Column(name="first_name")
	private String first_name;
	
	@Column(name="last_name")
	private String last_name;
	
	@Column(name="middle_name")
	private String middle_name;
	
	@Column(name="email")
	private String email;

public Speakers()
{}

public Speakers(
		//Integer event_id,
		String first_name, String last_name, String middle_name, String email) {
	super();
	//this.event_id = event_id;
	this.first_name = first_name;
	this.last_name = last_name;
	this.middle_name = middle_name;
	this.email = email;
}

/*
public Integer getEvent_id() {
	return event_id;
}

public void setEvent_id(Integer event_id) {
	this.event_id = event_id;
}
*/
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