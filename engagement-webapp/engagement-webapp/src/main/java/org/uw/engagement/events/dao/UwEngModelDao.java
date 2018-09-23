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
public interface UwEngModelDao extends CrudRepository<UwEngModel, Integer>, JpaRepository<UwEngModel, Integer>{
	
	 /* @Query(value="SELECT * FROM UW_ENGAGEMENT \\ #pageable\\",
	  		countQuery = "select count(*) FROM UW_ENGAGEMENT ", nativeQuery = true ) */
    @Query(nativeQuery = true, value="SELECT * FROM uw_engagement where organization = :org ORDER BY ?#{#pageable}",
    		countQuery = "select count(*) FROM uw_engagement") 
    public Page<UwEngModel> findByOrganization(@Param("org") String org, Pageable pageable);
}
//dao - repository
