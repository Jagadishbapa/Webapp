import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'adminsubmitcomponent',
    templateUrl: './eventsubmit.component.html',
    styleUrls : []
})

export class AdminSubmitComponent{
    @Input() event:any;
    constructor() { }
    ngOnInit() {
    }


}