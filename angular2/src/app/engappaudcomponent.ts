import { Component } from '@angular/core';

@Component({
  selector: 'engagement-app',
  template:   `
  <aud-nav-bar></aud-nav-bar>
  <aud-iframe></aud-iframe>
    `
})
export class EngAudAppComponent {
  title = 'UW-Engagement';
}
