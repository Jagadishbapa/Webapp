package org.uw.engagement.events.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.uw.engagement.events.model.EventsDbModel;
import org.uw.engagement.events.service.EventService;

@RestController
@RequestMapping(value="/events")
public class EventsController {
	@Autowired
	private EventService eventService;

	@RequestMapping(value="/allevents/{id}",method=RequestMethod.GET)
	public List<EventsDbModel> getAllEvents(@PathVariable int id)
	{
		return eventService.getAllEvents(id);
	}
}
