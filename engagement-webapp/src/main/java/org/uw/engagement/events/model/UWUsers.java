package org.uw.engagement.events.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="UW_USERS", schema = "ooeadmin")
public class UWUsers {
	@Id
	@Column(name="uwyo_email")
	private String email;
	
	@Column(name = "password")
	private String pwd;

	public UWUsers()
	{
	
	}

	public UWUsers(String email, String pwd) {
		super();
		this.email = email;
		this.pwd = pwd;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

}

