import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'organizer',
  template:   `
        <org-nav-bar [userid] =  "userid1"> </org-nav-bar>
    `
})
export class OrganizerComponent {
  title = 'Organizer';
  params:any;
  userid1:string;

  constructor(
    //private segment: UrlSegment,
    private route: ActivatedRoute)
    {
      this.userid1=this.route.snapshot.params['loginid'];
    }
    //private router: Router) {}

  ngOnInit() {

    
  }
}

