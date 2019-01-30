import { Component, Input, ChangeDetectorRef} from '@angular/core'
import {OrgLoginService} from '../../services/orgloginservice'
import {Router} from '@angular/router'

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

    constructor(private orglogservice: OrgLoginService, private route: Router, private cdRef:ChangeDetectorRef)
    {
    }

    logout()
    {
        this.orglogservice.logout();   
    }

    opencreateform(){
        this.register=true;
        this.loadevents=false;
        this.loadsubmit=false;
        this.loadregister = false;
        this.cdRef.detectChanges();
        this.loadregister = true;
        this.cdRef.detectChanges();
    }

    home(){
        this.loadevents = false;
        this.loadregister=false;
        this.loadsubmit=false;
        this.register=false;
        this.cdRef.detectChanges();
        this.loadevents = true;
        this.cdRef.detectChanges(); 
    }

}