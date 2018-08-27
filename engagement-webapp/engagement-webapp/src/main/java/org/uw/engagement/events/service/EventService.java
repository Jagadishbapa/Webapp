//service - BO
package org.uw.engagement.events.service;

import org.uw.engagement.events.dao.*;
import org.uw.engagement.events.model.EventsDbModel;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class EventService {
	
	@Autowired
	private EventsDao eventsDao;
	
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
}
