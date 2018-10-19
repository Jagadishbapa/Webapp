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
    constructor(private route: Router, private orglogin: OrgLoginService)
    {

    }

    loginorg(userid,password)
    {
        console.log(userid+password);
        this.orglogin.isLoggedIn(userid,password).subscribe(res=>{
            this.navdec(res, userid);
        });
    }

    navdec(res:any, id: string)
    {
        if(res==true)
        { 
            this.orglogin.userid = id;
            this.orglogin.userloggedin=true;   
            this.route.navigateByUrl('uw-engagement/organizer');
        }
    }

}