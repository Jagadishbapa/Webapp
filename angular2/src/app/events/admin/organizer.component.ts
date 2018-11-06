import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'admin',
  template:   `
        <admin-nav-bar [userid] =  "userid1"> </admin-nav-bar>
    `
})
export class AdminComponent {
  title = 'Admin';
  params:any;
  userid1:string;

  constructor(
    //private segment: UrlSegment,
    private route: ActivatedRoute)
    {
      this.userid1=this.route.snapshot.params['loginid'];
      console.log("admin-nav-bar"+this.userid1);
    }
    //private router: Router) {}

  ngOnInit() {

    
  }
}

