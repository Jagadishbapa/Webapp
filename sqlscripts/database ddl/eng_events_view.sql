SELECT  uw_eng.event_id, uw_eng.event_name, uw_eng.organization, uw_eng.department, uw_eng.event_desc, uw_eng.event_type, uw_eng.private, uw_eng.fee, uw_eng.event_start_date_time, uw_eng.event_end_date_time, uw_eng.cancelled,
        loc.building_room, loc.address_line1, loc.address_line2, loc.county, loc.city, loc.other_city, loc.state, loc.country, loc.zip,
        co_info.first_name, co_info.last_name, co_info.email_1, co_info.email_2, co_info.phone_number, co_info.SPONSORING_DEPARTMENT
FROM uw_engagement uw_eng, location loc, contact_info co_info
WHERE uw_eng.event_id = loc.event_id AND
      uw_eng.event_id=co_info.event_id AND
      flag = 'N'
ORDER BY uw_eng.event_start_date_time