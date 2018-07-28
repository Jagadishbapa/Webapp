CREATE OR REPLACE TYPE SPEAKER AS OBJECT 
( /* TODO enter attribute and method declarations here */ 
  first_name VARCHAR2(100),
  last_name VARCHAR2(100),
  middle_name VARCHAR2(100),
  email VARCHAR2(100));

 /
CREATE TYPE speaker_type AS TABLE OF speaker;
/

CREATE OR REPLACE TYPE location AS OBJECT 
( /* TODO enter attribute and method declarations here */ 
  building_room VARCHAR2(100),
  address_line1 VARCHAR2(200),
  address_line2 VARCHAR2(200),
  county VARCHAR2(100),
  city VARCHAR2(100),
  state VARCHAR2(100),
  country VARCHAR2(100),
  zip NUMBER);
/
  
CREATE OR REPLACE TYPE contact_info AS OBJECT 
( /* TODO enter attribute and method declarations here */ 
  first_name VARCHAR2(100),
  last_name VARCHAR2(100),
  sponsoring_department VARCHAR2(100),
  email_1 VARCHAR2(100),
  email_2 VARCHAR2(100),
  phone_number NUMBER,
  website VARCHAR2(100));
/

CREATE OR REPLACE TYPE co_sponsor AS OBJECT 
( /* TODO enter attribute and method declarations here */ 
  name VARCHAR2(100),
  email VARCHAR2(100),
  phone_number NUMBER,
  website VARCHAR2(100));
  
/
CREATE TYPE co_sponsor_type AS TABLE OF co_sponsor; 
/

