import {OrgLoginService} from './orgloginservice'

import {Injectable} from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';

import {Http,Headers, Response, RequestOptions} from '@angular/http';
import {Observable, Observer, Subject} from 'rxjs/Rx';
@Injectable()

export class OrgLoginAuthguard implements CanActivate {

    public isOrgLoggedin: boolean = false;
    public redirectUrl: string;

    constructor(private router: Router, private authService: OrgLoginService){

    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        this.redirectUrl=state.url;
        return this.checkOrgLogin(this.redirectUrl);
    }

    checkOrgLogin(url: string): boolean{
        if(this.isOrgLoggedin){
            return true;
        }else{
            //this.authService.isLoggedIn().subscribe(res=>{
                //console.log("fjgbkg");
            //}

            //)
        }   
        return true;
    }
}
