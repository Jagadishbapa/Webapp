import { Component, OnInit} from '@angular/core'
import {EngagementService} from '../../services/engagement.service'
import {EngEventsResolver} from '../../services/eng-events-resolver-service'
import {ActivatedRoute} from '@angular/router'
import {EngEvent} from '../../services/engevent.model'
import { map } from 'rxjs/operators';
import {Observable, of } from 'rxjs'
import { Response } from "@angular/http"
import {HttpClient,HttpParams} from '@angular/common/http'
import { Http } from '@angular/http';

@Component({
    selector: 'aud-filter',
    templateUrl: './aud-filter.component.html'
})

export class AudFilter{

}