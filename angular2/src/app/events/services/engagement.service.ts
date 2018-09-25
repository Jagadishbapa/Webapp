import { Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable, of } from 'rxjs'
import {EngEvent} from './engevent.model'
import {RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable()
export class EngagementService {
    events : EngEvent[]
    private l: number = 25;
    constructor(private http: HttpClient){
    }
    getEvents(p: number)
    {
        console.log('getEvents');
        return this.http.get('/engagement-webapp/events/list?p='+p);
    } 

    getEventsByFilter(page: number, formfilter:any)
    {
        console.log('getEventsByFilter');
        const params = new HttpParams().set('filterquery', 'filter').set('datefrom', formfilter.datefrom).
        set('dateto', formfilter.dateto).set('county', formfilter.county).set('city', formfilter.city).
        set('organization', formfilter.organization).set('department', formfilter.department).
        set('eventtype', formfilter.eventtype).set('keyword',"").set('page', String(page));
        //params.set('p1', String(p1))
        return this.http.get('/engagement-webapp/events/listfilter', {params: params});
    }
    
    getEventsByKeyword(p: number)
    {
        console.log("keyword");
        return this.http.get('/engagement-webapp/events/listkeysearch?p='+p);
    } 

    getAudienceEvents(page: number, filterquery: any, formfilter:any)
    {
        if(filterquery==='filter')
        {
            console.log(formfilter.datefrom);
            const params = new HttpParams().set('filterquery', filterquery).set('datefrom', formfilter.datefrom).
            set('dateto', formfilter.dateto).set('county', formfilter.county).set('city', formfilter.city).
            set('organization', formfilter.organization).set('department', formfilter.department).
            set('eventtype', formfilter.eventtype).set('keyword',"").set('page', String(page)); 
        }
        else if(filterquery==='default')
        {
            console.log('default req');
            const params = new HttpParams().set('filterquery', filterquery).set('datefrom', '').
            set('dateto', '').set('county', '').set('city', '').
            set('organization', '').set('department', '').
            set('eventtype', '').set('keyword','').set('page', String(page)); 
        }

        else if(filterquery==='keysearch')
        {
            console.log('keyword req');
            const params = new HttpParams().set('filterquery', filterquery).set('datefrom', '').
            set('dateto', '').set('county', '').set('city', '').
            set('organization', '').set('department', '').
            set('eventtype', '').set('keyword',formfilter).set('page', String(page)); 
        }
        //params.set('p1', String(p1))
        return this.http.get('/engagement-webapp/events/listfilter', {params: params});
    }
}