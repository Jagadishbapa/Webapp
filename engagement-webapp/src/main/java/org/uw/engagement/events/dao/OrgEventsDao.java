package org.uw.engagement.events.dao;

import java.util.Date;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.uw.engagement.events.model.EventsDbModel;

@Repository
public interface OrgEventsDao extends CrudRepository<EventsDbModel, Integer>, JpaRepository<EventsDbModel, Integer>{

	
	public Page<EventsDbModel> findAll(Pageable pageable);
	
	@Transactional
	public EventsDbModel save(EventsDbModel event);
	
	@Modifying
    @Query(nativeQuery = true, value="update uw_engagement set cancelled = :stat where event_id = :eveid")
    public int eventCancel (@Param("stat") String status, @Param("eveid") Integer eventid);





    @Query( value="SELECT uw from EventsDbModel uw where TRUNC(uw.event_start_date_time) >= current_date()   ORDER BY uw.event_start_date_time",
    		countQuery="SELECT count(uw) from EventsDbModel uw where TRUNC(uw.event_start_date_time) >= current_date() ORDER BY uw.event_start_date_time")
    public Page<EventsDbModel> findDefault(Pageable pageable);
	
    @Query( value="SELECT uw from EventsDbModel uw\r\n" + 
    		"                WHERE (TRUNC(uw.event_start_date_time) between :v_datefrom AND \r\n" + 
    		"                      :v_dateto) AND\r\n" + 
    		"                      uw.county like :v_county AND\r\n" + 
    		"                      uw.city like :v_city AND\r\n" + 
    		"                      uw.organization like :v_org AND\r\n" + 
    		"                      uw.department like :v_dept AND\r\n" + 
    		"                      uw.event_type like :v_eventtype ORDER BY uw.event_start_date_time",
    		countQuery="SELECT count(uw) from EventsDbModel uw\r\n" + 
    	    		"                WHERE (TRUNC(uw.event_start_date_time) between :v_datefrom AND \r\n" + 
    	    		"                      :v_dateto) AND\r\n" + 
    	    		"                      uw.county like :v_county AND\r\n" + 
    	    		"                      uw.city like :v_city AND\r\n" + 
    	    		"                      uw.organization like :v_org AND\r\n" + 
    	    		"                      uw.department like :v_dept AND\r\n" + 
    	    		"                      uw.event_type like :v_eventtype ORDER BY uw.event_start_date_time")
    public Page<EventsDbModel> findByAllFilters(@Param("v_datefrom") Date v_datefrom, @Param("v_dateto") Date v_dateto, @Param("v_county") String v_county,
    		@Param("v_city") String v_city, @Param("v_org") String v_org, @Param("v_dept") String v_dept, @Param("v_eventtype") String v_eventtype,
    										Pageable pageable);
    
    
  
