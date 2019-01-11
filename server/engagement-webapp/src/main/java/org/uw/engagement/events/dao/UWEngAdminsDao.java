package org.uw.engagement.events.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.uw.engagement.events.model.UWEngAdmins;


@Repository
public interface UWEngAdminsDao extends JpaRepository<UWEngAdmins, String>
{
	public  boolean existsByEmailAndPassword (String uwyoemail, String pwd);
}
