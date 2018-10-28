import { Component, Input, ChangeDetectorRef} from '@angular/core'
import {OrgLoginService} from '../../services/orgloginservice'
import {Router} from '@angular/router'
import {OrgIfRameComponent} from '../org-iframe/i-frame.component'
import {EventSubmitComponent} from '../eventsubmit/eventsubmit.component'
import {OrgCreateEvent} from '../createevent/createevent.component'

@Component({
    selector: 'org-nav-bar',
    templateUrl: './orgnavbar.component.html',
    styleUrls: ['./orgnavbar.component.css']
})

export class OrgNavBarComponent{
    loadevents = true;
    loadregister=false;
    loadsubmit=false;
    register=false;
    @Input() userid : string;

    constructor(private orglogservice: OrgLoginService, private route: Router, private cdRef:ChangeDetectorRef)
    {
    }

    logout()
    {
        this.orglogservice.logout();   
    }

    opencreateform(){
        console.log("gskdhbgksdg" + this.register);
        this.loadregister=false;
        this.cdRef.detectChanges();
        this.register=true;
        this.loadevents=false;
        this.loadsubmit=false;
        this.loadregister = true;
        //this.route.navigateByUrl('uw-engagement/organizer/createevent');
    }

    home(){
        this.loadevents=false;
        this.cdRef.detectChanges();
        this.loadevents = true;
        this.loadregister=false;
        this.loadsubmit=false;
        //this.route.navigateByUrl('uw-engagement/organizer/createevent');
    }

}