    @Query( value="SELECT uw from EventsDbModel uw\r\n" + 
    		"                WHERE (TRUNC(event_start_date_time) <= :v_dateto) AND\r\n" + 
    		"                      uw.county like :v_county AND\r\n" + 
    		"                      uw.city like :v_city AND\r\n" + 
    		"                      uw.organization like :v_org AND\r\n" + 
    		"                      uw.department like :v_dept AND\r\n" + 
    		"                      uw.event_type like :v_eventtype ORDER BY uw.event_start_date_time",
    		countQuery="SELECT count(uw) from EventsDbModel uw\r\n" + 
    		    		"                WHERE (TRUNC(event_start_date_time) <= :v_dateto) AND\r\n" + 
    		    		"                      uw.county like :v_county AND\r\n" + 
    		    		"                      uw.city like :v_city AND\r\n" + 
    		    		"                      uw.organization like :v_org AND\r\n" + 
    		    		"                      uw.department like :v_dept AND\r\n" + 
    		    		"                      uw.event_type like :v_eventtype ORDER BY uw.event_start_date_time")
    public Page<EventsDbModel> findByDateto(@Param("v_dateto") Date v_dateto, @Param("v_county") String v_county,
    		@Param("v_city") String v_city, @Param("v_org") String v_org, @Param("v_dept") String v_dept, @Param("v_eventtype") String v_eventtype,
    										Pageable pageable);
    
    
    @Query( value="SELECT uw from EventsDbModel uw\r\n" + 
    		"                WHERE (TRUNC(uw.event_start_date_time) >= :v_datefrom) AND\r\n" + 
    		"                      uw.county like :v_county AND\r\n" + 
    		"                      uw.city like :v_city AND\r\n" + 
    		"                      uw.organization like :v_org AND\r\n" + 
    		"                      uw.department like :v_dept AND\r\n" + 
    		"                      uw.event_type like :v_eventtype ORDER BY uw.event_start_date_time",
    		countQuery="SELECT count(uw) from EventsDbModel uw\r\n" + 
    	    		"                WHERE (TRUNC(uw.event_start_date_time) >= :v_datefrom) AND\r\n" + 
    	    		"                      uw.county like :v_county AND\r\n" + 
    	    		"                      uw.city like :v_city AND\r\n" + 
    	    		"                      uw.organization like :v_org AND\r\n" + 
    	    		"                      uw.department like :v_dept AND\r\n" + 
    	    		"                      uw.event_type like :v_eventtype ORDER BY uw.event_start_date_time")
    public Page<EventsDbModel> findByDatefrom(@Param("v_datefrom") Date v_datefrom, @Param("v_county") String v_county,
    		@Param("v_city") String v_city, @Param("v_org") String v_org, @Param("v_dept") String v_dept, @Param("v_eventtype") String v_eventtype,
    										Pageable pageable);
    
    
    @Query( value="SELECT uw from EventsDbModel uw\r\n" + 
    		"                WHERE uw.county like :v_county AND\r\n" + 
    		"                      uw.city like :v_city AND\r\n" + 
    		"                      uw.organization like :v_org AND\r\n" + 
    		"                      uw.department like :v_dept AND\r\n" + 
    		"                      uw.event_type like :v_eventtype ORDER BY uw.event_start_date_time",
    		countQuery="SELECT count(uw) from EventsDbModel uw\r\n" + 
    	    		"                WHERE uw.county like :v_county AND\r\n" + 
    	    		"                      uw.city like :v_city AND\r\n" + 
    	    		"                      uw.organization like :v_org AND\r\n" + 
    	    		"                      uw.department like :v_dept AND\r\n" + 
    	    		"                      uw.event_type like :v_eventtype ORDER BY uw.event_start_date_time")
    public Page<EventsDbModel> findByOtherFilters(@Param("v_county") String v_county,
    		@Param("v_city") String v_city, @Param("v_org") String v_org, @Param("v_dept") String v_dept, @Param("v_eventtype") String v_eventtype,
    										Pageable pageable);
    
    @Query( value="SELECT uw from EventsDbModel uw where Lower(uw.event_name) like LOWER('%'||:v_keyword||'%') OR LOWER(uw.organization) like LOWER('%'||:v_keyword||'%') OR LOWER(uw.department) like LOWER('%'||:v_keyword||'%') OR "
    		+ "LOWER(uw.event_desc) like LOWER('%'||:v_keyword||'%') OR LOWER(uw.event_type) like LOWER('%'||:v_keyword||'%') ORDER BY uw.event_start_date_time",
    		countQuery="SELECT uw from EventsDbModel uw where Lower(uw.event_name) like LOWER('%'||:v_keyword||'%') OR LOWER(uw.organization) like LOWER('%'||:v_keyword||'%') OR LOWER(uw.department) like LOWER('%'||:v_keyword||'%') OR "
    	    		+ "LOWER(uw.event_desc) like LOWER('%'||:v_keyword||'%') OR LOWER(uw.event_type) like LOWER('%'||:v_keyword||'%') ORDER BY uw.event_start_date_time")
    public Page<EventsDbModel> findByKeyword(@Param("v_keyword") String v_keyword, Pageable pageable);
    
}

