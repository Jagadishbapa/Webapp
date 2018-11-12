import { Component, OnInit, Input } from '@angular/core';

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