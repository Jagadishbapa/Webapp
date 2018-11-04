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
//import org.uw.engagement.events.model.UwEngModel;
//import org.uw.engagement.events.dao.AudEventsDao;
import org.uw.engagement.events.dao.EngEventsViewRepository;
//import org.uw.engagement.events.dao.EventsDao;
//import org.uw.engagement.events.dao.UwEngModelDao;
import org.uw.engagement.events.model.EngEventsView;
import org.uw.engagement.events.service.EventService;

@RestController
@RequestMapping(value="/events")
public class EventsController {
	//audience view used

	
	@Autowired
	private EventService eventService;
	
	
	// used
	@GetMapping("/listfilter")
	public Page<EngEventsView> showPageFilter(@RequestParam("filterquery") String filterquery, @RequestParam("datefrom") String datefroms, @RequestParam("dateto") String datetos, @RequestParam("county") String v_county, @RequestParam("city") String v_city, @RequestParam("organization") String v_org, @RequestParam("department") String v_dept, @RequestParam("eventtype") String v_eventtype, @RequestParam("keyword") String v_keyword, @RequestParam("page") int page) {
		Pageable pageableRequest = new PageRequest(page, 25);
			return eventService.getFilterEvents( filterquery, datefroms, datetos, v_county, v_city, v_org, v_dept, v_eventtype, v_keyword, page, pageableRequest);
	}
	
	
	@GetMapping("/organizerlogin")
	public boolean orgauthenticate(@RequestParam("userid") String userid, @RequestParam("password") String pwd) {
		System.out.println("called");
		return eventService.uservalid(userid,pwd);
	}
	
	@GetMapping("/adminlogin")
	public boolean adminauthenticate(@RequestParam("userid") String userid, @RequestParam("password") String pwd) {
		System.out.println("called");
		return eventService.adminvalid(userid,pwd);
	}

	@RequestMapping(value="/save", method=RequestMethod.POST, headers= {"content-type=application/json"} )
	public EventsDbModel saveEvent(@RequestBody EventsDbModel event) {
		System.out.println(event.getDepartment());
		return eventService.saveEvent(event);
	}
	
	
	@GetMapping("/listorgfilter")
	public Page<EventsDbModel> showPageOrgFilter(@RequestParam("filterquery") String filterquery, @RequestParam("datefrom") String datefroms, @RequestParam("dateto") String datetos, @RequestParam("county") String v_county, @RequestParam("city") String v_city, @RequestParam("organization") String v_org, @RequestParam("department") String v_dept, @RequestParam("eventtype") String v_eventtype, @RequestParam("keyword") String v_keyword, @RequestParam("page") int page) {
		Pageable pageableRequest = new PageRequest(page, 25);
			return eventService.getFilterEvents1( filterquery, datefroms, datetos, v_county, v_city, v_org, v_dept, v_eventtype, v_keyword, page, pageableRequest);
	}
	
	
//	@Autowired
	//private AudEventsDao audeventsDao;
	
	//@Autowired
	//private EventsDao eventsDao;
	
	//@Autowired
	//private UwEngModelDao uwengmodeldao;
	

	/*@RequestMapping(value="/allevents/{id}",method=RequestMethod.GET)
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
	/*
	@GetMapping("/list")
	public Page<EngEventsView> showPage( @RequestParam("p") int page ) {
		return eventService.getPageEvents(audeventsDao,page);
		//return "index";
	}
	

	
	@GetMapping("/listfilter")
	public Page<EventsDbModel> showPageFilter( @RequestParam("page") int page, @RequestParam("datefrom") String datefrom) throws ParseException {
		//SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
		//Date datefrom1= formatter.parse(datefrom);
		
		Pageable pageableRequest = new PageRequest(page, 25);
		return eventService.getPageEvents1(pageableRequest);
		//return "index";
	}
	
	@GetMapping("/listkeysearch")
	public Page<EngEventsView> showPageKeySearch( @RequestParam("p") int page ) {
		return eventService.getPageEvents(audeventsDao,page);
		//return "index";
	}
	*/
	//applyfilter
	/*
	public Page<EngEventsView> getEvents(@RequestParam(defaultValue="0") int page) {
		return eventService.getPageEvents()new PageRequest(page,4);
	}*/
	
}
