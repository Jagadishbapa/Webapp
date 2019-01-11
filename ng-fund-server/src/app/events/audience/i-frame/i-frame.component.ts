import { Component, OnInit} from '@angular/core'
import {EngagementService} from '../../services/engagement.service'
import {EngEventsResolver} from '../../services/eng-events-resolver-service'
import {ActivatedRoute} from '@angular/router'

@Component({
    selector: 'aud-iframe',
    templateUrl: './i-frame.component.html'
})

export class IfRameComponent implements OnInit{
    private p: number = 0;
    cpage;
    events: any;
    pages: number;
    private formfilter: any;
    private keyword: any;
    eventlist: any
    errormsg:any
    private eventscase: String = "default";;
    constructor(private engService: EngagementService, private engService1: EngEventsResolver, private route: ActivatedRoute){
    }

    setPage(event:any)
    {
        this.cpage=event;
        this.p=event-1;
        this.getEventsList();
    }
    ngOnInit()
    {
        this.eventscase = "default";
        this.getEventsList();
        
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
        this.keyword=event;
        this.eventscase= "keysearch";
        this.p=0;
        this.cpage=1;
        this.getEventsList();
    }

    getEventsList(){
        if(this.eventscase==="default")
        {
            
        this.engService.getAudienceEvents(this.p, this.eventscase, this.formfilter).subscribe((eventss) => {
            this.events = eventss['content'];
            this.pages = eventss['totalElements'];

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
            }
        
        },
        (err)=>{console.log('audience iframe default error')});
        }
        else if(this.eventscase==="filter")
        {
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

            this.engService.getAudienceEvents(this.p, this.eventscase, this.formfilter).subscribe(eventss => {

                this.events = eventss['content'];
                this.pages = eventss['totalElements'];
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
        
                }
            },
            (err)=>{console.log('audience iframe filter error')});
        }

        else if(this.eventscase==="keysearch")
        {
            this.engService.getAudienceEvents(this.p, this.eventscase, this.keyword).subscribe(eventss => {
                this.events = eventss['content'];
                this.pages = eventss['totalElements'];
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
    
                }
            },
            (err)=>{console.log('audience iframe keysearch error')});
        }
    } 
}  