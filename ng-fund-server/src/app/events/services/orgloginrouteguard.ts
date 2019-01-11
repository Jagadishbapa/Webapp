import {Injectable} from '@angular/core';
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';

@Injectable()
export class OrgLoginAuthguard implements CanActivate {

    constructor(private router: Router){

    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(sessionStorage.getItem('org_key')){
        return true;
      }
      else if(sessionStorage.getItem('admin_key')){
        this.router.navigate(['uw-engagement/admin']);
        return false;
      }
      else{
        this.router.navigate(['uw-engagement/organizerlogin']);
        return false;
      }
    }
}
