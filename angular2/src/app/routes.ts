import {Routes } from '@angular/router'
import {IfRameComponent} from './events/audience/i-frame/i-frame.component'
import { EngEventsResolver } from './events/services/eng-events-resolver-service';

export const appRoutes:Routes = [
    {path: 'uw-engagement', component: IfRameComponent, resolve: {events:EngEventsResolver} },
    {path: '', redirectTo: '/uw-engagement', pathMatch: 'full'}
]