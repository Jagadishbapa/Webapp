import { Injectable} from '@angular/core'
import {HttpClient, HttpParams} from '@angular/common/http'
import {
    Router
} from '@angular/router';
import 'rxjs/add/operator/map'
import 'rxjs/Rx';
import 'rxjs/add/operator/map'


@Injectable()
export class OrgLoginService {
    userloggedin:boolean = false;
    userid:string = null;
    params:any;
    constructor(private http: HttpClient, private route: Router){
    }

    public isLoggedIn(id:string, password:string){
        this.params = new HttpParams().set('userid', id).set('password', password);
        return this.http.get('/engagement-webapp/events/organizerlogin', {params : this.params});
    }

    public logout(){
        window.sessionStorage.removeItem('org_key');
        this.route.navigateByUrl('uw-engagement/organizerlogin') 
    }
}