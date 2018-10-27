import { Component, OnInit, Input } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {  FormArray,  FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import {EngEvent} from '../../services/engevent.model'
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { NG_MODEL_WITH_FORM_CONTROL_WARNING } from '@angular/forms/src/directives';
import {EngagementService} from '../../services/engagement.service';
import {DatePipe,formatDate} from '@angular/common';



@Component({
    selector: 'eventsubmitcomponent',
    templateUrl: './eventsubmit.component.html',
    styleUrls : []
})

export class EventSubmitComponent{
    @Input() event:any;
    constructor() { }

    ngOnInit() {
    }


}