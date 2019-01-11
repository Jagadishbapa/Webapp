import {Routes } from '@angular/router'
import { EngEventsResolver } from './events/services/eng-events-resolver-service';
import {OrgloginComponent} from './events/organizer/login/orglogin.component'
import {OrganizerComponent} from './events/organizer/organizer.component'
import {AdminLoginAuthguard} from './events/services/adminloginrouteguard';
import {OrgLoginAuthguard} from './events/services/orgloginrouteguard';
import {ButtonLoginAuthguard} from './events/services/buttonauthguard';
import {EngAudAppComponent} from './engappaudcomponent'
import {OrgCreateEvent} from './events/organizer/createevent/createevent.component'
import {AdminloginComponent} from './events/admin/login/orglogin.component'
import {AdminComponent} from './events/admin/organizer.component'

export const appRoutes:Routes = [
    {path: 'uw-engagement', component: EngAudAppComponent, resolve: {events:EngEventsResolver} },
    {path: 'uw-engagement/organizerlogin', component: OrgloginComponent, canActivate: [ButtonLoginAuthguard]},
    {path: 'uw-engagement/adminlogin', component: AdminloginComponent, canActivate: [ButtonLoginAuthguard]},
    {path: 'uw-engagement/organizer', component: OrganizerComponent, canActivate: [OrgLoginAuthguard]},
    {path: 'uw-engagement/organizer/createevent', component: OrgCreateEvent},
    {path: '', redirectTo: '/uw-engagement', pathMatch: 'full'},
    {path: 'uw-engagement/admin', component: AdminComponent, canActivate: [AdminLoginAuthguard]}
]