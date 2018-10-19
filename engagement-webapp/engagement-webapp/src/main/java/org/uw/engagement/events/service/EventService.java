//service - BO
package org.uw.engagement.events.service;

import org.uw.engagement.events.dao.*;
//import org.uw.engagement.events.model.UwEngModel;
import org.uw.engagement.events.model.EngEventsView;
import org.uw.engagement.events.model.EventsDbModel;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EventService {
	
	@Autowired
	private UwUsersDao uwusersDao;
	
	@Autowired
	private OrgEventsDao orgeventsDao;
	
	@Autowired
	private EngEventsViewRepository eevr;
	
	@Autowired
	private EventsDao eventsDao;
	
	//--done
	
	@Transactional
	public Page<EngEventsView> getFilterEvents(String filterquery, String datefroms, String datetos, String v_county, String v_city,  String v_org, String v_dept, String v_eventtype, String v_keyword, int page, Pageable pageable) 
	{
		//return  eevr.findByAllFilters("American Heritage Center and Art Museum",  new PageRequest(page,1));
		System.out.println(filterquery+datefroms);
		
		
		if(filterquery.equals("default"))
		{
			return eevr.findByDefault(pageable);
		}
		
		else if(filterquery.equals("keysearch"))
		{
			System.out.println(v_keyword);
			return eevr.findByKeyword(v_keyword, pageable);
		}
		
		else if(filterquery.equals("filter"))
		{
			System.out.println(v_county);
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-M-dd");
			Date datefrom = null;
			Date dateto = null;
			try {
			if(!datefroms.equals("undefined"))
				datefrom = sdf.parse(datefroms);
			if(!datetos.equals("undefined"))
				dateto = sdf.parse(datetos);
			}catch(Exception e) {System.out.println("exception");}
			
			if(!datefroms.equals("undefined") && !datetos.equals("undefined"))
				return eevr.findByAllFilters(datefrom, dateto, v_county, v_city, v_org, v_dept, v_eventtype, pageable);
			else if(!datetos.equals("undefined") )
				return eevr.findByDateto(dateto, v_county, v_city, v_org, v_dept, v_eventtype, pageable);
			else if(!datefroms.equals("undefined") )
				return eevr.findByDatefrom(datefrom, v_county, v_city, v_org, v_dept, v_eventtype, pageable);
			else
				return eevr.findByOtherFilters(v_county, v_city, v_org, v_dept, v_eventtype, pageable);
		}
		return null;
		
	}
	
	
	//Org login
	public boolean uservalid(String userid, String pwd)
	{
		return uwusersDao.existsByEmailAndPwd(userid,pwd);
	}
		
	//-- Organizer transactions
	@Transactional
	public Page<EventsDbModel> getPageEvents(Pageable pageable)
	{
		return orgeventsDao.findAll(pageable);
	}
	
	//@Transactional
	//public EventsDbModel saveEvent(EventsDbModel event) {
		//return orgeventsDao.save(event);
	//}
	
	@Transactional
	public int cancelEvent(String status, Integer eventid)
	{
		return orgeventsDao.eventCancel(status, eventid);
	}
	
	@Transactional
	public EventsDbModel saveEvent(EventsDbModel event) {
		return eventsDao.save(event);
	}

	/*
	@Transactional
	public List<EventsDbModel> getAllEvents(int eventId)
	{
		List<EventsDbModel> events = new ArrayList();
		eventsDao.findById(eventId).forEach(events::add);
		return events;
	}
	
	@Transactional
	public EventsDbModel saveEvent(EventsDbModel event) {
		return eventsDao.save(event);
	}
	
	@Transactional
	public List<EngEventsView> getEvents()
	{
		List<EngEventsView> events = new ArrayList();
		audeventsDao.findAll().forEach(events::add);
		return events;
	}
*/


}
