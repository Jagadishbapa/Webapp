import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core'
import {EngagementService} from '../../services/engagement.service'
import {EngEventsResolver} from '../../services/eng-events-resolver-service'
import {ActivatedRoute} from '@angular/router'
import {EngEvent} from '../../services/engevent.model'
import { map } from 'rxjs/operators';
import {Observable, of } from 'rxjs'
import { Response } from "@angular/http"
import {HttpClient,HttpParams} from '@angular/common/http'
import { Http } from '@angular/http';

@Component({
    selector : 'orgiframe',
    templateUrl: './i-frame.component.html'
})

export class OrgIfRameComponent{

    @Input() userid : string;
    event : any;
    private levent : boolean= false;
    private p: number = 0;
    private cpage;
    private events: any;
    private pages: number;
    private formfilter: any;
    private keyword: any;
    eventlist: any
    errormsg:any
    private eventscase: String = "default";;
    constructor(private engService: EngagementService, private engService1: EngEventsResolver, private route: ActivatedRoute, private cdRef:ChangeDetectorRef){

    }

    setPage(event:any)
    {
        //console.log("set page");
        //event.preventDefault();
        //console.log(event);
        this.cpage=event;
        this.p=event-1;
        this.getEventsList();
    }
    ngOnInit()
    {
        this.getEventsList();
        this.eventscase = "default";
    }

    applyFilter(formfilter: any)
    {
        this.formfilter=formfilter; 
        this.eventscase= "filter";
        this.p=0;
        this.cpage=1;
        this.getEventsList();
    }

    searckKeyword(event:any)
    {
        console.log(event);
        this.keyword=event;
        this.eventscase= "keysearch";
        this.p=0;
        this.cpage=1;
        this.getEventsList();
    }

    getEventsList(){
        if(this.eventscase==="default")
        {
            
        this.engService.getOrgEvents(this.p, this.eventscase, this.formfilter).subscribe(eventss => {
            //console.log(eventss);
            this.events = eventss['content'];
            this.pages = eventss['totalElements'];

            /*
            for(var i=0; i<this.events.length;i++)
            {
                if(this.events[i].building_room === null)
                    this.events[i].building_room="";
                else
                    this.events[i].building_room=this.events[i].building_room+",";

                if(this.events[i].address_line2 === null)
                    this.events[i].address_line2="";
                else
                    this.events[i].address_line2=this.events[i].address_line2+","; 
                    
                if(this.events[i].city === null)
                    this.events[i].city="";
                else
                    this.events[i].city=this.events[i].city+",";  
                    
                if(this.events[i].other_city === null)
                    this.events[i].other_city="";
                else
                    this.events[i].other_city=this.events[i].other_city+",";   

               /* if(this.events[i].phone_number === null || this.events[i].phone_number === "")
                    this.events[i].phone_number="";
                else
                    this.events[i].phone_number=","+this.events[i].phone_number;    

            }*/
        
        });
        }
        else if(this.eventscase==="filter")
        {
            console.log("datefrom"+this.formfilter.datefrom);
            if(this.formfilter.datefrom==='')
            {
                this.formfilter.datefrom = undefined;  
            }
            if(this.formfilter.dateto==='')
            {
                this.formfilter.dateto = undefined;  
            }
            if(this.formfilter.county==='')
            {
                this.formfilter.county = '%';  
            }
            if(this.formfilter.city==='')
            {
                this.formfilter.city = '%';  
            }
            if(this.formfilter.organization==='')
            {
                this.formfilter.organization = '%';  
            }
            if(this.formfilter.department==='')
            {
                this.formfilter.department = '%';  
            }
            if(this.formfilter.eventtype==='')
            {
                this.formfilter.eventtype = '%';  
            }
            console.log(this.formfilter)
            this.engService.getOrgEvents(this.p, this.eventscase, this.formfilter).subscribe(eventss => {
                console.log(eventss['content']);
                this.events = eventss['content'];
                this.pages = eventss['totalElements'];
                /*
                for(var i=0; i<this.events.length;i++)
                {
                    if(this.events[i].building_room === null)
                        this.events[i].building_room="";
                    else
                        this.events[i].building_room=this.events[i].building_room+",";
    
                    if(this.events[i].address_line2 === null)
                        this.events[i].address_line2="";
                    else
                        this.events[i].address_line2=this.events[i].address_line2+","; 
                        
                    if(this.events[i].city === null)
                        this.events[i].city="";
                    else
                        this.events[i].city=this.events[i].city+",";  
                        
                    if(this.events[i].other_city === null)
                        this.events[i].other_city="";
                    else
                        this.events[i].other_city=this.events[i].other_city+",";   
    
                   /* if(this.events[i].phone_number === null || this.events[i].phone_number === "")
                        this.events[i].phone_number="";
                    else
                        this.events[i].phone_number=","+this.events[i].phone_number;      
    
                }*/
            });
        }

        else if(this.eventscase==="keysearch")
        {
            //console.log(this.eventscase);
            //console.log(this.keyword);
            this.engService.getOrgEvents(this.p, this.eventscase, this.keyword).subscribe(eventss => {
                //console.log(eventss['content']);
                this.events = eventss['content'];
                this.pages = eventss['totalElements'];
                /*
                for(var i=0; i<this.events.length;i++)
                {
                    if(this.events[i].building_room === null)
                        this.events[i].building_room="";
                    else
                        this.events[i].building_room=this.events[i].building_room+",";
    
                    if(this.events[i].address_line2 === null)
                        this.events[i].address_line2="";
                    else
                        this.events[i].address_line2=this.events[i].address_line2+","; 
                        
                    if(this.events[i].city === null)
                        this.events[i].city="";
                    else
                        this.events[i].city=this.events[i].city+",";  
                        
                    if(this.events[i].other_city === null)
                        this.events[i].other_city="";
                    else
                        this.events[i].other_city=this.events[i].other_city+",";   
    
                   /* if(this.events[i].phone_number === null || this.events[i].phone_number === "")
                        this.events[i].phone_number="";
                    else
                        this.events[i].phone_number=","+this.events[i].phone_number;       
    
                }*/
            });
        }



            /*if(this.events[i].address_line2 === null)
                this.events[i].address_line2="";
            else
                this.events[i].address_line2=this.events[i].address_line2+",";

                if(this.events[i].address_line2 === null)
                this.events[i].address_line2="";
            else
                this.events[i].address_line2=this.events[i].address_line2+",";*/

    } 

    loadevent(event:any)
    {
        console.log(event);
        this.event=event;
        this.levent=false;
        this.cdRef.detectChanges();
        this.levent=true;
    }

    cancelevent(event: any){
        //console.log("call cancelled");

        event.cancelled='YES';
        this.levent=false;
        this.cdRef.detectChanges();
        this.levent=false;

        this.engService.cancelevent(event)
        .subscribe(
            eventss=>{
             });

        for(var i=0;i<this.events.length;i++)
        {
            if(this.events[i].event_id === event.event_id)
                {
                    this.events[i].cancelled='YES';
                    break;
                }
        }
    }
}  