/*package org.uw.engagement.events.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="CONTACT_INFO")
public class ContactInfo implements Serializable{
	
	@Id 
	@Column(name="EVENT_ID")
	private Integer event_id;
	
	@Column(name="FIRST_NAME")
	private String first_name;
	
	@Column(name="LAST_NAME")
	private String last_name;
	
	@Column(name="SPONSORING_DEPARTMENT")
	private String sponsoring_department;
	
    
    @Column(name = "EMAIL_1")
	private String email_1;
	
    
    @Column(name = "EMAIL_2")
	private String email_2;
	
	@Column(name="PHONE_NUMBER")
	private String ph_number;
	
	@Column(name="WEBSITE")
	private String website;
	
	public ContactInfo() {}

	public ContactInfo(Integer event_id, String first_name, String last_name, String sponsoring_department,
			String email_1, String email_2, String ph_number, String website) {
		super();
		this.event_id = event_id;
		this.first_name = first_name;
		this.last_name = last_name;
		this.sponsoring_department = sponsoring_department;
		this.email_1 = email_1;
		this.email_2 = email_2;
		this.ph_number = ph_number;
		this.website = website;
	}

	public Integer getEvent_id() {
		return event_id;
	}

	public void setEvent_id(Integer event_id) {
		this.event_id = event_id;
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

	public String getPh_number() {
		return ph_number;
	}

	public void setPh_number(String ph_number) {
		this.ph_number = ph_number;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}


	
}*/
