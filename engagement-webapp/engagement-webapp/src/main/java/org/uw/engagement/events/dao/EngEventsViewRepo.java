package org.uw.engagement.events.dao;
import org.springframework.data.repository.CrudRepository;
import org.uw.engagement.events.model.EngEventsView;

public interface EngEventsViewRepo  extends CrudRepository<EngEventsView, Integer>, EngEventsviewCustom{

}
