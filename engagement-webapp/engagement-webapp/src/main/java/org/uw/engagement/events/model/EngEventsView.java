package org.uw.engagement.events.model;
import javax.persistence.AttributeOverride;
import javax.persistence.ParameterMode;
import javax.persistence.AttributeOverrides;
import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.NamedStoredProcedureQueries;
import javax.persistence.NamedStoredProcedureQuery;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.SecondaryTables;
import javax.persistence.StoredProcedureParameter;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import oracle.jdbc.OracleBfile;
import oracle.sql.BLOB;
import java.util.*;
import java.sql.*;
import java.sql.Date;


@Entity
@Table(name="eng_events_view")

@NamedStoredProcedureQueries({
   @NamedStoredProcedureQuery(name = "audviewproc", 
                              procedureName = "audviewproc",
                            		  resultClasses = EngEventsView.class,
                              parameters = {
                                 //@StoredProcedureParameter(mode = ParameterMode.IN, name = "org", type = String.class),
                                 @StoredProcedureParameter(name="l_ret", mode = ParameterMode.REF_CURSOR, type = void.class)
                              })
})
public class EngEventsView {
	@Id
	@Column(name="event_id")
	private	Integer	event_id;
	
	@Column(name="event_name")
	private	String	event_name;
	
	@Column(name="organization")
	private	String	organization;
	
	@Column(name="department")
	private	String	department;
	
	@Column(name="event_desc")
	private	String	event_desc;
	
	@Column(name="event_type")
	private	String	event_type;
	
	@Column(name="private")
	private	String	priv;
	
	@Column(name="fee")
	private	Integer	fee;
	
	@Column(name="event_start_date_time")
	@JsonFormat(pattern="yyyy-MM-dd hh:mm aa")
	private	Timestamp	event_start_date_time;
	
	@Column(name="event_end_date_time")
	@JsonFormat(pattern="yyyy-MM-dd hh:mm aa")
	private	Timestamp	event_end_date_time;
	
	@Column(name="building_room")
	private	String	building_room;
	
	@Column(name="address_line1")
	private	String	address_line1;
	
	@Column(name="address_line2")
	private	String	address_line2;
	
	@Column(name="county")
	private	String	county;
	
	@Column(name="city")
	private	String	city;
	
	@Column(name="other_city")
	private	String	other_city;
	
	@Column(name="state")
	private	String	state;
	
	@Column(name="country")
	private	String	country;
	
	@Column(name="zip")
	private	Integer	zip;
	
	@Column(name="first_name")
	private	String	first_name;
	
	@Column(name="last_name")
	private	String	last_name;
	
	@Column(name="email_1")
	private	String	email_1;
	
	@Column(name="email_2")
	private	String	email_2;
	
	@Column(name="phone_number")
	private	String	phone_number;
	
	public EngEventsView() {}

	public EngEventsView(Integer event_id, String event_name, String organization, String department, String event_desc,
			String event_type, String priv, Integer fee, Timestamp event_start_date_time, Timestamp event_end_date_time,
			String building_room, String address_line1, String address_line2, String county, String city,
			String other_city, String state, String country, Integer zip, String first_name, String last_name,
			String email_1, String email_2, String phone_number) {
		super();
		this.event_id = event_id;
		this.event_name = event_name;
		this.organization = organization;
		this.department = department;
		this.event_desc = event_desc;
		this.event_type = event_type;
		this.priv = priv;
		this.fee = fee;
		this.event_start_date_time = event_start_date_time;
		this.event_end_date_time = event_end_date_time;
		this.building_room = building_room;
		this.address_line1 = address_line1;
		this.address_line2 = address_line2;
		this.county = county;
		this.city = city;
		this.other_city = other_city;
		this.state = state;
		this.country = country;
		this.zip = zip;
		this.first_name = first_name;
		this.last_name = last_name;
		this.email_1 = email_1;
		this.email_2 = email_2;
		this.phone_number = phone_number;
	}

	public Integer getEvent_id() {
		return event_id;
	}

	public void setEvent_id(Integer event_id) {
		this.event_id = event_id;
	}

	public String getEvent_name() {
		return event_name;
	}

	public void setEvent_name(String event_name) {
		this.event_name = event_name;
	}

	public String getOrganization() {
		return organization;
	}

	public void setOrganization(String organization) {
		this.organization = organization;
	}

	public String getDepartment() {
		return department;
	}

	public void setDepartment(String department) {
		this.department = department;
	}

	public String getEvent_desc() {
		return event_desc;
	}

	public void setEvent_desc(String event_desc) {
		this.event_desc = event_desc;
	}

	public String getEvent_type() {
		return event_type;
	}

	public void setEvent_type(String event_type) {
		this.event_type = event_type;
	}

	public String getPriv() {
		return priv;
	}

	public void setPriv(String priv) {
		this.priv = priv;
	}

	public Integer getFee() {
		return fee;
	}

	public void setFee(Integer fee) {
		this.fee = fee;
	}

	public Timestamp getEvent_start_date_time() {
		return event_start_date_time;
	}

	public void setEvent_start_date_time(Timestamp event_start_date_time) {
		this.event_start_date_time = event_start_date_time;
	}

	public Timestamp getEvent_end_date_time() {
		return event_end_date_time;
	}

	public void setEvent_end_date_time(Timestamp event_end_date_time) {
		this.event_end_date_time = event_end_date_time;
	}

	public String getBuilding_room() {
		return building_room;
	}

	public void setBuilding_room(String building_room) {
		this.building_room = building_room;
	}

	public String getAddress_line1() {
		return address_line1;
	}

	public void setAddress_line1(String address_line1) {
		this.address_line1 = address_line1;
	}

	public String getAddress_line2() {
		return address_line2;
	}

	public void setAddress_line2(String address_line2) {
		this.address_line2 = address_line2;
	}

	public String getCounty() {
		return county;
	}

	public void setCounty(String county) {
		this.county = county;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getOther_city() {
		return other_city;
	}

	public void setOther_city(String other_city) {
		this.other_city = other_city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public Integer getZip() {
		return zip;
	}

	public void setZip(Integer zip) {
		this.zip = zip;
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

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

}
