/*
package org.uw.engagement.events.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

//import com.fasterxml.jackson.annotation.JsonSubTypes.Type;

@Entity
@Table(name="LOCATION")
public class Location implements Serializable {
		@Id 
		@Column(name="EVENT_ID")
		private Integer event_id;
		
		//@OneToOne(mappedBy="EventsDbModel")
		//private EventsDbModel employee;
		
		@Column(name="BUILDING_ROOM")
		private String building_room;
		
		@Column(name="ADDRESS_LINE1")
		private String address_line1;
		
		@Column(name="ADDRESS_LINE2")
		private String address_line2;
		
	    @Column(name = "COUNTY")
		private String county;
		
	    @Column(name = "CITY")
		private String city;
		
	    @Column(name = "STATE")
		private String state;
		
	    @Column(name = "COUNTRY")
		private String country;
		
		@Column(name="OTHER_CITY")
		private String othercity;
		
		@Column(name="ZIP")
		private Integer zip;
		
		public Location()
		{}

		public Location(Integer event_id, String building_room, String address_line1, String address_line2,
				String county, String city, String state, String country, String othercity, Integer zip) {
			super();
			this.event_id = event_id;
			this.building_room = building_room;
			this.address_line1 = address_line1;
			this.address_line2 = address_line2;
			this.county = county;
			this.city = city;
			this.state = state;
			this.country = country;
			this.othercity = othercity;
			this.zip = zip;
		}

		public Integer getEvent_id() {
			return event_id;
		}

		public void setEvent_id(Integer event_id) {
			this.event_id = event_id;
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

		public String getOthercity() {
			return othercity;
		}

		public void setOthercity(String othercity) {
			this.othercity = othercity;
		}

		public Integer getZip() {
			return zip;
		}

		public void setZip(Integer zip) {
			this.zip = zip;
		}


}
*/