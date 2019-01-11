import {Injectable} from '@angular/core'
import { Resolve } from '@angular/router'
import { OrgLoginService } from './orgloginservice'

import { Response } from '@angular/http'

@Injectable()
export class OrgLoginResolver implements Resolve<any> {
res: Response
constructor(private orgLoginService: OrgLoginService ){}

resolve(){
    //return this.engService.getEvents()
    }

}