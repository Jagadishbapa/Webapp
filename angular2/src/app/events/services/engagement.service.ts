import { Injectable} from '@angular/core'
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
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
    params:any;
    constructor(private http: HttpClient){
    }
    /*
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
*/
    getAudienceEvents(page: number, filterquery: any, formfilter:any)
    {
        if(filterquery==='filter')
        {
            console.log(formfilter.datefrom);
            this.params = new HttpParams().set('filterquery', filterquery).set('datefrom', formfilter.datefrom).
            set('dateto', formfilter.dateto).set('county', formfilter.county).set('city', formfilter.city).
            set('organization', formfilter.organization).set('department', formfilter.department).
            set('eventtype', formfilter.eventtype).set('keyword',"").set('page', String(page)); 
        }
        else if(filterquery==='default')
        {
            console.log('default req');
            this.params = new HttpParams().set('filterquery', filterquery).set('datefrom', '').
            set('dateto', '').set('county', '').set('city', '').
            set('organization', '').set('department', '').
            set('eventtype', '').set('keyword','').set('page', String(page)); 
        }

        else if(filterquery==='keysearch')
        {
            console.log('keyword req');
            this.params = new HttpParams().set('filterquery', filterquery).set('datefrom', '').
            set('dateto', '').set('county', '').set('city', '').
            set('organization', '').set('department', '').
            set('eventtype', '').set('keyword',formfilter).set('page', String(page)); 
        }
        //params.set('p1', String(p1))
        return this.http.get('/engagement-webapp/events/listfilter', {params: this.params});
    }


    saveEvent(model:any)
    {

        const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type':  'application/json'
              //'Authorization': 'my-auth-token'
            })
          };
          /*
          //delete model['speakers']

          var j=0;
          for(var i =0;i<model['speakers'].length ;i++)
          {
              if(model['speakers'][i]['first_name']==='' && model['speakers'][i]['last_name']==='' && model['speakers'][i]['middle_name']==='' && model['speakers'][i]['email']==='')
              {
                  model['speakers'].splice(i,1);
                  i=i-1;
              }
              else
                  j=1;
          }

          if(j===0)
          {
            delete model['speakers'];
          }


          var k=0;
          for(var i =0;i<model['co_sponsors'].length ;i++)
          {

              if(model['co_sponsors'][i]['co_sponsor_name']==='' && model['co_sponsors'][i]['co_sponsor_email']==='' && model['co_sponsors'][i]['co_sponsor_phone_number']===null && model['co_sponsors'][i]['co_sponsor_website']==='')
              {
                  model['co_sponsors'].splice(i,1);
                  i=i-1;
              }
              else
                  k=1;
          }

          if(k===0)
          {
            delete model['co_sponsors'];
          }*/
       return this.http.post<EngEvent>('/engagement-webapp/events/save', JSON.stringify(model), httpOptions);
       /*.subscribe(
           eventss=>{ console.log(eventss);
            return eventss}
       );*/
    }
}