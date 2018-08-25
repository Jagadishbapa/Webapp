package org.uw.engagement.events.model;

import javax.persistence.Embeddable;


public class Speakers {
	String first_name;
	String last_name;
	String middle_name;
	String email;

public Speakers()
{}
	
public Speakers(String first_name, String last_name, String middle_name, String email) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.middle_name = middle_name;
		this.email = email;
	}
/*	Speakers(String first_name, String last_name, String middle_name, String email)
	{
		this.first_name=first_name;
		this.last_name=last_name;
		this.middle_name=middle_name;
		this.email=email;
	}
	
	Speakers(Speakers sp)
	{
		this.first_name=sp.first_name;
		this.last_name=sp.last_name;
		this.middle_name=sp.middle_name;
		this.email=sp.email;
	}*/
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