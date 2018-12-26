package org.uw.engagement.events;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;


@SpringBootApplication
public class EventsappApplication {

	public static void main(String[] args) {
		SpringApplication.run(EventsappApplication.class, args);
	}
}


/*
@SpringBootApplication
public class EventsappApplication extends SpringBootServletInitializer {
}*/