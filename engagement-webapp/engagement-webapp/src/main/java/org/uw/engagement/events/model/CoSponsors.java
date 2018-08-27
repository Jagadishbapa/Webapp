package org.uw.engagement.events.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class CoSponsors implements Serializable{

	@Column(name="CO_SPONSOR_NAME")
	private String cos_name;
	
	@Column(name="CO_SPONSOR_EMAIL")
	private String cos_email;
	
	@Column(name="CO_SPONSOR_PHONE_NUMBER")
	private String cos_ph_number;
	
	@Column(name="CO_SPONSOR_WEBSITE")
	private String cos_website;
	
	public CoSponsors() {}

	public CoSponsors(String cos_name, String cos_email, String cos_ph_number, String cos_website) {
		super();
		this.cos_name = cos_name;
		this.cos_email = cos_email;
		this.cos_ph_number = cos_ph_number;
		this.cos_website = cos_website;
	}

	public String getCos_name() {
		return cos_name;
	}

	public void setCos_name(String cos_name) {
		this.cos_name = cos_name;
	}

	public String getCos_email() {
		return cos_email;
	}

	public void setCos_email(String cos_email) {
		this.cos_email = cos_email;
	}

	public String getCos_ph_number() {
		return cos_ph_number;
	}

	public void setCos_ph_number(String cos_ph_number) {
		this.cos_ph_number = cos_ph_number;
	}

	public String getCos_website() {
		return cos_website;
	}

	public void setCos_website(String cos_website) {
		this.cos_website = cos_website;
	}
	

}
