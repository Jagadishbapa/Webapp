package org.uw.engagement.events.dao;


import java.util.Date;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.ParameterMode;
import javax.persistence.PersistenceContext;
import javax.persistence.StoredProcedureQuery;

import org.springframework.stereotype.Repository;
import org.hibernate.Criteria;
import org.hibernate.transform.Transformers;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.uw.engagement.events.model.EngEventsView;
import org.uw.engagement.events.model.EventsDbModel;
import org.uw.engagement.events.model.UwEngModel;

@Repository
public interface EngEventsViewRepository extends CrudRepository<EngEventsView, Integer>, JpaRepository<EngEventsView, Integer>{
   /* @Query( value="SELECT * FROM eng_events_view eev where eev.organization= :org ORDER BY ?#{#pageable}",
    		countQuery = "SELECT count(*) FROM eng_events_view eev where eev.organization= :org ORDER BY ?#{#pageable}"
    		,nativeQuery=true)*/
	
    @Query( value="SELECT * from eng_events_view ORDER BY ?#{#pageable}",
    		countQuery="SELECT count(*) from eng_events_view ORDER BY ?#{#pageable}",
    		nativeQuery=true)
    public Page<EngEventsView> findByDefault(Pageable pageable);
	
    @Query( value="SELECT * from eng_events_view\r\n" + 
    		"                WHERE (TRUNC(CAST(event_start_date_time as DATE)) between :v_datefrom AND \r\n" + 
    		"                      :v_dateto) AND\r\n" + 
    		"                      county like :v_county AND\r\n" + 
    		"                      city like :v_city AND\r\n" + 
    		"                      organization like :v_org AND\r\n" + 
    		"                      department like :v_dept AND\r\n" + 
    		"                      event_type like :v_eventtype ORDER BY ?#{#pageable}",
    		countQuery="SELECT count(*) from eng_events_view\r\n" + 
    	    		"                WHERE (TRUNC(CAST(event_start_date_time as DATE)) between :v_datefrom AND \r\n" + 
    	    		"                      :v_dateto) AND\r\n" + 
    	    		"                      county like :v_county AND\r\n" + 
    	    		"                      city like :v_city AND\r\n" + 
    	    		"                      organization like :v_org AND\r\n" + 
    	    		"                      department like :v_dept AND\r\n" + 
    	    		"                      event_type like :v_eventtype ORDER BY ?#{#pageable}",
    		nativeQuery=true)
    public Page<EngEventsView> findByAllFilters(@Param("v_datefrom") Date v_datefrom, @Param("v_dateto") Date v_dateto, @Param("v_county") String v_county,
    		@Param("v_city") String v_city, @Param("v_org") String v_org, @Param("v_dept") String v_dept, @Param("v_eventtype") String v_eventtype,
    										Pageable pageable);
    
    
    
