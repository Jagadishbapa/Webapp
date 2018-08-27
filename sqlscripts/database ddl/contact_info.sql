--------------------------------------------------------
--  File created - Monday-August-27-2018   
--------------------------------------------------------
--------------------------------------------------------
--  DDL for Table CONTACT_INFO
--------------------------------------------------------

  CREATE TABLE "SYSTEM"."CONTACT_INFO" 
   (	"EVENT_ID" NUMBER, 
	"FIRST_NAME" VARCHAR2(100 BYTE), 
	"LAST_NAME" VARCHAR2(100 BYTE), 
	"SPONSORING_DEPARTMENT" VARCHAR2(100 BYTE), 
	"EMAIL_1" VARCHAR2(100 BYTE), 
	"EMAIL_2" VARCHAR2(100 BYTE), 
	"PHONE_NUMBER" NUMBER, 
	"WEBSITE" VARCHAR2(100 BYTE)
   ) PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  DDL for Index CONTACT_INFO_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYSTEM"."CONTACT_INFO_PK" ON "SYSTEM"."CONTACT_INFO" ("EVENT_ID") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM" ;
--------------------------------------------------------
--  Constraints for Table CONTACT_INFO
--------------------------------------------------------

  ALTER TABLE "SYSTEM"."CONTACT_INFO" MODIFY ("EVENT_ID" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."CONTACT_INFO" MODIFY ("SPONSORING_DEPARTMENT" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."CONTACT_INFO" MODIFY ("EMAIL_1" NOT NULL ENABLE);
  ALTER TABLE "SYSTEM"."CONTACT_INFO" ADD CONSTRAINT "CONTACT_INFO_PK" PRIMARY KEY ("EVENT_ID")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "SYSTEM"  ENABLE;