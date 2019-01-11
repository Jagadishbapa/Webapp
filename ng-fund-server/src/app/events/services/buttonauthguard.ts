import {Injectable} from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';

@Injectable()

export class ButtonLoginAuthguard implements CanActivate {
    constructor(private router: Router){
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(sessionStorage.getItem('admin_key')){
        this.router.navigate(['uw-engagement/admin']);
        return false;
      }
      else if(sessionStorage.getItem('org_key')){
        this.router.navigate(['uw-engagement/organizer']);
        return false;
      }
      else{
        return true;
      }
    }
}
