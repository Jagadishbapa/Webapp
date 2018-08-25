insert into UW_ENGAGEMENT
( ORGANIZATION 
, DEPARTMENT 
, EVENT_DESC 
, EVENT_TYPE 
, EVENT_START_DATE_TIME 
, EVENT_END_DATE_TIME
, EVENT_FILE 
, EVENT_COST 
, SPEAKERS 
, LOCATION 
, CONTACT_INFO 
, ANTICIPATED_COST 
, FUNDING_SOURCE1 
, FUNDING_SOURCE2 
, FUNDING_OTHER 
, ANTICIPATED_NUM_ATTENDEES 
, FEE 
, CO_SPONSORS
, ATTENDEES_COUNT 
, CREATION_DATE 
, LAST_UPDATE_DATE  
, CANCELLED
, CANCELLATION_DATE
)
VALUES
(
'American Heritage Center',
'President',
'event desc',
'Athletic Events/Training',
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP,
null,
null,
null,
location('engg 123', 'Dept. 3295 1000 E. University Ave.', null, 'Albany County', 'Laramie', 'Wyoming', 'United States', 82072),
contact_info('jaga', 'bapa', 'comp science', 'jbapa@uwyo.edu', 'jb@uwyo.edu', 3077613219, 'www.uwyo.edu'),
10,
null,
null,
null,
null,
0,
null,
null,
SYSDATE,
null,
'NO',
null
);

/
select * from uw_engagement;
/


insert into UW_ENGAGEMENT
(
Event_id,
ORGANIZATION,
DEPARTMENT,
EVENT_DESC,
EVENT_TYPE,
EVENT_START_DATE_TIME,
EVENT_END_DATE_TIME,
--LOCATION,
--CONTACT_INFO,
CREATED_BY,
CREATION_DATE,
speakers
)
VALUES
(
null,
'American Heritage Center and Art Museum',
'A&\S Computer Fee',
'event desc',
'Athletic Events/Training',
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP,
--location('engg 123', 'Dept. 3295 1000 E. University Ave.', null, 'Albany County', 'Laramie', 'Wyoming', 'United States', 82072),
--contact_info('jaga', 'bapa', 'comp science', 'jbapa@uwyo.edu', 'jb@uwyo.edu', 3077613219, 'www.uwyo.edu'),
'jbapanap@uwyo.edu',
SYSDATE,
speaker_type()
);
/

insert into Table(select speakers from uw_engagement where event_id = 4) values('jaga', 'bapa', 'N/A', 'jbap@uw');