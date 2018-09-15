//dao - repository

package org.uw.engagement.events.dao;
import org.uw.engagement.events.model.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface AudEventsDao extends CrudRepository<EngEventsView, Integer> {

	public List<EngEventsView> findAll();
	
	//public List<EngEventsView> getEvents();
}

