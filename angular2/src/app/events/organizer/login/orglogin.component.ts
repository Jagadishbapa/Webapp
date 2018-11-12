import { Component} from '@angular/core'
import {OrgLoginService} from '../../services/orgloginservice'
import { Router} from '@angular/router';

@Component({
    selector: 'organizerlogin',
    templateUrl: './orglogin.component.html'
})

export class OrgloginComponent{
    userid:any;
    error:boolean = false;
    constructor(private route: Router, private orglogin: OrgLoginService)
    {

    }

    loginorg(userid,password)
    {
        this.orglogin.isLoggedIn(userid,password).subscribe(res=>{
            this.navdec(res, userid);
        });
    }

    navdec(res:any, id: string)
    {
        if(res==true)
        {
            this.userid=id;
            window.sessionStorage.setItem('org_key', this.userid);
            this.route.navigate(['uw-engagement/organizer']);
        }
        else
        {
            this.error = true;
        }
    }

}