    @Query( value="SELECT * from eng_events_view\r\n" + 
    		"                WHERE (TRUNC(CAST(event_start_date_time as DATE)) <= :v_dateto) AND\r\n" + 
    		"                      county like :v_county AND\r\n" + 
    		"                      city like :v_city AND\r\n" + 
    		"                      organization like :v_org AND\r\n" + 
    		"                      department like :v_dept AND\r\n" + 
    		"                      event_type like :v_eventtype ORDER BY ?#{#pageable}",
    		countQuery="SELECT count(*) from eng_events_view\r\n" + 
    	    		"                WHERE (TRUNC(CAST(event_start_date_time as DATE)) <= :v_dateto) AND\r\n" + 
    	    		"                      county like :v_county AND\r\n" + 
    	    		"                      city like :v_city AND\r\n" + 
    	    		"                      organization like :v_org AND\r\n" + 
    	    		"                      department like :v_dept AND\r\n" + 
    	    		"                      event_type like :v_eventtype ORDER BY ?#{#pageable}",
    		nativeQuery=true)
    public Page<EngEventsView> findByDateto(@Param("v_dateto") Date v_dateto, @Param("v_county") String v_county,
    		@Param("v_city") String v_city, @Param("v_org") String v_org, @Param("v_dept") String v_dept, @Param("v_eventtype") String v_eventtype,
    										Pageable pageable);
    
    
    @Query( value="SELECT * from eng_events_view\r\n" + 
    		"                WHERE (TRUNC(CAST(event_start_date_time as DATE)) >= :v_datefrom) AND\r\n" + 
    		"                      county like :v_county AND\r\n" + 
    		"                      city like :v_city AND\r\n" + 
    		"                      organization like :v_org AND\r\n" + 
    		"                      department like :v_dept AND\r\n" + 
    		"                      event_type like :v_eventtype ORDER BY ?#{#pageable}",
    		countQuery="SELECT count(*) from eng_events_view\r\n" + 
    	    		"                WHERE (TRUNC(CAST(event_start_date_time as DATE)) >= :v_datefrom) AND\r\n" + 
    	    		"                      county like :v_county AND\r\n" + 
    	    		"                      city like :v_city AND\r\n" + 
    	    		"                      organization like :v_org AND\r\n" + 
    	    		"                      department like :v_dept AND\r\n" + 
    	    		"                      event_type like :v_eventtype ORDER BY ?#{#pageable}",
    		nativeQuery=true)
    public Page<EngEventsView> findByDatefrom(@Param("v_datefrom") Date v_datefrom, @Param("v_county") String v_county,
    		@Param("v_city") String v_city, @Param("v_org") String v_org, @Param("v_dept") String v_dept, @Param("v_eventtype") String v_eventtype,
    										Pageable pageable);
    
    
    @Query( value="SELECT * from eng_events_view\r\n" + 
    		"                WHERE county like :v_county AND\r\n" + 
    		"                      city like :v_city AND\r\n" + 
    		"                      organization like :v_org AND\r\n" + 
    		"                      department like :v_dept AND\r\n" + 
    		"                      event_type like :v_eventtype ORDER BY ?#{#pageable}",
    		countQuery="SELECT count(*) from eng_events_view\r\n" + 
    	    		"                WHERE county like :v_county AND\r\n" + 
    	    		"                      city like :v_city AND\r\n" + 
    	    		"                      organization like :v_org AND\r\n" + 
    	    		"                      department like :v_dept AND\r\n" + 
    	    		"                      event_type like :v_eventtype ORDER BY ?#{#pageable}",
    		nativeQuery=true)
    public Page<EngEventsView> findByOtherFilters(@Param("v_county") String v_county,
    		@Param("v_city") String v_city, @Param("v_org") String v_org, @Param("v_dept") String v_dept, @Param("v_eventtype") String v_eventtype,
    										Pageable pageable);
    
    @Query( value="SELECT * from eng_events_view where Lower(event_name) like LOWER('%'||:v_keyword||'%') OR LOWER(organization) like LOWER('%'||:v_keyword||'%') OR LOWER(department) like LOWER('%'||:v_keyword||'%') OR "
    		+ "LOWER(event_desc) like LOWER('%'||:v_keyword||'%') OR LOWER(event_type) like LOWER('%'||:v_keyword||'%') ORDER BY ?#{#pageable}",
    		countQuery="SELECT count(*) from eng_events_view where Lower(event_name) like LOWER('%'||:v_keyword||'%') OR LOWER(organization) like LOWER('%'||:v_keyword||'%') OR LOWER(department) like LOWER('%'||:v_keyword||'%') OR " + 
    				"LOWER(event_desc) like LOWER('%'||:v_keyword||'%') OR LOWER(event_type) like LOWER('%'||:v_keyword||'%') ORDER BY ?#{#pageable}",
    		nativeQuery=true)
    public Page<EngEventsView> findByKeyword(@Param("v_keyword") String v_keyword, Pageable pageable);
    
    
    

