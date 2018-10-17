import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from 'ngx-pagination';

import { EngagementAppComponent } from './engagement-app.component';

import { NavBarComponent } from './events/audience/nav/navbar.component';
import { IfRameComponent } from './events/audience/i-frame/i-frame.component';
import { OrgloginComponent } from './events/organizer/login/orglogin.component';
import { OrganizerComponent } from './events/organizer/organizer.component';

import { appRoutes} from './routes';
import { EngagementService} from './events/services/engagement.service'
import {EngEventsResolver} from './events/services/eng-events-resolver-service'
import {OrgLoginService} from './events/services/orgloginservice'
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    EngagementAppComponent,
    NavBarComponent,
    IfRameComponent,
    OrgloginComponent,
    OrganizerComponent
  ],
  providers: [EngagementService,EngEventsResolver, OrgLoginService],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    FormsModule 
  ],
  bootstrap: [EngagementAppComponent]
})
export class AppModule { }
