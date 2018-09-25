import { Component } from '@angular/core';

@Component({
  selector: 'engagement-app',
  template:   `
  <aud-nav-bar></aud-nav-bar>
  <router-outlet></router-outlet>
    `
})
export class EngagementAppComponent {
  title = 'UW-Engagement';
}
