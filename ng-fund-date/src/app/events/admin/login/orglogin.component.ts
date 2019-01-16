import { Component} from '@angular/core'
import {AdminLoginService} from '../../services/adminloginservice'
import { Router} from '@angular/router';

@Component({
    selector: 'adminlogin',
    templateUrl: './orglogin.component.html',
})

export class AdminloginComponent{
    userid:string;
    error:boolean = false;
    constructor(private route: Router, private orglogin: AdminLoginService){
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
            window.sessionStorage.setItem('admin_key', this.userid);
            this.route.navigate(['uw-engagement/admin']);
        }
        else
        {
            this.error = true;
        }
    }

}