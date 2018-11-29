package org.uw.engagement.events.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="UW_ENG_ADMINS", schema = "ooeadmin")
public class UWEngAdmins {
	@Id
	@Column(name="email")
	private String email;

	@Column(name="password")
	private String password;
	
public UWEngAdmins()
{

}

public UWEngAdmins(String email, String password) {
	super();
	this.email = email;
	this.password = password;
}

public String getEmail() {
	return email;
}

public void setEmail(String email) {
	this.email = email;
}

public String getPassword() {
	return password;
}

public void setPassword(String password) {
	this.password = password;
}

}
