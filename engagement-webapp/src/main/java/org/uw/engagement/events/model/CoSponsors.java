package org.uw.engagement.events.model;

import javax.persistence.Embeddable;

@Embeddable
public class CoSponsors{
	  String name;
	  String email;
	  int phone_number;
	  String website;
	
	public CoSponsors()
	{}
	
	public CoSponsors(String name, String email, int phone_number, String website) {
		super();
		this.name = name;
		this.email = email;
		this.phone_number = phone_number;
		this.website = website;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
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
	  
	  
//	  CoSponsors(String name, String em, int pn, String wbs)
//	  {
//		  this.name = name;
//		  this.email = em;
//		  this.phone_number = pn;
//		  this.website = wbs;
//	  }
//	  
//	  CoSponsors(CoSponsors csps)
//	  {
//		  this.name = csps.name;
//		  this.email = csps.email;
//		  this.phone_number = csps.phone_number;
//		  this.website = csps.website; 
//	  }
}
