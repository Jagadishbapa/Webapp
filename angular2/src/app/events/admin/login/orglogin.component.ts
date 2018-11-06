import { Component} from '@angular/core'
import {AdminLoginService} from '../../services/adminloginservice'
import { Router} from '@angular/router';

@Component({
    selector: 'adminlogin',
    templateUrl: './orglogin.component.html',
    //styleUrls: ['./navbar.component.css']
})

export class AdminloginComponent{
    loginval:any;
    error:boolean = false;
    constructor(private route: Router, private orglogin: AdminLoginService)
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
            console.log("admin id"+ id);
            this.error=false;
            this.orglogin.userid = id;
            this.orglogin.userloggedin=true;   
            this.route.navigate(['uw-engagement/admin',  { loginid: this.orglogin.userid}]);
        }
        else
        {
            this.error = true;
        }
    }

}