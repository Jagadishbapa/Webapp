--------------------------------------------------------
--  File created - Monday-August-27-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table SPEAKERS
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."SPEAKERS" 
   (	"EVENT_ID" NUMBER, 
	"FIRST_NAME" VARCHAR2(100 BYTE), 
	"MIDDLE_NAME" VARCHAR2(100 BYTE), 
	"LAST_NAME" VARCHAR2(100 BYTE), 
	"EMAIL" VARCHAR2(100 BYTE)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table SPEAKERS
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."SPEAKERS" MODIFY ("EVENT_ID" NOT NULL ENABLE);
