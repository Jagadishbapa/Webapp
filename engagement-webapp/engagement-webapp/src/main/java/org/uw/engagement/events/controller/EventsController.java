package org.uw.engagement.events.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.uw.engagement.events.model.EventsDbModel;
import org.uw.engagement.events.model.UwEngModel;
import org.uw.engagement.events.dao.AudEventsDao;
import org.uw.engagement.events.dao.EngEventsViewRepository;
import org.uw.engagement.events.dao.EventsDao;
import org.uw.engagement.events.dao.UwEngModelDao;
import org.uw.engagement.events.model.EngEventsView;
import org.uw.engagement.events.service.EventService;

@RestController
@RequestMapping(value="/events")
public class EventsController {
	//audience view used
	@Autowired
	private EngEventsViewRepository eevr;
	
	@Autowired
	private EventService eventService;
	
	// used
	@GetMapping("/listfilter")
	public Page<EngEventsView> showPageFilter( @RequestParam("page") int page, @RequestParam("organization") String organization)
			throws ParseException {
		Pageable pageableRequest = new PageRequest(page, 25);
		return eventService.getFilterEvents(eevr, organization, pageableRequest);
	}
	

	
	@Autowired
	private AudEventsDao audeventsDao;
	
	@Autowired
	private EventsDao eventsDao;
	
	@Autowired
	private UwEngModelDao uwengmodeldao;
	

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
	//--done
	@GetMapping("/list")
	public Page<EngEventsView> showPage( @RequestParam("p") int page ) {
		return eventService.getPageEvents(audeventsDao,page);
		//return "index";
	}
	

	
	/*@GetMapping("/listfilter")
	public Page<EventsDbModel> showPageFilter( @RequestParam("page") int page, @RequestParam("datefrom") String datefrom) throws ParseException {
		//SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		//Date datefrom1= formatter.parse(datefrom);
		
		Pageable pageableRequest = new PageRequest(page, 25);
		return eventService.getPageEvents1(pageableRequest);
		//return "index";
	}*/
	
	@GetMapping("/listkeysearch")
	public Page<EngEventsView> showPageKeySearch( @RequestParam("p") int page ) {
		return eventService.getPageEvents(audeventsDao,page);
		//return "index";
	}
	
	//applyfilter
	/*
	public Page<EngEventsView> getEvents(@RequestParam(defaultValue="0") int page) {
		return eventService.getPageEvents()new PageRequest(page,4);
	}*/
	
}
