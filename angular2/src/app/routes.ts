import {Routes } from '@angular/router'
import {IfRameComponent} from './events/audience/i-frame/i-frame.component'
import { EngEventsResolver } from './events/services/eng-events-resolver-service';
import {OrgloginComponent} from './events/organizer/login/orglogin.component'
import {OrganizerComponent} from './events/organizer/organizer.component'
import { OrgLoginResolver } from './events/services/org-login-resolver-service';

export const appRoutes:Routes = [
    {path: 'uw-engagement', component: IfRameComponent, resolve: {events:EngEventsResolver} },
    {path: 'uw-engagement/organizerlogin', component: OrgloginComponent},
    {path: 'uw-engagement/organizer', component: OrganizerComponent},
    {path: '', redirectTo: '/uw-engagement', pathMatch: 'full'}
]