	/*
    @PersistenceContext
    private EntityManager em;
    
	@Override
    public Page<EngEventsView> findByOrganization(String filterquery, Date datefrom, Date dateto, String v_county, String v_city,  String v_org, String v_dept, String v_eventtype, String v_keyword, int page, Pageable pageable)
    {
		SimpleDateFormat sdf1 = new SimpleDateFormat("yyyy-M-dd hh:mm:ss");
		//System.out.println(org);
		/*Date df = null;
		Date dt = null;
		SimpleDateFormat sdf;
		
		try {
		sdf = new SimpleDateFormat("dd/M/yyyy");
		datefroms = "16/9/1990"; 
		df = sdf.parse(datefroms);
		
		String datetoString = "31/12/2019";
		dt = sdf.parse(datetoString);
		}catch(Exception e) {}
		df = null;
		dt=null;
	    try
	    {
	        StoredProcedureQuery storedProcedure =  em.createStoredProcedureQuery("audviewproc")
	        		.registerStoredProcedureParameter(1, String.class , ParameterMode.IN)
			        .registerStoredProcedureParameter(2, Date.class , ParameterMode.IN)
			        .registerStoredProcedureParameter(3, Date.class , ParameterMode.IN)
			        .registerStoredProcedureParameter(4, String.class , ParameterMode.IN)
			        .registerStoredProcedureParameter(5, String.class , ParameterMode.IN)
			        .registerStoredProcedureParameter(6, String.class , ParameterMode.IN)
			        .registerStoredProcedureParameter(7, String.class , ParameterMode.IN)
			        .registerStoredProcedureParameter(8, String.class , ParameterMode.IN)
			        .registerStoredProcedureParameter(9, String.class , ParameterMode.IN)
	                .registerStoredProcedureParameter(10, void.class , ParameterMode.REF_CURSOR);
	        storedProcedure.setParameter(1, filterquery);
	        storedProcedure.setParameter(2, datefrom);
	        storedProcedure.setParameter(3, dateto);
	        storedProcedure.setParameter(4, v_county);
	        storedProcedure.setParameter(5, v_city);
	        storedProcedure.setParameter(6, v_org);
	        storedProcedure.setParameter(7, v_dept);
	        storedProcedure.setParameter(8, v_eventtype);
	        storedProcedure.setParameter(9, v_keyword);
	    	//query.setParameter("y", 4);
	        
	        storedProcedure.setFirstResult(0); 
	        storedProcedure.setMaxResults(0);
	        System.out.println(storedProcedure.getMaxResults());
	        
	        storedProcedure.execute();
	        List<Object[]> objectlist = storedProcedure.getResultList();
	        List<EngEventsView> engeventslist = new ArrayList<EngEventsView>();
	        for (Object[] obj : objectlist)
	        {
	        	EngEventsView events = new EngEventsView();
	        	events.setEvent_id(Integer.parseInt(obj[0].toString()));
	        	events.setEvent_name(obj[1].toString());
	        	events.setOrganization(obj[2].toString());
	        	events.setDepartment(obj[3].toString());
	        	events.setEvent_desc(obj[4].toString());
	        	events.setEvent_type(obj[5].toString());
	        	events.setPriv(obj[6].toString());
	        	events.setFee(Integer.parseInt(obj[7].toString()));
	        	events.setEvent_start_date_time(new Timestamp(sdf1.parse(obj[8].toString()).getTime()));
	        	events.setEvent_end_date_time(new Timestamp(sdf1.parse(obj[9].toString()).getTime()));
	        	events.setBuilding_room(obj[10].toString());
	        	events.setAddress_line1(obj[11].toString());
	        	events.setAddress_line2(obj[12].toString());
	        	events.setCounty(obj[13].toString());
	        	events.setCity(obj[14].toString());
	        	try{
	        		events.setOther_city(obj[15].toString());
	        	}catch(Exception e) {
	        		events.setOther_city(null);
	        	}
	        	events.setState(obj[16].toString());
	        	events.setCountry(obj[17].toString());
	        	events.setZip(Integer.parseInt(obj[18].toString()));
	        	events.setFirst_name(obj[19].toString());
	        	events.setLast_name(obj[20].toString());
	        	events.setEmail_1(obj[21].toString());
	        	events.setEmail_2(obj[22].toString());
	        	events.setPhone_number(obj[23].toString());
	        	
	        	engeventslist.add(events);
	        }
	        final Page<EngEventsView> pages = new PageImpl<>(engeventslist);
	        return pages;
	    }
	    catch (Exception e) {
	        e.printStackTrace();
	    }
		return null;
    }*/
}

