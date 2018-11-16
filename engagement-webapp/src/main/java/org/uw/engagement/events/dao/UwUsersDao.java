package org.uw.engagement.events.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.uw.engagement.events.model.UWUsers;


@Repository
public interface UwUsersDao extends JpaRepository<UWUsers, String>
{
	public  boolean existsByEmailAndPwd (String uwyoemail, String pwd);
}
