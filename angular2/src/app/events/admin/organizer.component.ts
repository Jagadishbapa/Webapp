import { Component } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'admin',
  template:   `
        <admin-nav-bar> </admin-nav-bar>
    `
})
export class AdminComponent {
  title = 'Admin';
  constructor(private route: ActivatedRoute){
    }

    ngOnInit() {
    }
}

