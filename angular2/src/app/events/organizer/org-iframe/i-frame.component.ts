import { Component, OnInit, Input, ChangeDetectorRef} from '@angular/core'
import {EngagementService} from '../../services/engagement.service'
import {EngEventsResolver} from '../../services/eng-events-resolver-service'
import {ActivatedRoute} from '@angular/router'

@Component({
    selector : 'orgiframe',
    templateUrl: './i-frame.component.html'
})

export class OrgIfRameComponent{
    event : any;
    private levent : boolean= false;
    private p: number = 0;
    private cpage;
    private events: any;
    private pages: number;
    private formfilter: any;
    private keyword: any;
    private created_by: string;
    eventlist: any
    errormsg:any
    private eventscase: String = "default";
    constructor(private engService: EngagementService, private engService1: EngEventsResolver, private route: ActivatedRoute, private cdRef:ChangeDetectorRef){
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
        this.created_by=sessionStorage.getItem('org_key');
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
            
        this.engService.getOrgEvents(this.p, this.eventscase, this.formfilter).subscribe(eventss => {
            this.events = eventss['content'];
            this.pages = eventss['totalElements'];        
        });
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
            this.engService.getOrgEvents(this.p, this.eventscase, this.formfilter).subscribe(eventss => {
                this.events = eventss['content'];
                this.pages = eventss['totalElements'];
            });
        }

        else if(this.eventscase==="keysearch")
        {
            this.engService.getOrgEvents(this.p, this.eventscase, this.keyword).subscribe(eventss => {
                this.events = eventss['content'];
                this.pages = eventss['totalElements'];
            });
        }
    } 

    loadevent(event:any)
    {
        this.event=event;
        this.levent=true;
        this.cdRef.detectChanges();
  
    }

    cancelevent(event: any){
        event.cancelled='YES';
        event.created_by=sessionStorage.getItem('org_key');
        this.engService.saveEvent(event)
        .subscribe(
            (eventss)=>{
                for(var i=0;i<this.events.length;i++)
                {
                    if(this.events[i].event_id === event.event_id)
                        {
                            this.events[i].cancelled='YES';
                            break;
                        }
                }
                this.levent=false;
                this.cdRef.detectChanges();
             },
            (err)=>{console.log('cancel event org error')});
    }

    uncancelevent(event: any){
        event.cancelled='NO';
        event.created_by=sessionStorage.getItem('org_key');
        this.engService.saveEvent(event)
        .subscribe(
            (eventss)=>{
                for(var i=0;i<this.events.length;i++)
                {
                    if(this.events[i].event_id === event.event_id)
                        {
                            this.events[i].cancelled='NO';
                            break;
                        }
                }
                this.levent=false;
                this.cdRef.detectChanges();
             },
            (err)=>{console.log('uncancel event org error')});
    }
}  