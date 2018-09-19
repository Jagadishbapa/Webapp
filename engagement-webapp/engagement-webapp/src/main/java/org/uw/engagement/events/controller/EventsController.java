package org.uw.engagement.events.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.uw.engagement.events.model.EventsDbModel;
import org.uw.engagement.events.dao.AudEventsDao;
import org.uw.engagement.events.model.EngEventsView;
import org.uw.engagement.events.service.EventService;

@RestController
@RequestMapping(value="/events")
public class EventsController {
	@Autowired
	private EventService eventService;
	
	@Autowired
	private AudEventsDao audeventsDao;
	

	@RequestMapping(value="/allevents/{id}",method=RequestMethod.GET)
	public List<EventsDbModel> getAllEvents(@PathVariable int id)
	{
		return eventService.getAllEvents(id);
	}
	
	@RequestMapping(value="/save", method=RequestMethod.POST, headers= {"content-type=application/json"} )
	public EventsDbModel saveEvent(@RequestBody EventsDbModel event) {
		return eventService.saveEvent(event);
	}
	
	/*@RequestMapping(value="/audgetevents", method=RequestMethod.GET )
	public List<EngEventsView> getEvents() {
		return eventService.getEvents();
	}
	*/
	
	@GetMapping("/list")
	public Page<EngEventsView> showPage( @RequestParam("p") int page ) {
		return eventService.getPageEvents(audeventsDao,page);
		//return "index";
		
	}
	/*
	public Page<EngEventsView> getEvents(@RequestParam(defaultValue="0") int page) {
		return eventService.getPageEvents()new PageRequest(page,4);
	}*/
	
}
