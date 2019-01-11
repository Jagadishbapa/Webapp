import { Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {
    Router
} from '@angular/router';
import {Observable, of } from 'rxjs'
import {EngEvent} from './engevent.model'
import {RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable()
export class AdminLoginService {
    userloggedin:boolean = false;
    userid:string = null;
    params:any;
    constructor(private http: HttpClient, private route: Router){
    }

    public isLoggedIn(id:string, password:string) 
    {
        console.log("admin userid"+id);
        this.params = new HttpParams().set('userid', id).set('password', password);
        console.log('admin');
        return this.http.get('/events/adminlogin', {params : this.params } );
 
    }

    public logout()
    {
        window.sessionStorage.removeItem('admin_key');
        this.route.navigateByUrl('uw-engagement/adminlogin') 
    }
}