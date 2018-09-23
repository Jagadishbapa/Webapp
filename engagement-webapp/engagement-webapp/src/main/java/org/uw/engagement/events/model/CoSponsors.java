package org.uw.engagement.events.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class CoSponsors implements Serializable{

	@Column(name="co_sponsor_name")
	private String co_sponsor_name;
	
	@Column(name="co_sponsor_email")
	private String co_sponsor_email;
	
	@Column(name="co_sponsor_phone_number")
	private String co_sponsor_phone_number;
	
	@Column(name="co_sponsor_website")
	private String co_sponsor_website;
	
	public CoSponsors() {}

	public CoSponsors(String co_sponsor_name, String co_sponsor_email, String co_sponsor_phone_number,
			String co_sponsor_website) {
		super();
		this.co_sponsor_name = co_sponsor_name;
		this.co_sponsor_email = co_sponsor_email;
		this.co_sponsor_phone_number = co_sponsor_phone_number;
		this.co_sponsor_website = co_sponsor_website;
	}

	public String getCo_sponsor_name() {
		return co_sponsor_name;
	}

	public void setCo_sponsor_name(String co_sponsor_name) {
		this.co_sponsor_name = co_sponsor_name;
	}

	public String getCo_sponsor_email() {
		return co_sponsor_email;
	}

	public void setCo_sponsor_email(String co_sponsor_email) {
		this.co_sponsor_email = co_sponsor_email;
	}

	public String getCo_sponsor_phone_number() {
		return co_sponsor_phone_number;
	}

	public void setCo_sponsor_phone_number(String co_sponsor_phone_number) {
		this.co_sponsor_phone_number = co_sponsor_phone_number;
	}

	public String getCo_sponsor_website() {
		return co_sponsor_website;
	}

	public void setCo_sponsor_website(String co_sponsor_website) {
		this.co_sponsor_website = co_sponsor_website;
	}	

}
