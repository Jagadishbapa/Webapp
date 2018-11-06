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
import {EngAudAppComponent} from './engappaudcomponent'
import {OrgLoginAuthguard} from './events/services/orgloginrouteguard'
import {OrgNavBarComponent} from './events/organizer/nav/orgnavbar.component'

import { appRoutes} from './routes';
import { EngagementService} from './events/services/engagement.service'
import {EngEventsResolver} from './events/services/eng-events-resolver-service'
import {OrgLoginService} from './events/services/orgloginservice'
import { FormsModule }   from '@angular/forms';
import {OrgCreateEvent} from './events/organizer/createevent/createevent.component'
import { ReactiveFormsModule } from '@angular/forms'
import { NgForm } from '@angular/forms'
import {EngEvent} from './events/services/engevent.model'
import {EventSubmitComponent} from './events/organizer/eventsubmit/eventsubmit.component'
import {OrgIfRameComponent} from './events/organizer/org-iframe/i-frame.component'
import{UpdateEventComponent} from './events/organizer/updateevent/updateevent.component'

import {AdminComponent} from './events/admin/organizer.component'
import {AdminCreateEvent} from './events/admin/createevent/createevent.component'
import {AdminSubmitComponent} from './events/admin/eventsubmit/eventsubmit.component'
import {AdminloginComponent} from './events/admin/login/orglogin.component'
import {AdminNavBarComponent} from './events/admin/nav/orgnavbar.component'
import {AdminIfRameComponent} from './events/admin/org-iframe/i-frame.component'
import {AdminUpdateEventComponent} from './events/admin/updateevent/updateevent.component'
import {AdminLoginService} from './events/services/adminloginservice'
@NgModule({
  declarations: [
    EngagementAppComponent,
    NavBarComponent,
    IfRameComponent,
    OrgloginComponent,
    OrganizerComponent,
    EngAudAppComponent,
    OrgNavBarComponent,
    OrgCreateEvent,
    EventSubmitComponent,
    OrgIfRameComponent,
    UpdateEventComponent,
    AdminUpdateEventComponent,
    AdminIfRameComponent,
    AdminNavBarComponent,
    AdminloginComponent,
    AdminSubmitComponent,
    AdminCreateEvent,
    AdminComponent
    

  ],
  providers: [EngagementService,EngEventsResolver, OrgLoginService, AdminLoginService, OrgLoginAuthguard, NgForm, EngEvent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [EngagementAppComponent]
})
export class AppModule { }
