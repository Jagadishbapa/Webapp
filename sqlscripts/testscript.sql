insert into UW_ENGAGEMENT
(
ORGANIZATION,
DEPARTMENT,
EVENT_DESC,
EVENT_TYPE,
EVENT_START_DATE_TIME,
EVENT_END_DATE_TIME,
EVENT_COST,
SPEAKERS,
LOCATION,
CONTACT_INFO,
ANTICIPATED_COST,
FUNDING_SOURCE1,
FUNDING_SOURCE2,
FUNDING_OTHER,
ANTICIPATED_NUM_ATTENDEES,
FEE,
CO_SPONSORS,
ATTENDEES_COUNT,
CREATION_DATE,
LAST_UPDATE_DATE,
CANCELLED,
CANCELLATION_DATE
)
values
(
'American Heritage Center',
'President',
'dfds',
'Athletic Events/Training',
sysdate,
sysdate,
500,
speaker_type(speaker('df','fda','aff',null),speaker('df','fda','aff',null))
location('204','360 N',null,'Statewide',
);