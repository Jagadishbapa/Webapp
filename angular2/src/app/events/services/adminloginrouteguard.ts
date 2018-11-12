import {Injectable} from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';

@Injectable()
export class AdminLoginAuthguard implements CanActivate {

    constructor(private router: Router){
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(sessionStorage.getItem('admin_key')){
        return true;
      }
      else if(sessionStorage.getItem('org_key')){
        this.router.navigate(['uw-engagement/organizer']);
        return false;
      }
      else{
        this.router.navigate(['uw-engagement/adminlogin']);
        return false;
      }
    }
}
