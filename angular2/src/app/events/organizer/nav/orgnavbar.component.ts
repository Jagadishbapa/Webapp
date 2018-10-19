import { Component} from '@angular/core'
import {OrgLoginService} from '../../services/orgloginservice'
import {Router} from '@angular/router'

@Component({
    selector: 'org-nav-bar',
    templateUrl: './orgnavbar.component.html',
    styleUrls: ['./orgnavbar.component.css']
})

export class OrgNavBarComponent{

    constructor(private orglogservice: OrgLoginService, private route: Router)
    {

    }

    logout()
    {
        this.orglogservice.logout();   
    }

    opencreateform(){
        this.route.navigateByUrl('uw-engagement/organizer/createevent');
    }

}