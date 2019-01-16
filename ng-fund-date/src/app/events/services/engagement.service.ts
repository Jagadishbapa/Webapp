import { Injectable} from '@angular/core'
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import {EngEvent} from './engevent.model'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable()
export class EngagementService {
    events : EngEvent[]
    private l: number = 25;
    params:any;
    constructor(private http: HttpClient){
    }
    getAudienceEvents(page: number, filterquery: any, formfilter:any)
    {
        if(filterquery==='filter')
        {
            this.params = new HttpParams().set('filterquery', filterquery).set('datefrom', formfilter.datefrom).
            set('dateto', formfilter.dateto).set('county', formfilter.county).set('city', formfilter.city).
            set('organization', formfilter.organization).set('department', formfilter.department).
            set('eventtype', formfilter.eventtype).set('keyword',"").set('page', String(page)); 
        }
        else if(filterquery==='default')
        {
            this.params = new HttpParams().set('filterquery', filterquery).set('datefrom', '').
            set('dateto', '').set('county', '').set('city', '').
            set('organization', '').set('department', '').
            set('eventtype', '').set('keyword','').set('page', String(page)); 
        }

        else if(filterquery==='keysearch')
        {
            this.params = new HttpParams().set('filterquery', filterquery).set('datefrom', '').
            set('dateto', '').set('county', '').set('city', '').
            set('organization', '').set('department', '').
            set('eventtype', '').set('keyword',formfilter).set('page', String(page)); 
        }
        return this.http.get('/engagement-webapp/events/listfilter', {params: this.params});
    }

    getOrgEvents(page: number, filterquery: any, formfilter:any)
    {
        if(filterquery==='filter')
        {
            this.params = new HttpParams().set('filterquery', filterquery).set('datefrom', formfilter.datefrom).
            set('dateto', formfilter.dateto).set('county', formfilter.county).set('city', formfilter.city).
            set('organization', formfilter.organization).set('department', formfilter.department).
            set('eventtype', formfilter.eventtype).set('keyword',"").set('page', String(page)); 
        }
        else if(filterquery==='default')
        {
            this.params = new HttpParams().set('filterquery', filterquery).set('datefrom', '').
            set('dateto', '').set('county', '').set('city', '').
            set('organization', '').set('department', '').
            set('eventtype', '').set('keyword','').set('page', String(page)); 
        }

        else if(filterquery==='keysearch')
        {
            this.params = new HttpParams().set('filterquery', filterquery).set('datefrom', '').
            set('dateto', '').set('county', '').set('city', '').
            set('organization', '').set('department', '').
            set('eventtype', '').set('keyword',formfilter).set('page', String(page)); 
        }
        return this.http.get('/engagement-webapp/events/listorgfilter', {params: this.params});
    }


    saveEvent(model:any)
    {

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
            })
          };
          
       return this.http.post<EngEvent>('/engagement-webapp/events/save', JSON.stringify(model), httpOptions);
    }
    
}