package org.uw.engagement.events.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.*;
import java.sql.*;
import oracle.sql.*;


class Speakers {
	String first_name;
	String last_name;
	String middle_name;
	String email;
	Speakers(String first_name, String last_name, String middle_name, String email)
	{
		this.first_name=first_name;
		this.last_name=last_name;
		this.middle_name=middle_name;
		this.email=email;
	}
	
	Speakers(Speakers sp)
	{
		this.first_name=sp.first_name;
		this.last_name=sp.last_name;
		this.middle_name=sp.middle_name;
		this.email=sp.email;
	}
}

class Location {
	  String building_room;
	  String address_line1;
	  String address_line2;
	  String county;
	  String city;
	  String state;
	  String country;
	  int zip;
	Location(String br, String adl1, String adl2, String county, String city, String state, String country, int zip)
	{
		this.building_room=br;
		this.address_line1 = adl1;
		this.address_line2 = adl2;
		this.county = county;
		this.city = city;
		this.state = state;
		this.country = country;
		this.zip = zip;
	}  
	Location(Location loc)
	{
		building_room=loc.building_room;
		address_line1 = loc.address_line1;
		address_line2 = loc.address_line2;
		county = loc.county;
		city = loc.city;
		state = loc.state;
		country = loc.country;
		zip = loc.zip;
	}

}

class ContactInfo{
	  String first_name;
	  String last_name;
	  String sponsoring_department;
	  String email_1;
	  String email_2;
	  int phone_number;
	  String website;
	  ContactInfo(String fn, String ln, String sd, String e1, String e2, int pn, String wbs)
	  {
		  this.first_name = fn;
		  this.last_name = ln;
		  this.sponsoring_department = sd;
		  this.email_1 =e1;
		  this.email_2 =e2;
		  this.phone_number = pn;
		  this.website =wbs; 
	  }
	  ContactInfo(ContactInfo coi)
	  {
		  this.first_name = coi.first_name;
		  this.last_name = coi.last_name;
		  this.sponsoring_department = coi.sponsoring_department;
		  this.email_1 =coi.email_1;
		  this.email_2 =coi.email_2;
		  this.phone_number = coi.phone_number;
		  this.website =coi.website;  
	  }
}

class CoSponsors{
	  String name;
	  String email;
	  int phone_number;
	  String website;
	  CoSponsors(String name, String em, int pn, String wbs)
	  {
		  this.name = name;
		  this.email = em;
		  this.phone_number = pn;
		  this.website = wbs;
	  }
	  
	  CoSponsors(CoSponsors csps)
	  {
		  this.name = csps.name;
		  this.email = csps.email;
		  this.phone_number = csps.phone_number;
		  this.website = csps.website; 
	  }
}


@Entity
@Table(name="UW_ENGAGEMENT")
public class EventsDbModel {

	@Id
	@Column(name="EVENT_ID")
	private int id;
	
	
	@Column(name="ORGANIZATION")
	private String org;
	
	public void setOrg(String org)
	{
		this.org = org;
	}
	
	public String getOrg()
	{
		return org;
	}
	
	@Column(name="DEPARTMENT")
	private String dept;
	
	public void setDept(String dept)
	{
		this.dept = dept;
	}
	
	public String getDept()
	{
		return dept;
	}
	
	@Column(name="EVENT_DESC")
	private String event_desc;
	
	public void setEventDesc(String event_desc)
	{
		this.event_desc = event_desc;
	}
	
	public String getEventDesc()
	{
		return event_desc;
	}
	
	@Column(name="EVENT_TYPE")
	private String event_type;
	
	public void setEventType(String event_type)
	{
		this.event_type = event_type;
	}
	
	public String getEventType()
	{
		return event_type;
	}
	
	@Column(name="PRIVATE")
	private String priv;
	
	public void setPriv(String priv)
	{
		this.priv = priv;
	}
	
	public String getPriv()
	{
		return priv;
	}
	
	@Column(name="FEE")
	private int fee;
	
	public void setFee(int fee )
	{
		this.fee = fee;
	}
	
	public int getFee()
	{
		return fee;
	}
	
	@Column(name="EVENT_START_DATE_TIME")
	private Timestamp eve_start_time;
	
	public void setEvStDate(Timestamp eve_start_time)
	{
		this.eve_start_time = eve_start_time;
	}
	
	public Timestamp getEvStDate()
	{
		return eve_start_time;
	}
	
	@Column(name="EVENT_END_DATE_TIME")
	private Timestamp eve_end_time;
	
	public void setEvEnDate(Timestamp eve_end_time)
	{
		this.eve_end_time = eve_end_time;
	}
	
	public Timestamp getEvEnDate()
	{
		return eve_end_time;
	}
	
	@Column(name="EVENT_FILE")
	private BFILE event_file;
	
	public void setEvFile(BFILE event_file)
	{
		this.event_file = event_file;
	}
	
	public BFILE getEvFilee()
	{
		return event_file;
	}
	
	
	@Column(name="EVENT_COST")
	private int eve_cost;
	
	public void setEvCost(int eve_cost)
	{
		this.eve_cost = eve_cost;
	}
	
	public int getEvCost()
	{
		return eve_cost;
	}
	
	
	@Column(name="SPEAKERS")
	private List<Speakers> speakers;
	//= new ArrayList<Speakers>();
	
	public void setSpeakers(List<Speakers> speakers)
	{
		this.speakers = new ArrayList<Speakers>(speakers);
	}
	
	public List<Speakers> getSpeakers()
	{
		return speakers;
	}
	
	@Column(name="LOCATION")
	private Location loc;
	
	public void setLocation(Location loc)
	{
		this.loc = new Location(loc);
	}
	
	public Location getLocation()
	{
		return loc;
	}
	//= new Location();
	
	@Column(name="CONTACT_INFO")
	private ContactInfo contacts = new ContactInfo();
	
	@Column(name="ANTICIPATED_COST")
	private int ant_cost;

	@Column(name="ANTICIPATED_NUM_ATTENDEES")
	private int ant_num_attendees;
	
	@Column(name="FUNDING_SOURCE1")
	private String fund1;
	
	@Column(name="FUNDING_SOURCE2")
	private String fund2;
	
	@Column(name="FUNDING_OTHER")
	private String fundOther;
	
	@Column(name="COST_FUNDING1")
	private int costF1;
	
	@Column(name="COST_FUNDING2")
	private int costF2;
	
	@Column(name="COST_FUNDING_OTHER")
	private int costFO;
	
	@Column(name="CO_SPONSORS")
	private List<CoSponsors> coSponsors = new ArrayList<CoSponsors>();
	
	@Column(name="ATTENDEES_COUNT")
	private int attendeeC;
	
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
	
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setDept(String dept)
	{
		this.dept = dept;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	
	public String setOrg(String org)
	{
		this.org = org;
	}
	DEPARTMENT
	EVENT_DESC
	EVENT_TYPE
	PRIVATE
	FEE
	EVENT_START_DATE_TIME
	EVENT_END_DATE_TIME
	EVENT_FILE
	SPEAKERS
	LOCATION
	CONTACT_INFO
	ANTICIPATED_COST
	ANTICIPATED_NUM_ATTENDEES
	FUNDING_SOURCE1
	FUNDING_SOURCE2
	FUNDING_OTHER
	COST_FUNDING1
	COST_FUNDING2
	COST_FUNDING_OTHER
	CO_SPONSORS
	CANCELLED
	
}