package org.uw.engagement.events.model;
import java.sql.Blob;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.Set;

import javax.persistence.CollectionTable;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.SecondaryTables;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="UW_ENGAGEMENT", schema = "ooeadmin")
@SecondaryTables({
    @SecondaryTable(name="LOCATION", schema = "ooeadmin", pkJoinColumns={
        @PrimaryKeyJoinColumn(name="event_id", referencedColumnName="event_id") }),

    @SecondaryTable(name="CONTACT_INFO", schema = "ooeadmin", pkJoinColumns={
        @PrimaryKeyJoinColumn(name="event_id", referencedColumnName="event_id") })
})
public class EventsDbModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="event_id")
	private Integer event_id;
	
	
	@Column(name="organization")
	private String organization;

	@Column(name="department")
	private String department;
	
	@Column(name="event_desc")
	private String event_desc;
	

	@Column(name="event_type")
	private String event_type;
	

	@Column(name="private")
	private String priv;
	

	@Column(name="fee")
	private Integer fee;
	

	
	@Column(name="event_start_date_time")
	@JsonFormat(pattern="yyyy-MM-dd hh:mm aa")
	private Timestamp event_start_date_time;
	

	
	@Column(name="event_end_date_time")
	@JsonFormat(pattern="yyyy-MM-dd hh:mm aa")
	private Timestamp event_end_date_time;
	
	
	@Column(name="event_file")
	private Blob event_file;
	
	
	@Column(name="event_cost")
	private Integer event_cost;
	
	@Column(name="anticipated_cost")
	private Integer anticipated_cost;

	@Column(name="anticipated_num_attendees")
	private Integer anticipated_num_attendees;
	
	@Column(name="funding_source1")
	private String funding_source1;
	
	@Column(name="funding_source2")
	private String funding_source2;
	
	@Column(name="funding_other")
	private String funding_other;
	
	@Column(name="cost_funding1")
	private Integer cost_funding1;
	
	@Column(name="cost_funding2")
	private Integer cost_funding2;
	
	@Column(name="cost_funding_other")
	private Integer cost_funding_other;
 
	@Column(name="attendees_count")
	private Integer attendees_count;
	
    @Column(name = "created_by")
    private String created_by;
    
	@Column(name="cancelled")
	private String cancelled;
	
	@Column(name="cancellation_date")
	@JsonIgnore private Date cancellation_date;
	
    @Column(name = "cancelled_by")
    @JsonIgnore private String cancelled_by;
    
	@Column(name="event_name")
	private String event_name;
	
    @ElementCollection
    @CollectionTable(name="speakers", joinColumns=@JoinColumn(name="event_id"))
    private java.util.Set<Speakers> speakers;
    
    @Column(name="building_room", table = "location")
    private String building_room;
    
    @Column(name="address_line1", table = "location")
    private String address_line1;
    
    @Column(name="address_line2",table = "location")
    private String address_line2;
    
    @Column(name="county",table = "location")
    private String county;
    
    @Column(name="city",table = "location")
    private String city;
    
    @Column(name="state",table = "location")
    private String state;
    
    @Column(name="country", table = "location")
    private String country;
    
    @Column(name="other_city",table = "location")
    private String other_city;
    
    @Column(name="zip",table = "location")
    private String zip;
    
    @Column(table = "contact_info")
    private String first_name;
	
    @Column(table = "contact_info")
    private String last_name;
	
    @Column(table = "contact_info")
    private String sponsoring_department;
	
    @Column(table = "contact_info")
    private String email_1;
	
    @Column(table = "contact_info")
    private String email_2;
	
    @Column(table = "contact_info")
    private String phone_number;
	
    @Column(table = "contact_info")
    private String website;
	
    @ElementCollection
    @CollectionTable(name="co_sponsors", joinColumns=@JoinColumn(name="event_id"))
    private java.util.Set<CoSponsors> co_sponsors;

	@Column(name="creation_date")
	@JsonIgnore private java.util.Date creation_date;
	
	@Column(name="last_update_date")
	@JsonIgnore private Date last_update_date;
	
    @Column(name = "updated_by")
    @JsonIgnore private String updated_by;
    
	@Column(name="flag")
	private String flag;
	
	public EventsDbModel() {}

	public EventsDbModel(Integer event_id, String organization, String department, String event_desc, String event_type,
			String priv, Integer fee, Timestamp event_start_date_time, Timestamp event_end_date_time, Blob event_file,
			Integer event_cost, Integer anticipated_cost, Integer anticipated_num_attendees, String funding_source1,
			String funding_source2, String funding_other, Integer cost_funding1, Integer cost_funding2,
			Integer cost_funding_other, Integer attendees_count, String created_by, String cancelled,
			Date cancellation_date, String cancelled_by, String event_name, Set<Speakers> speakers,
			String building_room, String address_line1, String address_line2, String county, String city, String state,
			String country, String other_city, String zip, String first_name, String last_name,
			String sponsoring_department, String email_1, String email_2, String phone_number, String website,
			Set<CoSponsors> co_sponsors, java.util.Date creation_date, Date last_update_date, String updated_by,
			String flag) {
		super();
		this.event_id = event_id;
		this.organization = organization;
		this.department = department;
		this.event_desc = event_desc;
		this.event_type = event_type;
		this.priv = priv;
		this.fee = fee;
		this.event_start_date_time = event_start_date_time;
		this.event_end_date_time = event_end_date_time;
		this.event_file = event_file;
		this.event_cost = event_cost;
		this.anticipated_cost = anticipated_cost;
		this.anticipated_num_attendees = anticipated_num_attendees;
		this.funding_source1 = funding_source1;
		this.funding_source2 = funding_source2;
		this.funding_other = funding_other;
		this.cost_funding1 = cost_funding1;
		this.cost_funding2 = cost_funding2;
		this.cost_funding_other = cost_funding_other;
		this.attendees_count = attendees_count;
		this.created_by = created_by;
		this.cancelled = cancelled;
		this.cancellation_date = cancellation_date;
		this.cancelled_by = cancelled_by;
		this.event_name = event_name;
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
		this.co_sponsors = co_sponsors;
		this.creation_date = creation_date;
		this.last_update_date = last_update_date;
		this.updated_by = updated_by;
		this.flag = flag;
	}

	public Integer getEvent_id() {
		return event_id;
	}

	public void setEvent_id(Integer event_id) {
		this.event_id = event_id;
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

	public Blob getEvent_file() {
		return event_file;
	}

	public void setEvent_file(Blob event_file) {
		this.event_file = event_file;
	}

	public Integer getEvent_cost() {
		return event_cost;
	}

	public void setEvent_cost(Integer event_cost) {
		this.event_cost = event_cost;
	}

	public Integer getAnticipated_cost() {
		return anticipated_cost;
	}

	public void setAnticipated_cost(Integer anticipated_cost) {
		this.anticipated_cost = anticipated_cost;
	}

	public Integer getAnticipated_num_attendees() {
		return anticipated_num_attendees;
	}

	public void setAnticipated_num_attendees(Integer anticipated_num_attendees) {
		this.anticipated_num_attendees = anticipated_num_attendees;
	}

	public String getFunding_source1() {
		return funding_source1;
	}

	public void setFunding_source1(String funding_source1) {
		this.funding_source1 = funding_source1;
	}

	public String getFunding_source2() {
		return funding_source2;
	}

	public void setFunding_source2(String funding_source2) {
		this.funding_source2 = funding_source2;
	}

	public String getFunding_other() {
		return funding_other;
	}

	public void setFunding_other(String funding_other) {
		this.funding_other = funding_other;
	}

	public Integer getCost_funding1() {
		return cost_funding1;
	}

	public void setCost_funding1(Integer cost_funding1) {
		this.cost_funding1 = cost_funding1;
	}

	public Integer getCost_funding2() {
		return cost_funding2;
	}

	public void setCost_funding2(Integer cost_funding2) {
		this.cost_funding2 = cost_funding2;
	}

	public Integer getCost_funding_other() {
		return cost_funding_other;
	}

	public void setCost_funding_other(Integer cost_funding_other) {
		this.cost_funding_other = cost_funding_other;
	}

	public Integer getAttendees_count() {
		return attendees_count;
	}

	public void setAttendees_count(Integer attendees_count) {
		this.attendees_count = attendees_count;
	}

	public String getCreated_by() {
		return created_by;
	}

	public void setCreated_by(String created_by) {
		this.created_by = created_by;
	}

	public String getCancelled() {
		return cancelled;
	}

	public void setCancelled(String cancelled) {
		this.cancelled = cancelled;
	}

	public Date getCancellation_date() {
		return cancellation_date;
	}

	public void setCancellation_date(Date cancellation_date) {
		this.cancellation_date = cancellation_date;
	}

	public String getCancelled_by() {
		return cancelled_by;
	}

	public void setCancelled_by(String cancelled_by) {
		this.cancelled_by = cancelled_by;
	}

	public String getEvent_name() {
		return event_name;
	}

	public void setEvent_name(String event_name) {
		this.event_name = event_name;
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

	public java.util.Set<CoSponsors> getCo_sponsors() {
		return co_sponsors;
	}

	public void setCo_sponsors(java.util.Set<CoSponsors> co_sponsors) {
		this.co_sponsors = co_sponsors;
	}

	public java.util.Date getCreation_date() {
		return creation_date;
	}

	public void setCreation_date(java.util.Date creation_date) {
		this.creation_date = creation_date;
	}

	public Date getLast_update_date() {
		return last_update_date;
	}

	public void setLast_update_date(Date last_update_date) {
		this.last_update_date = last_update_date;
	}

	public String getUpdated_by() {
		return updated_by;
	}

	public void setUpdated_by(String updated_by) {
		this.updated_by = updated_by;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

}