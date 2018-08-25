package org.uw.engagement.events.model;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.*;
import java.sql.*;
import java.sql.Date;

import oracle.sql.*;



@Entity
@Table(name="UW_ENGAGEMENT")
public class EventsDbModel {

	@Id
	@Column(name="EVENT_ID")
	private Integer id;
	
	
	@Column(name="ORGANIZATION")
	private String org;

	@Column(name="DEPARTMENT")
	private String dept;
	

	@Column(name="EVENT_DESC")
	private String event_desc;
	

	@Column(name="EVENT_TYPE")
	private String event_type;
	

	@Column(name="PRIVATE")
	private String priv;
	

	@Column(name="FEE")
	private Integer fee;
	

	
	@Column(name="EVENT_START_DATE_TIME")
	private Timestamp eve_start_time;
	

	
	@Column(name="EVENT_END_DATE_TIME")
	private Timestamp eve_end_time;
	
	
	@Column(name="EVENT_FILE")
	private BFILE event_file;
	
	
	@Column(name="EVENT_COST")
	private Integer eve_cost;
	
	//@Embedded
	@Column(name="SPEAKERS")
	private java.sql.Array speakers;
	//= new ArrayList<Speakers>();
	

	//@Column(name="LOCATION")
	//private Location loc;
	
	//@Embedded
	//@Column(name="CONTACT_INFO")
	//private ContactInfo contacts;
	
	@Column(name="ANTICIPATED_COST")
	private Integer ant_cost;

	@Column(name="ANTICIPATED_NUM_ATTENDEES")
	private Integer ant_num_attendees;
	
	@Column(name="FUNDING_SOURCE1")
	private String fund1;
	
	@Column(name="FUNDING_SOURCE2")
	private String fund2;
	
	@Column(name="FUNDING_OTHER")
	private String fundOther;
	
	@Column(name="COST_FUNDING1")
	private Integer costF1;
	
	@Column(name="COST_FUNDING2")
	private Integer costF2;
	
	@Column(name="COST_FUNDING_OTHER")
	private Integer costFO;
	
	//@Embedded
	//@Column(name="CO_SPONSORS")
	//private Struct coSponsors;
	
	@Column(name="ATTENDEES_COUNT")
	private Integer attendeeC;
	
	@Column(name="CREATED_BY")
	private String createdBy;
	
	@Column(name="CREATION_DATE")
	private Date creation_date;
	
	@Column(name="LAST_UPDATE_DATE")
	private Date last_up_date;
	
	@Column(name="CANCELLED")
	private String cancelled;
	
	@Column(name="CANCELLATION_DATE")
	private Date cancel_date;
	
	public EventsDbModel() {}

