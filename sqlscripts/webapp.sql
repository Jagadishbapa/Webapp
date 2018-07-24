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

drop type co_sponsor_type;
drop type co_sponsor;
drop type contact_info;
drop type location;
drop type speaker_type;
drop type speaker;


-------------------------------------------------------------------------------------






CREATE OR REPLACE TYPE location AS OBJECT 
( /* TODO enter attribute and method declarations here */ 
  building_room VARCHAR2(200),
  address_line1 VARCHAR2(200),
  address_line2 VARCHAR2(200),
  county VARCHAR2(200),
  city VARCHAR2(200),
  state VARCHAR2(200),
  country VARCHAR2(200),
  zip NUMBER,
  CONSTRAINT address_line1_constraint CHECK (address_line1 IS NOT NULL),
  CONSTRAINT county_constraint 
  CHECK (county IN
                ('Albany',
                'Big Horn',
                'Campbell',
                'Carbon',
                'Converse',
                'Crook',
                'Fremont',
                'Goshen',
                'Hot Springs',
                'Johnson',
                'Laramie',
                'Lincoln',
                'Natrona',
                'Niobrara',
                'Park',
                'Platte',
                'Sheridan',
                'Sublette',
                'Sweetwater',
                'Teton',
                'Uninta',
                'Washakie',
                'Weston',
                'Wind River Indian Reservation')),
  
  CONSTRAINT city_constraint 
  CHECK (city IN
                ('Albin',
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
                'Arapahoe')),
  
  CONSTRAINT state_constraint 
  CHECK (state="Wyoming"),
  
  CONSTRAINT country_constraint
  CHECK(country="United States")
  );
