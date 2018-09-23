package org.uw.engagement.events.dao;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.uw.engagement.events.model.EngEventsView;

public interface EngEventsviewCustom {
	Page<EngEventsView> findByOrganization( Pageable pageable);
}
