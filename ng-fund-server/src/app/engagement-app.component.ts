import { Component } from '@angular/core';

@Component({
  selector: 'engagement-app',
  template:   `
  <router-outlet></router-outlet>
    `
})
export class EngagementAppComponent {
  title = 'UW-Engagement';
}
