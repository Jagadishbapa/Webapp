package org.uw.engagement.events.dao;

import org.springframework.stereotype.Repository;

import org.uw.engagement.events.model.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.Query;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@Repository
public interface OrgEventsDao extends CrudRepository<EventsDbModel, Integer>, JpaRepository<EventsDbModel, Integer>{

	
	public Page<EventsDbModel> findAll(Pageable pageable);
	
	@Transactional
	public EventsDbModel save(EventsDbModel event);
	
	@Modifying
    @Query(nativeQuery = true, value="update uw_engagement set cancelled = :stat where event_id = :eveid")
    public int eventCancel (@Param("stat") String status, @Param("eveid") Integer eventid);
}



