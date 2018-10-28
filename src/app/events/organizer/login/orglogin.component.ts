import { Component} from '@angular/core'
import {OrgLoginService} from '../../services/orgloginservice'
import { Router} from '@angular/router';
import {EngEventsResolver} from '../../services/eng-events-resolver-service'

@Component({
    selector: 'organizer',
    templateUrl: './orglogin.component.html',
    //styleUrls: ['./navbar.component.css']
})

export class OrgloginComponent{
    loginval:any;
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
            this.error=false;
            this.orglogin.userid = id;
            this.orglogin.userloggedin=true;   
            this.route.navigate(['uw-engagement/organizer',  { loginid: this.orglogin.userid}]);
        }
        else
        {
            this.error = true;
        }
    }

}