//dao - repository

package org.uw.engagement.events.dao;
import org.uw.engagement.events.model.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface EventsDao extends CrudRepository<EventsDbModel, Integer>, JpaRepository<EventsDbModel, Integer> {

	public List<EventsDbModel> findById (int eventId);
	
	public EventsDbModel save(EventsDbModel event);
	
    @Query(nativeQuery = true, value="SELECT * FROM uw_engagement, location where uw_engagement.event_id=location.event_id and uw_engagement.organization= :org ORDER BY ?#{#pageable}",
    		countQuery = "select count(*) FROM uw_engagement") 
    public Page<EventsDbModel> findByOrganization(@Param("org") String org, Pageable pageable);
}

