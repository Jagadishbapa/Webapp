import { Component} from '@angular/core'
import {OrgLoginService} from '../../services/orgloginservice'
import {Router} from '@angular/router'

@Component({
    selector: 'aud-nav-bar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavBarComponent{

constructor(private orglogservice: OrgLoginService, private route: Router)
{}

    logincheck()
    {
        /*
        console.log("called");
        console.log(this.orglogservice.userloggedin)
        if(this.orglogservice.userloggedin)
        {
            this.route.navigateByUrl('uw-engagement/organizer');
        }
        else{
            this.route.navigateByUrl('uw-engagement/organizerlogin');
            
        }*/
        this.route.navigateByUrl('uw-engagement/organizerlogin');
    }

}