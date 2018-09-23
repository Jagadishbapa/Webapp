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
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.SecondaryTable;
import javax.persistence.SecondaryTables;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import oracle.jdbc.OracleBfile;
import oracle.sql.BLOB;

import java.util.*;
import java.sql.*;
import java.sql.Date;

@Entity
@Table(name="UW_ENGAGEMENT")
public class UwEngModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="EVENT_ID")
	private Integer id;
	
	@Column(name="organization")
	private String organization;

	@Column(name="DEPARTMENT")
	private String department;
	
	@Column(name="EVENT_DESC")
	private String event_desc;
	
	@Column(name="EVENT_TYPE")
	private String event_type;
	
	@Column(name="PRIVATE")
	private String priv;
	
	@Column(name="FEE")
	private Integer fee;
	
	@Column(name="EVENT_START_DATE_TIME")
	@JsonFormat(pattern="yyyy-MM-dd hh:mm aa")
	private Timestamp event_start_date_time;
	
	@Column(name="EVENT_END_DATE_TIME")
	@JsonFormat(pattern="yyyy-MM-dd hh:mm aa")
	private Timestamp event_end_date_time;
	
	@Column(name="EVENT_FILE")
	private Blob event_file;
	
	@Column(name="EVENT_COST")
	private Integer event_cost;
	
	
	@Column(name="ANTICIPATED_COST")
	private Integer anticipated_cost;

	@Column(name="ANTICIPATED_NUM_ATTENDEES")
	private Integer anticipated_num_attendees;
	
	@Column(name="FUNDING_SOURCE1")
	private String funding_source1;
	
	@Column(name="FUNDING_SOURCE2")
	private String funding_source2;
	
	@Column(name="FUNDING_OTHER")
	private String funding_other;
	
	@Column(name="COST_FUNDING1")
	private Integer cost_funding1;
	
	@Column(name="COST_FUNDING2")
	private Integer cost_funding2;
	
	@Column(name="COST_FUNDING_OTHER")
	private Integer cost_funding_other;
	
	@Column(name="ATTENDEES_COUNT")
	private Integer attendees_count;
	
    @Column(name = "CREATED_BY")
    private String created_by;
	
	@Column(name="CREATION_DATE")
	private java.util.Date creation_date;
	
	@Column(name="LAST_UPDATE_DATE")
	private Date last_update_date;
	
	@Column(name="CANCELLED")
	private String cancelled;
	
	@Column(name="CANCELLATION_DATE")
	private Date cancelllation_date;
	
    
    @Column(name = "UPDATED_BY")
    private String updated_by;
    
    
    @Column(name = "CANCELLED_BY")
    private String cancelled_by;
    
	@Column(name="EVENT_NAME")
	private String event_name;
	
	@Column(name="FLAG")
	private String flag;
	
	public UwEngModel() {}

	public UwEngModel(Integer id, String organization, String department, String event_desc, String event_type,
			String priv, Integer fee, Timestamp event_start_date_time, Timestamp event_end_date_time, Blob event_file,
			Integer event_cost, Integer anticipated_cost, Integer anticipated_num_attendees, String funding_source1,
			String funding_source2, String funding_other, Integer cost_funding1, Integer cost_funding2,
			Integer cost_funding_other, Integer attendees_count, String created_by, java.util.Date creation_date,
			Date last_update_date, String cancelled, Date cancelllation_date, String updated_by, String cancelled_by,
			String event_name, String flag) {
		super();
		this.id = id;
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
		this.creation_date = creation_date;
		this.last_update_date = last_update_date;
		this.cancelled = cancelled;
		this.cancelllation_date = cancelllation_date;
		this.updated_by = updated_by;
		this.cancelled_by = cancelled_by;
		this.event_name = event_name;
		this.flag = flag;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public String getCancelled() {
		return cancelled;
	}

	public void setCancelled(String cancelled) {
		this.cancelled = cancelled;
	}

	public Date getCancelllation_date() {
		return cancelllation_date;
	}

	public void setCancelllation_date(Date cancelllation_date) {
		this.cancelllation_date = cancelllation_date;
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

	public String getEvent_name() {
		return event_name;
	}

	public void setEvent_name(String event_name) {
		this.event_name = event_name;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}
	
	
}
