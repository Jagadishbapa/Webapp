import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