drop table UW_ENGAGEMENT;
/
CREATE TABLE UW_ENGAGEMENT 
(
  EVENT_ID NUMBER GENERATED ALWAYS AS IDENTITY INCREMENT BY 1 START WITH 1 NOT NULL 
, ORGANIZATION VARCHAR2(50) NOT NULL 
, DEPARTMENT VARCHAR2(50) NOT NULL 
, EVENT_DESC VARCHAR2(500) NOT NULL 
, EVENT_TYPE VARCHAR2(100) NOT NULL 
, EVENT_START_DATE_TIME DATE NOT NULL 
, EVENT_END_DATE_TIME DATE NOT NULL 
, EVENT_FILE BFILE 
, EVENT_COST NUMBER 
, SPEAKERS SYSTEM.SPEAKER_TYPE 
, LOCATION SYSTEM.LOCATION NOT NULL 
, CONTACT_INFO SYSTEM.CONTACT_INFO NOT NULL 
, ANTICIPATED_COST NUMBER 
, FUNDING_SOURCE1 VARCHAR2(50) 
, FUNDING_SOURCE2 VARCHAR2(50) 
, FUNDING_OTHER VARCHAR2(200) 
, ANTICIPATED_NUM_ATTENDEES NUMBER 
, FEE NUMBER DEFAULT 0 NOT NULL 
, CO_SPONSORS SYSTEM.CO_SPONSOR_TYPE 
, ATTENDEES_COUNT NUMBER 
, CREATION_DATE DATE DEFAULT SYSDATE NOT NULL 
, LAST_UPDATE_DATE DATE 
, CANCELLED VARCHAR2(3) DEFAULT 'NO' NOT NULL 
, CANCELLATION_DATE DATE 
, CONSTRAINT UW_ENGAGEMENT_PK PRIMARY KEY 
  (
    EVENT_ID 
  )
  ENABLE 
) 
NESTED TABLE SPEAKERS STORE AS SPEAKERS 	
NESTED TABLE CO_SPONSORS STORE AS CO_SPONSORS;
/
ALTER TABLE UW_ENGAGEMENT
ADD CONSTRAINT UW_ENGAGEMENT_CHK1 CHECK 
(organization IN
(
'American Heritage Center',
'College of Agriculture and Natural Resources',
'College of Arts and Sciences',
'College of Business',
'College of Education',
'College of Engineering and Applied Science',
'College of Health Sciences',
'College of Law',
'Division of Academic Affairs',
'Division of Administration',
'Division of Governmental and Community Affairs',
'Division of Public Relations',
'Division of Research and Economic Development',
'Division of Student Affairs',
'General Counsel',
'Haub School',
'Honors College',
'Law Library',
'Office of the President',
'School of Energy Resources',
'University Libraries',
'Athletics',
'University of Wyoming Foundation'
))
ENABLE;
/
ALTER TABLE UW_ENGAGEMENT
ADD CONSTRAINT UW_ENGAGEMENT_CHK2 CHECK 
(department IN (
'President',
'Office of The President',
'Offc Diversity Equity &\ Inclus',
'Office of Engagement&\Outreach',
'Intercollegiate Athletics',
'Intercoll Athl Director''s Ofc',
'Athl/Basketball - Men',
'Athl/Basketball - Women',
'Athl/Football',
'Athl/Volleyball',
'Athl/Business Mgr Office',
'Athl/Ticket Office',
'Athl/City Recreation',
'Athl/Pepsters',
'Athl/Facilities',
'Athl/Golf-Men',
'Athl/Training Room',
'Athl/Media Relations',
'Athl/Track - Men',
'Athl/Track - Women',
'Athl/Wrestling',
'Athl/Golf-Women',
'Athl/Drug Education',
'Ofc Academic Support-Athletics',
'Athl/Equipment',
'Athl/Swimming - Men',
'Athl/Swimming - Women',
'Athl/Weight Room',
'Athl/Promotions &\ Marketing',
'Cowboy Joe Club',
'Athletic Training Table',
'Athl/Tennis',
'Athl/Soccer',
'Athl/Compliance',
'Athl/Concessions',
'Arena Auditorium',
'VP Academic Affairs',
'VP Academic Affairs'' Office',
'Univ Studies - First Year Prog',
'Aerospace Studies',
'Military Science',
'UW Rifle Team',
'Advising Career &\ Expl Studies',
'Advising Services',
'Career Services',
'Faculty Senate',
'Student EducationalOpportunity',
'SEO/Academic Services',
'SEO/CACG',
'SEO/Gear-UP',
'SEO/McNair',
'SEO/ETS/EOC',
'SEO/Student Support Services',
'SEO/UB/MSIP',
'SEO/Women''s/Adult Student',
'Summer High School Institute',
'University Honors Program',
'Transfr Artic &\ Studnt Success',
'School of Energy Resources',
'Carbon Management Institute',
'Center Innov Flow Porous Media',
'Ellbogen CTL',
'Writing Center',
'Instructional Technology Ctr',
'LeaRN Synergy &\ STEP',
'Program in Ecology',
'Haub School of ENR',
'Ruckelshaus Institute of ENR',
'AHC/American Heritage Center',
'University Art Museum',
'WYGISC',
'Undeclared Computer Fee',
'Admissions',
'Office of Distance Ed Support',
'AVP of Global Engagement',
'Center for Global Studies',
'Education Abroad',
'Office of the Registrar',
'Regional Centers',
'Scholarships and Financial Aid',
'AVP of Enrollment Management',
'Transfer Relations',
'UW-Casper',
'AVP of Graduate Education',
'Enhanced Oil Recovery Inst',
'College of Arts &\ Sciences',
'A&\S Dean''s Office',
'Fine Arts Outreach',
'Anthropology',
'Visual &\ Literary Arts',
'Botany',
'Chemistry',
'Communication &\ Journalism',
'A&\S Computer Fee',
'English',
'Geography',
'Geology &\ Geophysics',
'Mathematics &\ Statistics',
'Modern &\ Classical Languages',
'Music',
'Band',
'Philosophy &\ Religious Studies',
'Physics &\ Astronomy',
'Psychology',
'Theatre &\ Dance',
'Zoology &\ Physiology',
'Neuroscience',
'Wyoming Cooperative Unit',
'Life Science Program',
'Criminal Justice &\ Sociology',
'Division of Research Support',
'American Studies &\ History',
'Schl of Cultr Gendr &\ Soc Just',
'Schl Pol Pub Affrs &\ Intl Stud',
'WYSAC',
'A&\S/Natural Science',
'College of Ag &\ Nat Resources',
'Agriculture Dean''s Office',
'Agric Admin Business Office',
'Academic &\ Student Programs',
'Agricultural &\ Applied Econ',
'Animal Science',
'Molecular Biology',
'Family &\ Consumer Sciences',
'UW Child Care Center',
'Veterinary Science',
'Plant Sciences',
'Ecosystem Science &\ Management',
'Rodeo',
'Agric Experiment Station',
'Seed Certification',
'R&\E Center/SAREC',
'R&\E Center/Archer',
'R&\E Center/Powell',
'R&\E Center/Sheridan',
'R&\E Center/Torrington',
'R&\E Center/Laramie',
'Greenhouse',
'Stock Farm',
'Soil Testing Facility',
'UW Extension',
'UWE/Communication &\ Tech',
'UWE/EFNEP Programs',
'UWE/4-H Youth Programs',
'UWE/Community Development Educ',
'UWE/Range Programs',
'UWE/Agric Programs',
'UWE/Nutrition Programs',
'Agriculture Computer Fee',
'College of Business',
'Business Dean''s Office',
'Business Academic Advising',
'Internships &\ Online Programs',
'Accounting and Finance',
'Management &\ Marketing',
'Economics',
'MBA Program',
'Business Computer Fee',
'College of Engr &\ Applied Sci',
'Engr &\ Applied Sci Dean''s Ofc',
'Engineering/Microcomputer Ofc',
'Atmospheric Sciences',
'Electrical &\ Computer Engr',
'Mechanical Engineering',
'Engineering Science',
'Civil/Arch Engineering',
'Chemical Engineering',
'Petroleum Engineering',
'Computer Science',
'Engineering Computer Fee',
'College of Health Sciences',
'Health Sciences Dean''s Office',
'Laramie Clinic',
'Medical Educ &\ Public Health',
'UW Fmly Med Resid Progm Chey',
'UW Fmly Med Resid Progm Casper',
'Medical Education Admin Div',
'WWAMI',
'Allied Health Professions',
'Medical Technology',
'Dental Hygiene',
'School of Pharmacy',
'School of Nursing',
'Nursing/Off-Campus Programs',
'Kinesiology and Health',
'Wyo INstitute for Disabilities',
'Social Work',
'Communication Disorders',
'Health Sciences Computer Fee',
'College of Law',
'Law Dean''s Office',
'Law Library',
'Law Computer Fee',
'College of Education',
'Education Dean''s Office',
'Trustees Education Initiative',
'Office of Teacher Education',
'Ed/Graduate Studies &\ Research',
'Ed/Univ Wyoming Lab School',
'Literacy Resear Cntr &\ Clinic',
'Wy School/Univ Partnership',
'Science &\ Math Teaching Center',
'Counselor Education',
'Special Education',
'Education Computer Fee',
'Schl Cnslng Ldrshp Advoc &\ Des',
'School of Teacher Education',
'University Libraries',
'Lib/Administrative Office',
'Lib/Access Services',
'Lib/Coe Reference',
'Lib/Science Library',
'Lib/Collection Development',
'Lib/Brinkerhoff Library',
'Lib/Learning Resource Center',
'Lib/Digital Collections',
'Lib/Special Collections',
'Lib/Systems',
'Lib/Technical Services',
'VP Student Affairs',
'VP Student Affairs'' Office',
'Residence Life &\ Dining Svs',
'Dean of Students Office',
'ASUW',
'Student Media',
'Multicultural Affairs',
'Nontraditional/Women''s Ctr',
'Veterans Services Ctr',
'University Counseling Center',
'AWARE',
'Wyoming Union',
'Union Activities Center',
'Union Facilities',
'Student Health Service',
'Campus Recreation',
'SEO/Univ Disability Supt Svs',
'Student Affairs Computer Fee',
'ADA/SEO Computer Fee',
'Alumni Relations',
'VP Administration',
'VP Administration''s Office',
'Staff Senate',
'Assoc VP Administration',
'Financial Services',
'University Investments',
'Institutional Analysis',
'Budget Office',
'Systems &\ Inst Effectiveness',
'Accounting Office',
'Asset Management',
'Procurement &\ Payment Services',
'Financial Serv Business Office',
'Accounts Receivable',
'Student Financial Operations',
'Cashiers Office',
'Payroll',
'Assoc VP Operations',
'Human Resources',
'Human Resources Ofc',
'University Operations',
'Univ Operations Exec Dir Ofc',
'Facilities Management',
'Project Management',
'Mechanical Trades',
'Electrical Shop',
'Plumbing Shop',
'Controls Shop',
'Preventive Maintenance',
'Structural Trades',
'Carpentry Shop',
'Paint Shop',
'Lock Shop',
'Grounds Services',
'Equipment Services',
'Facilities Services',
'Custodial Services',
'Utilities Management',
'Central Energy Plant',
'Building Automation',
'Technical Services',
'Business Services',
'Stores',
'Material Services',
'Recycling',
'Shipping &\ Receiving',
'Jacoby Golf Course',
'Facilities Construction Mgt',
'Facilities Engineering',
'Central Scheduling',
'Real Estate Operations',
'Auxiliary Services',
'Auxiliary Services Dir''s Ofc',
'Fleet Services - Auto Shop',
'Fleet Services - Car Pool',
'Transit &\ Parking Services',
'Vending Services',
'University Store',
'WyoOne ID Office',
'UW Licensing Office',
'Copier Services',
'Union Copy Center',
'Postal Services',
'Bulk Mail',
'University Police',
'Chief of Police',
'VP Research &\ Economic Dev',
'VP Research &\ Economic Dev Ofc',
'UW National Park Research',
'Biodiversity Institute',
'Office of Sponsored Programs',
'Research Products Center',
'Small Business Development Ctr',
'Manufacturing-Works',
'Wyo Natural Diversity Database',
'EPSCoR-IDEA',
'Wyo Technology Business Ctr',
'Wyoming Public Media',
'Science Initiative',
'INBRE Program',
'Inst Innovation &\ Entrepreneur',
'VP Institutional Advancement',
'Foundation',
'UW Foundation',
'WVAC/Wy Volunteer Asst Corp',
'VP Gov&\Comm Affrs/Legal Affrs',
'UW Legal Affairs',
'General Counsel',
'Equal Opp Report &\ Response',
'Office of Risk Management',
'VP Government&\Community Affrs',
'VP Govt &\ Community Affrs Ofc',
'University Public Relations',
'Institutional Communications',
'Institutional Marketing',
'Photo Service',
'VP Info Tech &\ CIO',
'VP IT &\ CIO''s Office',
'IT/Business Svcs',
'IT/Application &\ Database Svcs',
'IT/Client Support Svcs',
'IT/Telecom System Support Svcs',
'IT/TSS/Operations',
'IT/TSS/Systems Development',
'IT/Computer Fee',
'IT/Research Support',
'University of Wyoming Trustees',
'Internal Audit'
))
ENABLE;
/
ALTER TABLE UW_ENGAGEMENT
ADD CONSTRAINT UW_ENGAGEMENT_CHK3 CHECK 
(event_type IN (
'Athletic Events/Training',
'Community College Collaboration',
'Direct Client/Patient Care',
'Government or Non-profit Assistance/Collaboration/Technology Transfer',
'Industry Assistance/Collaboration/Technology Transfer',
'Other',
'Policy Work and Evaluation Support',
'Pre-K through 12 Education Collaboration',
'Professional Development, Training Programs, and Non-credit Courses',
'Recruiting or Alumni Engagement',
'Research or Extension',
'Seminar/Public talk or Performance/Exhibition'
))
ENABLE;
/
ALTER TABLE UW_ENGAGEMENT
ADD CONSTRAINT UW_ENGAGEMENT_CHK4 CHECK 
((location.address_line1 IS NOT NULL AND 
location.county IS NOT NULL AND
location.city IS NOT NULL AND
location.state IS NOT NULL AND
location.country IS NOT NULL AND
location.zip IS NOT NULL AND
location.county IN 
(
'Albany County',
'Big Horn County',
'Campbell County',
'Carbon County',
'Converse County',
'Crook County',
'Fremont County',
'Goshen County',
'Hot Springs County',
'Johnson County',
'Laramie County',
'Lincoln County',
'Natrona County',
'Niobrara County',
'Park County',
'Platte County',
'Sheridan County',
'Sublette County',
'Sweetwater County',
'Teton County',
'Uninta County',
'Washakie County',
'Weston County',
'Wind River Indian Reservation'
) AND

location.city IN
(
  'Albin',
'Bar Nunn',
'Basin',
'Bear River',
'Buffalo',
'Burlington',
'Burns',
'Byron',
'Casper',
'Cheyenne',
'Clearmont',
'Cody',
'Cowley',
'Dayton',
'Deaver',
'Diamondville',
'Douglas',
'Dubois',
'Edgerton',
'Evanston',
'Evansville',
'Frannie-BigHornCty',
'Frannie-Park Cty',
'Gillette',
'Glendo',
'Glenrock',
'Grand Encampment',
'Granger',
'Green River',
'Greybull',
'Guernsey',
'Hudson',
'Hulett',
'Jackson',
'Kaycee',
'Kemmerer',
'Lander',
'Laramie',
'Lingle',
'Lovell',
'Lusk',
'Lyman',
'Manderson',
'Meeteetse',
'Midwest',
'Mills',
'Moorcroft',
'Mountain View',
'Newcastle',
'Opal',
'Pavillion',
'Pine Bluffs',
'Pinedale',
'Powell',
'Ranchester',
'Rawlins',
'Riverton',
'Rock River',
'Rock Springs',
'Rolling Hills',
'Saratoga',
'Sheridan',
'Shoshoni',
'Star Valley Ranch',
'Sundance',
'Ten Sleep',
'Thermopolis',
'Torrington',
'Upton',
'Wamsutter',
'Wheatland',
'Worland',
'Wright',
'Yoder',
'Crowheart',
'Fort Washakie',
'Ethete',
'Kinnear',
'Arapahoe'
) AND

location.state IN
(
'Alabama',
'Alaska',
'Arizona',
'Arkansas',
'California',
'Colorado',
'Connecticut',
'Delaware',
'Florida',
'Georgia',
'Hawaii',
'Idaho',
'Illinois',
'Indiana',
'Iowa',
'Kansas',
'Kentucky',
'Louisiana',
'Maine',
'Maryland',
'Massachusetts',
'Michigan',
'Minnesota',
'Mississippi',
'Missouri',
'Montana',
'Nebraska',
'Nevada',
'New Hampshire',
'New Jersey',
'New Mexico',
'New York',
'North Carolina',
'North Dakota',
'Ohio',
'Oklahoma',
'Oregon',
'Pennsylvania',
'Rhode Island',
'South Carolina',
'South Dakota',
'Tennessee',
'Texas',
'Utah',
'Vermont',
'Virginia',
'Washington',
'West Virginia',
'Wisconsin',
'Wyoming'
) AND

location.country in ('United States')

))
ENABLE;
/
ALTER TABLE UW_ENGAGEMENT
ADD CONSTRAINT UW_ENGAGEMENT_CHK5 CHECK 
((contact_info.Sponsoring_department IS NOT NULL AND contact_info.email_1 IS NOT NULL)
)
ENABLE;
/
ALTER TABLE UW_ENGAGEMENT
ADD CONSTRAINT UW_ENGAGEMENT_CHK6 CHECK 
(funding_source1 IN
(
'UW',
'federal grant',
'state of Wyoming grant',
'private donor',
'foundation'
))
ENABLE;
/
ALTER TABLE UW_ENGAGEMENT
ADD CONSTRAINT UW_ENGAGEMENT_CHK7 CHECK 
(funding_source2 IN
(
'UW',
'federal grant',
'state of Wyoming grant',
'private donor',
'foundation'
))
ENABLE;
/
ALTER TABLE UW_ENGAGEMENT
ADD CONSTRAINT UW_ENGAGEMENT_CHK8 CHECK 
(lower(cancelled) IN ('yes','no'))
ENABLE;
/
CREATE OR REPLACE TRIGGER UW_ENGAGE_UPDATE_TRIGGER 
AFTER UPDATE ON UW_ENGAGEMENT 
FOR EACH ROW
BEGIN
  UPDATE UW_ENGAGEMENT
  SET last_update_date = SYSDATE
  WHERE event_id=:old.event_id;
END;
/
CREATE OR REPLACE TRIGGER UW_ENGAGE_UPDATE_TRIGGER 
AFTER UPDATE of cancelled ON UW_ENGAGEMENT 
FOR EACH ROW
BEGIN
  UPDATE UW_ENGAGEMENT
  SET cancellation_date = SYSDATE
  WHERE event_id=:old.event_id;
END;

