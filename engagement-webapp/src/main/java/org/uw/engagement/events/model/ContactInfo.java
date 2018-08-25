package org.uw.engagement.events.model;

import javax.persistence.Embeddable;

@Embeddable
public class ContactInfo{
	  String first_name;
	  String last_name;
	  String sponsoring_department;
	  String email_1;
	  String email_2;
	  int phone_number;
	  String website;
	public ContactInfo()
	{
		
	}
	
	public ContactInfo(String first_name, String last_name, String sponsoring_department, String email_1,
			String email_2, int phone_number, String website) {
		super();
		this.first_name = first_name;
		this.last_name = last_name;
		this.sponsoring_department = sponsoring_department;
		this.email_1 = email_1;
		this.email_2 = email_2;
		this.phone_number = phone_number;
		this.website = website;
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
	public String getSponsoring_department() {
		return sponsoring_department;
	}
	public void setSponsoring_department(String sponsoring_department) {
		this.sponsoring_department = sponsoring_department;
	}
	public String getEmail_1() {
		return email_1;
	}
	public void setEmail_1(String email_1) {
		this.email_1 = email_1;
	}
	public String getEmail_2() {
		return email_2;
	}
	public void setEmail_2(String email_2) {
		this.email_2 = email_2;
	}
	public int getPhone_number() {
		return phone_number;
	}
	public void setPhone_number(int phone_number) {
		this.phone_number = phone_number;
	}
	public String getWebsite() {
		return website;
	}
	public void setWebsite(String website) {
		this.website = website;
	}
	  
//	  ContactInfo(String fn, String ln, String sd, String e1, String e2, int pn, String wbs)
//	  {
//		  this.first_name = fn;
//		  this.last_name = ln;
//		  this.sponsoring_department = sd;
//		  this.email_1 =e1;
//		  this.email_2 =e2;
//		  this.phone_number = pn;
//		  this.website =wbs; 
//	  }
//	  ContactInfo(ContactInfo coi)
//	  {
//		  this.first_name = coi.first_name;
//		  this.last_name = coi.last_name;
//		  this.sponsoring_department = coi.sponsoring_department;
//		  this.email_1 =coi.email_1;
//		  this.email_2 =coi.email_2;
//		  this.phone_number = coi.phone_number;
//		  this.website =coi.website;  
//	  }
}
