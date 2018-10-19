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

    public isOrgLoggedin: boolean;
    public redirectUrl: string;

    constructor(private router: Router, private authService: OrgLoginService){

    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if (this.authService.userloggedin) {
            return true;
          } else {
            this.router.navigate(['/login'], {
              queryParams: {
                return: state.url
              }
            });
            return false;
          }
        }
}
