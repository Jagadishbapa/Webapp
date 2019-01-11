import { Component, ChangeDetectorRef} from '@angular/core'
import {AdminLoginService} from '../../services/adminloginservice'
import {Router} from '@angular/router'

@Component({
    selector: 'admin-nav-bar',
    templateUrl: './orgnavbar.component.html',
    styleUrls: ['./orgnavbar.component.css']
})

export class AdminNavBarComponent{
    loadevents = true;
    loadregister=false;
    loadsubmit=false;
    register=false;

    constructor(private adminlogservice: AdminLoginService, private route: Router, private cdRef:ChangeDetectorRef)
    {
    }

    logout()
    {
        this.adminlogservice.logout();   
    }

    opencreateform(){
        this.register=true;
        this.loadevents=false;
        this.loadsubmit=false;
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