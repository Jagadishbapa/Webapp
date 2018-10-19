import { Component } from '@angular/core';

@Component({
  selector: 'organizer',
  template:   `
        <org-nav-bar></org-nav-bar>
        <router-outlet></router-outlet>
    `
})
export class OrganizerComponent {
  title = 'Organizer';
}

