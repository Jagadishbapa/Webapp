package org.uw.engagement.events.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.uw.engagement.events.model.EngEventsView;

public interface EngEventsviewCustom {
	Page<EngEventsView> findByOrganization(String filterquery, Date datefrom, Date datetos, String v_county, String v_city,  String v_org, String v_dept, String v_eventtype, String v_keyword, int page, Pageable pageable);
}
