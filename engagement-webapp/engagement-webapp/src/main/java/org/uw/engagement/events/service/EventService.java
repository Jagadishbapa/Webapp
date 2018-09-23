//service - BO
package org.uw.engagement.events.service;

import org.uw.engagement.events.dao.*;
import org.uw.engagement.events.model.EventsDbModel;
import org.uw.engagement.events.model.UwEngModel;
import org.uw.engagement.events.model.EngEventsView;
import java.util.ArrayList;
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
	private EventsDao eventsDao;
	
	@Autowired
	private AudEventsDao audeventsDao;
	
	@Autowired
	private UwEngModelDao uwengmodeldao;
	
	@Autowired
	private EngEventsViewRepository audeventsDao1;
	
	//-done
	@Transactional
	public Page<EngEventsView> getPageEvents(AudEventsDao aed, int page)
	{
		return aed.findAll(new PageRequest(page,25));
	}
	
	//--done
	
	@Transactional
	public Page<EngEventsView> getFilterEvents(EngEventsViewRepository eevr, String org, Pageable pageable)
	{
		return  eevr.findByOrganization(pageable);
	}
	
	
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

	
}
