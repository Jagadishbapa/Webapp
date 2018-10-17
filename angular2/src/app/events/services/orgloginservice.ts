import { Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable, of } from 'rxjs'
import {EngEvent} from './engevent.model'
import {RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable()
export class OrgLoginService {
    userloggedin:any;
    constructor(private http: HttpClient){
    }

    public isLoggedIn(userid:string, password:string)
    {
        console.log(this.userloggedin);
        console.log("called");
        return this.http.get('/engagement-webapp/events/organizerlogin').subscribe(res=>{
            this.userloggedin = res;
            return this.userloggedin;
        });
    }
}