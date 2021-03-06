--------------------------------------------------------
--  File created - Wednesday-January-09-2019   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table LOCATION
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."LOCATION" 
   (	"EVENT_ID" NUMBER, 
	"BUILDING_ROOM" VARCHAR2(100 BYTE), 
	"ADDRESS_LINE1" VARCHAR2(200 BYTE), 
	"ADDRESS_LINE2" VARCHAR2(200 BYTE), 
	"COUNTY" VARCHAR2(100 BYTE), 
	"CITY" VARCHAR2(100 BYTE), 
	"STATE" VARCHAR2(2 BYTE), 
	"COUNTRY" VARCHAR2(3 BYTE), 
	"ZIP" VARCHAR2(15 BYTE), 
	"OTHER_CITY" VARCHAR2(100 BYTE)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"   NO INMEMORY ;
--------------------------------------------------------
--  DDL for Index LOCATION_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."LOCATION_PK" ON "SYSTEM"."LOCATION" ("EVENT_ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table LOCATION
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."LOCATION" MODIFY ("EVENT_ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."LOCATION" MODIFY ("ADDRESS_LINE1" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."LOCATION" MODIFY ("COUNTY" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."LOCATION" MODIFY ("STATE" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."LOCATION" MODIFY ("COUNTRY" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."LOCATION" MODIFY ("ZIP" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."LOCATION" ADD CONSTRAINT "LOCATION_PK" PRIMARY KEY ("EVENT_ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;
  ALTER TABLE "SYSTEM"."LOCATION" ADD CONSTRAINT "LOCATION_CHK1" CHECK (1 =
CASE 
	WHEN (city = 'Other') AND other_city is NULL
		THEN 0
	ELSE 1
END) ENABLE;
  ALTER TABLE "SYSTEM"."LOCATION" MODIFY ("CITY" NOT NULL ENABLE);
