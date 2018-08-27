--------------------------------------------------------
--  File created - Monday-August-27-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table CO_SPONSORS
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."CO_SPONSORS" 
   (	"EVENT_ID" NUMBER, 
	"CO_SPONSOR_NAME" VARCHAR2(100 BYTE), 
	"CO_SPONSOR_EMAIL" VARCHAR2(100 BYTE), 
	"CO_SPONSOR_PHONE_NUMBER" NUMBER, 
	"CO_SPONSOR_WEBSITE" VARCHAR2(100 BYTE)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table CO_SPONSORS
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."CO_SPONSORS" MODIFY ("EVENT_ID" NOT NULL ENABLE);
