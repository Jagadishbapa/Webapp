package org.uw.engagement.events.model;
import javax.persistence.AttributeOverride;
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
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.SecondaryTables;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import oracle.jdbc.OracleBfile;
import oracle.sql.BLOB;

import java.util.*;
import java.sql.*;
import java.sql.Date;

@Entity
@Table(name="UW_ENGAGEMENT")
@SecondaryTables({
    @SecondaryTable(name="LOCATION", pkJoinColumns={
        @PrimaryKeyJoinColumn(name="event_id", referencedColumnName="event_id") }),

    @SecondaryTable(name="CONTACT_INFO", pkJoinColumns={
        @PrimaryKeyJoinColumn(name="event_id", referencedColumnName="event_id") })
})
public class EventsDbModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
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
	private Blob event_file;
	
	
	@Column(name="EVENT_COST")
	private Integer eve_cost;
	
	
 
    @ElementCollection
    @JoinTable(name="SPEAKERS", joinColumns=@JoinColumn(name="EVENT_ID"))
	private java.util.Set<Speakers> speakers = new HashSet<Speakers>();
    
    //@ElementCollection
   // @JoinTable(name="LOCATION", joinColumns=@javax.persistence.JoinColumn(name="EVENT_ID"))
   // @OneToOne
   // @JoinColumn(name = "event_id")
   // private Location loc;
    
    @Column(table = "LOCATION")
    private String building_room;
    
    @Column(table = "LOCATION")
    private String address_line1;
    
    @Column(table = "LOCATION")
    private String address_line2;
    
    @Column(table = "LOCATION")
    private String county;
    
    @Column(table = "LOCATION")
    private String city;
    
    @Column(table = "LOCATION")
    private String state;
    
    @Column(table = "LOCATION")
    private String country;
    
    @Column(table = "LOCATION")
    private String other_city;
    
    @Column(table = "LOCATION")
    private String zip;
    
    @Column(table = "CONTACT_INFO")
	private String first_name;
	
    @Column(table = "CONTACT_INFO")
	private String last_name;
	
    @Column(table = "CONTACT_INFO")
	private String sponsoring_department;
	
    @Column(table = "CONTACT_INFO")
	private String email_1;
	
    @Column(table = "CONTACT_INFO")
	private String email_2;
	
    @Column(table = "CONTACT_INFO")
	private String phone_number;
	
    @Column(table = "CONTACT_INFO")
	private String website;
	
	
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
	
    @ElementCollection
    @JoinTable(name="CO_SPONSORS", joinColumns=@JoinColumn(name="EVENT_ID"))
	private java.util.List<CoSponsors> coSponsors;
	
	@Column(name="ATTENDEES_COUNT")
	private Integer attendeeC;
	
    
    @Column(name = "CREATED_BY")
	private String created_by;
	
	@Column(name="CREATION_DATE")
	@JsonIgnore private java.util.Date creation_date = new java.util.Date();
	
	@Column(name="LAST_UPDATE_DATE")
	@JsonIgnore private Date last_up_date;
	
	@Column(name="CANCELLED")
	private String cancelled;
	
	@Column(name="CANCELLATION_DATE")
	@JsonIgnore private Date cancel_date;
	
    
    @Column(name = "UPDATED_BY")
    @JsonIgnore private String updated_by;
    
    
    @Column(name = "CANCELLED_BY")
    @JsonIgnore private String cancelled_by;
	
	public EventsDbModel() {}

	public EventsDbModel(Integer id, String org, String dept, String event_desc, String event_type, String priv,
			Integer fee, Timestamp eve_start_time, Timestamp eve_end_time, Blob event_file, Integer eve_cost,
			Set<Speakers> speakers, String building_room, String address_line1, String address_line2, String county,
			String city, String state, String country, String other_city, String zip, String first_name,
			String last_name, String sponsoring_department, String email_1, String email_2, String phone_number,
			String website, Integer ant_cost, Integer ant_num_attendees, String fund1, String fund2, String fundOther,
			Integer costF1, Integer costF2, Integer costFO, List<CoSponsors> coSponsors, Integer attendeeC,
			String created_by, Date creation_date, Date last_up_date, String cancelled, Date cancel_date,
			String updated_by, String cancelled_by) {
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
		this.building_room = building_room;
		this.address_line1 = address_line1;
		this.address_line2 = address_line2;
		this.county = county;
		this.city = city;
		this.state = state;
		this.country = country;
		this.other_city = other_city;
		this.zip = zip;
		this.first_name = first_name;
		this.last_name = last_name;
		this.sponsoring_department = sponsoring_department;
		this.email_1 = email_1;
		this.email_2 = email_2;
		this.phone_number = phone_number;
		this.website = website;
		this.ant_cost = ant_cost;
		this.ant_num_attendees = ant_num_attendees;
		this.fund1 = fund1;
		this.fund2 = fund2;
		this.fundOther = fundOther;
		this.costF1 = costF1;
		this.costF2 = costF2;
		this.costFO = costFO;
		this.coSponsors = coSponsors;
		this.attendeeC = attendeeC;
		this.created_by = created_by;
		this.creation_date = creation_date;
		this.last_up_date = last_up_date;
		this.cancelled = cancelled;
		this.cancel_date = cancel_date;
		this.updated_by = updated_by;
		this.cancelled_by = cancelled_by;
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

	public Blob getEvent_file() {
		return event_file;
	}

	public void setEvent_file(Blob event_file) {
		this.event_file = event_file;
	}

	public Integer getEve_cost() {
		return eve_cost;
	}

	public void setEve_cost(Integer eve_cost) {
		this.eve_cost = eve_cost;
	}

	public java.util.Set<Speakers> getSpeakers() {
		return speakers;
	}

	public void setSpeakers(java.util.Set<Speakers> speakers) {
		this.speakers = speakers;
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

	public String getOther_city() {
		return other_city;
	}

	public void setOther_city(String other_city) {
		this.other_city = other_city;
	}

	public String getZip() {
		return zip;
	}

	public void setZip(String zip) {
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

	public String getPhone_number() {
		return phone_number;
	}

	public void setPhone_number(String phone_number) {
		this.phone_number = phone_number;
	}

	public String getWebsite() {
		return website;
	}

	public void setWebsite(String website) {
		this.website = website;
	}

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

	public java.util.List<CoSponsors> getCoSponsors() {
		return coSponsors;
	}

	public void setCoSponsors(java.util.List<CoSponsors> coSponsors) {
		this.coSponsors = coSponsors;
	}

	public Integer getAttendeeC() {
		return attendeeC;
	}

	public void setAttendeeC(Integer attendeeC) {
		this.attendeeC = attendeeC;
	}

	public String getCreated_by() {
		return created_by;
	}

	public void setCreated_by(String created_by) {
		this.created_by = created_by;
	}

	public java.util.Date getCreation_date() {
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

	public String getUpdated_by() {
		return updated_by;
	}

	public void setUpdated_by(String updated_by) {
		this.updated_by = updated_by;
	}

	public String getCancelled_by() {
		return cancelled_by;
	}

	public void setCancelled_by(String cancelled_by) {
		this.cancelled_by = cancelled_by;
	}



}