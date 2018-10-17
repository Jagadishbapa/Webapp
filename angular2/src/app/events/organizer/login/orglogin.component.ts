import { Component} from '@angular/core'
import {OrgLoginService} from '../../services/orgloginservice'
import {EngEventsResolver} from '../../services/eng-events-resolver-service'

@Component({
    selector: 'organizer',
    templateUrl: './orglogin.component.html',
    //styleUrls: ['./navbar.component.css']
})

export class OrgloginComponent{

    constructor(private orglogin: OrgLoginService)
    {

    }

    loginorg(userid,password)
    {
        console.log(userid+password);

        if(this.orglogin.isLoggedIn(userid,password))
            console.log("login"+"true");
    }

}