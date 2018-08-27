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
/


insert into UW_ENGAGEMENT
(
EVENT_ID
,ORGANIZATION
,DEPARTMENT
,EVENT_DESC
,EVENT_TYPE
,PRIVATE
,FEE
,EVENT_START_DATE_TIME
,EVENT_END_DATE_TIME
,EVENT_COST
,ANTICIPATED_COST
,ANTICIPATED_NUM_ATTENDEES
,FUNDING_SOURCE1
,FUNDING_SOURCE2
,FUNDING_OTHER
,COST_FUNDING1
,COST_FUNDING2
,COST_FUNDING_OTHER
,ATTENDEES_COUNT
,CREATED_BY
,CREATION_DATE
,LAST_UPDATE_DATE
,CANCELLED
,CANCELLATION_DATE
,EVENT_FILE
,UPDATED_BY
,CANCELLED_BY
)
VALUES
(
null,
'American Heritage Center and Art Museum',
'A&S Dean''s Office',
'event desc',
'Athletic Events/Training',
'YES',
120,
CURRENT_TIMESTAMP,
CURRENT_TIMESTAMP,
120,
120,
100,
'Special Appropriations (legislative)',
'Special Appropriations (legislative)',
'Special Appropriations (legislative)',
20,
20,
80,
100,
'jbapanap@uwyo.edu',
SYSDATE,
SYSDATE,
'YES',
SYSDATE,
null,
'jbapanap@uwyo.edu',
'jbapanap@uwyo.edu'
);
/
select * from uw_engagement;
insert into location values(
23,'buil_room', '260 N', '9th st', 'Laramie County', 'Laramie', 'WY', 'USA', 82072, null);
/
select * from location;
select * from contact_info;
select * from co_sponsors;
select * from speakers;
/

insert into contact_info values(23, 'jaga', 'bapa', 'engg', 'jbapanap@uwyo.edu', 'jbapanap@uwyo.edu', '3077613219', 'kgfj.com');
/

insert into co_sponsors values(23, 'fkjd', 'dfksj', 48, 'kjf' );
/

insert into speakers values(23, 'jaga', null, 'bapa',  'jbapanap@uwyo.edu');