	public EventsDbModel(Integer id, String org, String dept, String event_desc, String event_type, String priv, Integer fee,
			Timestamp eve_start_time, Timestamp eve_end_time, BFILE event_file, Integer eve_cost, java.sql.Array speakers,
			Location loc, ContactInfo contacts, Integer ant_cost, Integer ant_num_attendees, String fund1, String fund2,
			String fundOther, Integer costF1, Integer costF2, Integer costFO, Integer attendeeC,
			String createdBy, Date creation_date, Date last_up_date, String cancelled, Date cancel_date) {
		super();
		this.id = id;
		this.org = org;
		this.dept = dept;
		this.event_desc = event_desc;
		this.event_type = event_type;
		this.priv = priv;
		this.fee = fee;
		this.eve_start_time = eve_start_time;
		this.eve_end_time = eve_end_time;
		this.event_file = event_file;
		this.eve_cost = eve_cost;
		this.speakers = speakers;
		//this.loc = loc;
		//this.contacts = contacts;
		this.ant_cost = ant_cost;
		this.ant_num_attendees = ant_num_attendees;
		this.fund1 = fund1;
		this.fund2 = fund2;
		this.fundOther = fundOther;
		this.costF1 = costF1;
		this.costF2 = costF2;
		this.costFO = costFO;
		//this.coSponsors = coSponsors;
		this.attendeeC = attendeeC;
		this.createdBy = createdBy;
		this.creation_date = creation_date;
		this.last_up_date = last_up_date;
		this.cancelled = cancelled;
		this.cancel_date = cancel_date;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getOrg() {
		return org;
	}

	public void setOrg(String org) {
		this.org = org;
	}

	public String getDept() {
		return dept;
	}

	public void setDept(String dept) {
		this.dept = dept;
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

	public Timestamp getEve_start_time() {
		return eve_start_time;
	}

	public void setEve_start_time(Timestamp eve_start_time) {
		this.eve_start_time = eve_start_time;
	}

	public Timestamp getEve_end_time() {
		return eve_end_time;
	}

	public void setEve_end_time(Timestamp eve_end_time) {
		this.eve_end_time = eve_end_time;
	}

	public BFILE getEvent_file() {
		return event_file;
	}

	public void setEvent_file(BFILE event_file) {
		this.event_file = event_file;
	}

	public Integer getEve_cost() {
		return eve_cost;
	}

	public void setEve_cost(Integer eve_cost) {
		this.eve_cost = eve_cost;
	}

	public java.sql.Array getSpeakers() {
		return speakers;
	}

	public void setSpeakers(java.sql.Array speakers) {
		this.speakers = speakers;
	}
/*
	//public Location getLoc() {
		//return loc;
	//}

	public void setLoc(Location loc) {
		this.loc = loc;
	}

	public ContactInfo getContacts() {
		return contacts;
	}

	public void setContacts(ContactInfo contacts) {
		this.contacts = contacts;
	}
	*/
	public Integer getAnt_cost() {
		return ant_cost;
	}

	public void setAnt_cost(Integer ant_cost) {
		this.ant_cost = ant_cost;
	}

	public Integer getAnt_num_attendees() {
		return ant_num_attendees;
	}

	public void setAnt_num_attendees(Integer ant_num_attendees) {
		this.ant_num_attendees = ant_num_attendees;
	}

	public String getFund1() {
		return fund1;
	}

	public void setFund1(String fund1) {
		this.fund1 = fund1;
	}

	public String getFund2() {
		return fund2;
	}

	public void setFund2(String fund2) {
		this.fund2 = fund2;
	}

	public String getFundOther() {
		return fundOther;
	}

	public void setFundOther(String fundOther) {
		this.fundOther = fundOther;
	}

	public Integer getCostF1() {
		return costF1;
	}

	public void setCostF1(Integer costF1) {
		this.costF1 = costF1;
	}

	public Integer getCostF2() {
		return costF2;
	}

	public void setCostF2(Integer costF2) {
		this.costF2 = costF2;
	}

	public Integer getCostFO() {
		return costFO;
	}

	public void setCostFO(Integer costFO) {
		this.costFO = costFO;
	}

	//public Struct getCoSponsors() {
		//return coSponsors;
	//}

	//public void setCoSponsors(Struct coSponsors) {
		//this.coSponsors = coSponsors;
	//}

	public Integer getAttendeeC() {
		return attendeeC;
	}

	public void setAttendeeC(Integer attendeeC) {
		this.attendeeC = attendeeC;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public Date getCreation_date() {
		return creation_date;
	}

	public void setCreation_date(Date creation_date) {
		this.creation_date = creation_date;
	}

	public Date getLast_up_date() {
		return last_up_date;
	}

	public void setLast_up_date(Date last_up_date) {
		this.last_up_date = last_up_date;
	}

	public String getCancelled() {
		return cancelled;
	}

	public void setCancelled(String cancelled) {
		this.cancelled = cancelled;
	}

	public Date getCancel_date() {
		return cancel_date;
	}

	public void setCancel_date(Date cancel_date) {
		this.cancel_date = cancel_date;
	}
	
	
	
	
}