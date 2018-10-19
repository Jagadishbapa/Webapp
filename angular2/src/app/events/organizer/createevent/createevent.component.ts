import { Component} from '@angular/core'
import {EngEvent} from '../../services/engevent.model'
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'


@Component({
    selector: 'orgcreateeventform',
    templateUrl: './createevent.component.html'
})

export class OrgCreateEvent{
    eventForm :  FormGroup;


    ngOnInit(){
        this.eventForm = new FormGroup({
            org : new FormControl(),
            dept : new FormControl(),
            evename : new FormControl(),
            evedesc : new FormControl(),
            evetype : new FormControl(),
            priv : new FormControl(),
            fee : new FormControl(),
            evestdate : new FormControl(),
            evesttime : new FormControl(),
            eveenddate : new FormControl(),
            eveendtime : new FormControl(),
            file : new FormControl(),
            speakers : new FormGroup({
                firstname : new FormControl(),
                lastname : new FormControl(),
                middlename : new FormControl(),
                email : new FormControl()
            }),

            location : new FormGroup({
                builroom : new FormControl(),
                addrline1 : new FormControl(),
                addrline2 : new FormControl(),
                county : new FormControl(),
                city : new FormControl(),
                state : new FormControl(),
                country : new FormControl(),
                zip : new FormControl()
            }),
            
            contact_info : new FormGroup({
                confirstname : new FormControl(),
                conlastname : new FormControl(),
                conspodept : new FormControl(),
                conemail1 : new FormControl(),
                conemail2 : new FormControl(),
                conphnumber : new FormControl(),
                conweb : new FormControl()
            }),

            antcost : new FormControl(),
            antnumattendees: new FormControl(),
            fundsrc1 : new FormControl(),
            fundsrc2 : new FormControl(),
            fundotherrsrc : new FormControl(),
            fundamtsrc1 : new FormControl(),
            fundamtsrc2 : new FormControl(),
            fundamtothersrc : new FormControl(),
            cosponsors : new FormGroup({
                    cosname : new FormControl(),
                    cosemail : new FormControl(),
                    cosphnumber : new FormControl(),
                    cosweb : new FormControl()
            })
            


        })
    }
      add(){
          var html = '';
          html+="<tr>";
          html += "<td>" + "<input style="+ '"border:none"' + "type="+ '"text"'+  "class="+'"form-control"'+ "id="+'"fEvent"' + "placeholder="+ '"First name"'+ ">" + "</td>";
          html += "<td>" + "<input style="+ '"border:none"' + "type="+ '"text"'+  "class="+'"form-control"'+ "id="+'"fEvent"' + "placeholder="+ '"Last name"'+ ">" + "</td>";
          html += "<td>" + "<input style="+ '"border:none"' + "type="+ '"text"'+  "class="+'"form-control"'+ "id="+'"fEvent"' + "placeholder="+ '"Middle name"'+ ">" + "</td>";
          html += "<td>" + "<input style="+ '"border:none"' + "type="+ '"text"'+  "class="+'"form-control"'+ "id="+'"fEvent"' + "placeholder="+ '"Email"'+ ">" + "</td>";
          html +="<td> <input type="+'"button"'+ "id ="+'"deleteDep"'+ "value="+'"Delete"'+ "onclick ="+' "deleteRow(this)"'+  "</td>";
          html+="</tr>";
      }
}