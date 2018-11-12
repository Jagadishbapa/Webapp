import { Component } from '@angular/core';

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

