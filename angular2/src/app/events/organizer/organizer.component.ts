import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'organizer',
  template:   `
        <org-nav-bar> </org-nav-bar>
    `
})
export class OrganizerComponent {
  title = 'Organizer';

  constructor(){
  }

    ngOnInit() { 
    }
}

