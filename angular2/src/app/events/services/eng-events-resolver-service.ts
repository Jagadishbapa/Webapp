import {Injectable} from '@angular/core'
import { Resolve } from '@angular/router'
import { EngagementService } from './engagement.service'

import { Response } from '@angular/http'

@Injectable()
export class EngEventsResolver implements Resolve<any> {
res: Response
constructor(private engService: EngagementService ){}

resolve(){
    //return this.engService.getEvents()
    }

}