import { Component, OnInit} from '@angular/core'
import {EngagementService} from '../../../services/engagement.service'
import {EngEventsResolver} from '../../../services/eng-events-resolver-service'
import {ActivatedRoute} from '@angular/router'
import {EngEvent} from '../../../services/engevent.model'
import { map } from 'rxjs/operators';
import {Observable, of } from 'rxjs'
import { Response } from "@angular/http"
import {HttpClient,HttpParams} from '@angular/common/http'
import { Http } from '@angular/http';

@Component({
    templateUrl: './i-frame.component.html'
})

export class IfRameComponent implements OnInit{
    private p: number = 0;
    private cpage;
    private events: EngEvent[];
    private pages: number;
    private formfilter: any;
    private keyword: any;
    eventlist: any
    errormsg:any
    private eventscase: String = "default";;
    constructor(private engService: EngagementService, private engService1: EngEventsResolver, private route: ActivatedRoute){

    }

    setPage(event:any)
    {
        console.log("set page");
        //event.preventDefault();
        console.log(event);
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
            
        this.engService.getAudienceEvents(this.p, this.eventscase, this.formfilter).subscribe(eventss => {
            console.log(eventss);
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
            console.log(this.formfilter)
            this.engService.getAudienceEvents(this.p, this.eventscase, this.formfilter).subscribe(eventss => {
                console.log(eventss['content']);
                this.events = eventss['content'];
                this.pages = eventss['totalElements'];
            });
        }

        else if(this.eventscase==="keysearch")
        {
            console.log(this.eventscase);
            console.log(this.keyword);
            this.engService.getAudienceEvents(this.p, this.eventscase, this.keyword).subscribe(eventss => {
                console.log(eventss['content']);
                this.events = eventss['content'];
                this.pages = eventss['totalElements'];
            });
        }
    } 
}  