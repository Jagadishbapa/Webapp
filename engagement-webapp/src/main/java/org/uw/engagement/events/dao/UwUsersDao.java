package org.uw.engagement.events.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.uw.engagement.events.model.EngEventsView;
import org.uw.engagement.events.model.UWUsers;


@Repository
public interface UwUsersDao extends JpaRepository<UWUsers, String>
//, JpaRepository<EngEventsView, Integer>
{
	public  boolean existsByEmailAndPwd (String uwyoemail, String pwd);
}
