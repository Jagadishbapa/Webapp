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
        this.route.navigateByUrl('uw-engagement/organizerlogin');
    }

    admincheck()
    {
        this.route.navigateByUrl('uw-engagement/adminlogin');
    }



}