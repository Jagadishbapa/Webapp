package org.uw.engagement.events.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.uw.engagement.events.model.UWEngAdmins;


@Repository
public interface UWEngAdminsDao extends JpaRepository<UWEngAdmins, String>
//, JpaRepository<EngEventsView, Integer>
{
	public  boolean existsByEmailAndPassword (String uwyoemail, String pwd);
}
