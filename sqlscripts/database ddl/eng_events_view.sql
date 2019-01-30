--------------------------------------------------------
--  File created - Wednesday-January-30-2019   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for View ENG_EVENTS_VIEW
--------------------------------------------------------

  CREATE OR REPLACE FORCE NONEDITIONABLE VIEW "SYSTEM"."ENG_EVENTS_VIEW" ("EVENT_ID", "EVENT_NAME", "ORGANIZATION", "DEPARTMENT", "EVENT_DESC", "EVENT_TYPE", "PRIVATE", "FEE", "EVENT_START_DATE_TIME", "EVENT_END_DATE_TIME", "CANCELLED", "EVENT_FILE", "BUILDING_ROOM", "ADDRESS_LINE1", "ADDRESS_LINE2", "COUNTY", "CITY", "OTHER_CITY", "STATE", "COUNTRY", "ZIP", "FIRST_NAME", "LAST_NAME", "EMAIL_1", "EMAIL_2", "PHONE_NUMBER", "SPONSORING_DEPARTMENT") AS 
  SELECT  uw_eng.event_id, uw_eng.event_name, uw_eng.organization, uw_eng.department, uw_eng.event_desc, uw_eng.event_type, uw_eng.private, uw_eng.fee, uw_eng.event_start_date_time, uw_eng.event_end_date_time, uw_eng.cancelled, uw_eng.event_file,
        loc.building_room, loc.address_line1, loc.address_line2, loc.county, loc.city, loc.other_city, loc.state, loc.country, loc.zip,
        co_info.first_name, co_info.last_name, co_info.email_1, co_info.email_2, co_info.phone_number, co_info.SPONSORING_DEPARTMENT
FROM uw_engagement uw_eng, location loc, contact_info co_info
WHERE uw_eng.event_id = loc.event_id AND
      uw_eng.event_id=co_info.event_id AND
      flag = 'N'
ORDER BY uw_eng.event_start_date_time;
