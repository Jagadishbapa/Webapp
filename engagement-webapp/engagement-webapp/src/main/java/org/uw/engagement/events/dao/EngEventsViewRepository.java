package org.uw.engagement.events.dao;


import java.sql.Timestamp;
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
import org.uw.engagement.events.model.UwEngModel;

@Repository
public class EngEventsViewRepository implements EngEventsviewCustom{

    @PersistenceContext
    private EntityManager em;
    
	@Override
    public Page<EngEventsView> findByOrganization( Pageable pageable)
    {
	    try
	    {
	        StoredProcedureQuery storedProcedure =  em.createStoredProcedureQuery("audviewproc")
	                .registerStoredProcedureParameter(1, void.class , ParameterMode.REF_CURSOR);
	        //storedProcedure.setParameter("l_ret", 1);
	    	//query.setParameter("y", 4);
	        
	        storedProcedure.setFirstResult((0) * 25); 
	        storedProcedure.setMaxResults(25);
	        
	        storedProcedure.execute();
	        List<Object[]> objectlist = storedProcedure.getResultList();
	        List<EngEventsView> engeventslist = new ArrayList<EngEventsView>();
	        for (Object[] obj : objectlist)
	        {
	        	EngEventsView events = new EngEventsView();
	        	events.setEvent_name(obj[0].toString());

	        	
	        	
	        	getEvent_id

	        	setEvent_id

	        	setEvent_name

	        	setOrganization
	        	setDepartment

	        	setEvent_desc

	        	setEvent_type

	        	setPriv}

	        	setFee

	        	setEvent_start_date_time

	        	setEvent_end_date_time

	        	setBuilding_room

	        	setAddress_line1

	        	setAddress_line2

	        	setCounty

	        	setCity

	        	setOther_city

	        	setState

	        	setCountry

	        	setZip

	        	setFirst_name

	        	setLast_name

	        	setEmail_1
	        	setEmail_2

	        	setPhone_number
	        	
	        }
	        
	        //EngEventsView objectlist1 = new EngEventsView(objectlist.get(0));
	        //EngEventsView enlist = (EngEventsView) objectlist1;
	        //List<EngEventsView> objectlist2 = new ArrayList<EngEventsView>();
	       // objectlist2.add(objectlist1);
	        List<EngEventsView> objectlist1 = storedProcedure.getResultList();
	        //System.out.println(objectlist1.get(0).getClass().getName());
	        final Page<EngEventsView> pages = new PageImpl<>(engeventslist);
	        return pages;

	    }
	    catch (Exception e) {
	        e.printStackTrace();
	        //return false;
	    }
		return null;
		
    }
	


}

