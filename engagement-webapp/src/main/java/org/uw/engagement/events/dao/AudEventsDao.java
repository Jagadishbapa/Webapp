//dao - repository
/*
package org.uw.engagement.events.dao;
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
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface AudEventsDao extends CrudRepository<EngEventsView, Integer>, JpaRepository<EngEventsView, Integer> {

	//public List<EngEventsView> findAll();
	
	//public List<EngEventsView> findAll();
	
    @Query(nativeQuery = true, value="SELECT * FROM ENG_EVENTS_VIEW ORDER BY ?#{#pageable}",
    		countQuery = "select count(*) FROM ENG_EVENTS_VIEW") 
    public Page<EngEventsView> findByOrganization(Pageable pageable);
	
}

*/