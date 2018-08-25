package org.uw.engagement.events.model;

import javax.persistence.Embeddable;

//import com.fasterxml.jackson.annotation.JsonSubTypes.Type;

public class Location {
	  String building_room;
	  String address_line1;
	  String address_line2;
	  String county;
	  String city;
	  String state;
	  String country;
	  Integer zip;
	
	public Location()
	{
		
	}
	  
	public Location(String building_room, String address_line1, String address_line2, String county, String city,
			String state, String country, int zip) {
		super();
		this.building_room = building_room;
		this.address_line1 = address_line1;
		this.address_line2 = address_line2;
		this.county = county;
		this.city = city;
		this.state = state;
		this.country = country;
		this.zip = zip;
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
	public int getZip() {
		return zip;
	}
	public void setZip(int zip) {
		this.zip = zip;
	}
	
	
//	Location(String br, String adl1, String adl2, String county, String city, String state, String country, int zip)
//	{
//		this.building_room=br;
//		this.address_line1 = adl1;
//		this.address_line2 = adl2;
//		this.county = county;
//		this.city = city;
//		this.state = state;
//		this.country = country;
//		this.zip = zip;
//	}  
//	Location(Location loc)
//	{
//		building_room=loc.building_room;
//		address_line1 = loc.address_line1;
//		address_line2 = loc.address_line2;
//		county = loc.county;
//		city = loc.city;
//		state = loc.state;
//		country = loc.country;
//		zip = loc.zip;
//	}

}
