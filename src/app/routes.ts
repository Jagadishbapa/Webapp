import {Routes } from '@angular/router'
import {IfRameComponent} from './events/audience/i-frame/i-frame.component'
import { EngEventsResolver } from './events/services/eng-events-resolver-service';
import {OrgloginComponent} from './events/organizer/login/orglogin.component'
import {OrganizerComponent} from './events/organizer/organizer.component'
import { OrgLoginAuthguard } from './events/services/orgloginrouteguard';
import {EngAudAppComponent} from './engappaudcomponent'
import {OrgCreateEvent} from './events/organizer/createevent/createevent.component'

export const appRoutes:Routes = [
    {path: 'uw-engagement', component: EngAudAppComponent, resolve: {events:EngEventsResolver} },
    {path: 'uw-engagement/organizerlogin', component: OrgloginComponent},
    {path: 'uw-engagement/organizer', component: OrganizerComponent, canActivate: [OrgLoginAuthguard]},
    {path: 'uw-engagement/organizer/createevent', component: OrgCreateEvent},
    {path: '', redirectTo: '/uw-engagement', pathMatch: 'full'}
]