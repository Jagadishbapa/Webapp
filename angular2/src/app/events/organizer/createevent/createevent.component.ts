import { Component, OnInit } from '@angular/core';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {  FormArray,  FormBuilder, Validators } from '@angular/forms';
import {EngEvent} from '../../services/engevent.model'
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { NG_MODEL_WITH_FORM_CONTROL_WARNING } from '@angular/forms/src/directives';


@Component({
    selector: 'orgcreateeventform',
    templateUrl: './test.html',
})

export class OrgCreateEvent{
    public invoiceForm: FormGroup;
    orgoptions = [
                'American Heritage Center and Art Museum',
                'Athletics',
                'College of Agriculture and Natural Resources',
                'College of Arts and Sciences',
                'College of Business',
                'College of Education',
                'College of Engineering and Applied Science',
                'College of Health Sciences',
                'College of Law',
                'Division of Academic Affairs',
                'Division of Administration',
                'Division of Governmental and Community Affairs',
                'Division of Information Technology',
                'Division of Public Relations',
                'Division of Research and Economic Development',
                'Division of Student Affairs',
                'Haub School',
                'Honors College',
                'Office of Engagement',
                'Office of the President',
                'School of Energy Resources',
                'University Libraries',
                'University of Wyoming Foundation',
                'University Operations'
    ]

    deptoptions =[
        'A&S Computer Fee',
        'A&S Dean\'s Office',
        'A&S Natural Science',
        'Academic & Student Programs',
        'Accounting and Finance',
        'Accounting Office',
        'Accounts Receivable',
        'ADA/SEO Computer Fee',
        'Admissions',
        'Advising Career & Expl Studies',
        'Advising Services',
        'Aerospace Studies',
        'Agric Admin Business Office',
        'Agric Experiment Station',
        'Agricultural & Applied Econ',
        'Agriculture Computer Fee',
        'Agriculture Dean\'s Office',
        'AHC/American Heritage Center',
        'Allied Health Professions',
        'Alumni Relations',
        'American Studies & History',
        'Animal Science',
        'Anthropology',
        'Arena Auditorium',
        'Asset Management',
        'Assoc VP Administration',
        'Assoc VP Operations',
        'ASUW',
        'Athl/Basketball - Men',
        'Athl/Basketball - Women',
        'Athl/Business Mgr Office',
        'Athl/City Recreation',
        'Athl/Compliance',
        'Athl/Concessions',
        'Athl/Drug Education',
        'Athl/Equipment',
        'Athl/Facilities',
        'Athl/Football',
        'Athl/Golf-Men',
        'Athl/Golf-Women',
        'Athl/Media Relations',
        'Athl/Pepsters',
        'Athl/Promotions & Marketing',
        'Athl/Soccer',
        'Athl/Swimming - Men',
        'Athl/Swimming - Women',
        'Athl/Tennis',
        'Athl/Ticket Office',
        'Athl/Track - Men',
        'Athl/Track - Women',
        'Athl/Training Room',
        'Athl/Volleyball',
        'Athl/Weight Room',
        'Athl/Wrestling',
        'Athletic Training Table',
        'Atmospheric Sciences',
        'Auxiliary Services',
        'Auxiliary Services Dir\'s Ofc',
        'AVP of Enrollment Management',
        'AVP of Global Engagement',
        'AVP of Graduate Education',
        'AWARE',
        'Band',
        'Biodiversity Institute',
        'Botany',
        'Budget Office',
        'Building Automation',
        'Bulk Mail',
        'Business Academic Advising',
        'Business Computer Fee',
        'Business Dean\'s Office',
        'Business Services',
        'Campus Recreation',
        'Carbon Management Institute',
        'Career Services',
        'Carpentry Shop',
        'Cashiers Office',
        'Center for Global Studies',
        'Center Innov Flow Porous Media',
        'Central Energy Plant',
        'Central Scheduling',
        'Chemical Engineering',
        'Chemistry',
        'Chief of Police',
        'Civil/Arch Engineering',
        'College of Ag & Nat Resources',
        'College of Arts & Sciences',
        'College of Business',
        'College of Education',
        'College of Engr & Applied Sci',
        'College of Health Sciences',
        'College of Law',
        'Communication & Journalism',
        'Communication Disorders',
        'Computer Science',
        'Controls Shop',
        'Copier Services',
        'Counselor Education',
        'Cowboy Joe Club',
        'Criminal Justice & Sociology',
        'Custodial Services',
        'Dean of Students Office',
        'Dental Hygiene',
        'Division of Research Support',
        'Economics',
        'Ecosystem Science & Management',
        'Ed/Graduate Studies & Research',
        'Ed/Univ Wyoming Lab School',
        'Education Abroad',
        'Education Computer Fee',
        'Education Dean\'s Office',
        'Electrical & Computer Engr',
        'Electrical Shop',
        'Ellbogen CTL',
        'Engineering Computer Fee',
        'Engineering Science',
        'Engineering/Microcomputer Ofc',
        'English',
        'Engr & Applied Sci Dean\'s Ofc',
        'Enhanced Oil Recovery Inst',
        'EPSCoR-IDEA',
        'Equal Opp Report & Response',
        'Equipment Services',
        'Facilities Construction Mgt',
        'Facilities Engineering',
        'Facilities Management',
        'Facilities Services',
        'Faculty Senate',
        'Family & Consumer Sciences',
        'Financial Serv Business Office',
        'Financial Services',
        'Fine Arts Outreach',
        'Fleet Services - Auto Shop',
        'Fleet Services - Car Pool',
        'Foundation',
        'General Counsel',
        'Geography',
        'Geology & Geophysics',
        'Greenhouse',
        'Grounds Services',
        'Haub School of ENR',
        'Health Sciences Computer Fee',
        'Health Sciences Dean\'s Office',
        'Human Resources',
        'Human Resources Ofc',
        'INBRE Program',
        'Inst Innovation & Entrepreneur',
        'Institutional Analysis',
        'Institutional Communications',
        'Institutional Marketing',
        'Instructional Technology Ctr',
        'Intercoll Athl Director\'s Ofc',
        'Intercollegiate Athletics',
        'Internal Audit',
        'Internships & Online Programs',
        'IT/Application & Database Svcs',
        'IT/Business Svcs',
        'IT/Client Support Svcs',
        'IT/Computer Fee',
        'IT/Research Support',
        'IT/Telecom System Support Svcs',
        'IT/TSS/Operations',
        'IT/TSS/Systems Development',
        'Jacoby Golf Course',
        'Kinesiology and Health',
        'Laramie Clinic',
        'Law Computer Fee',
        'Law Dean\'s Office',
        'Law Library',
        'LeaRN Synergy & STEP',
        'Lib/Access Services',
        'Lib/Administrative Office',
        'Lib/Brinkerhoff Library',
        'Lib/Coe Reference',
        'Lib/Collection Development',
        'Lib/Digital Collections',
        'Lib/Learning Resource Center',
        'Lib/Science Library',
        'Lib/Special Collections',
        'Lib/Systems',
        'Lib/Technical Services',
        'Life Science Program',
        'Literacy Resear Cntr & Clinic',
        'Lock Shop',
        'Management & Marketing',
        'Manufacturing-Works',
        'Material Services',
        'Mathematics & Statistics',
        'MBA Program',
        'Mechanical Engineering',
        'Mechanical Trades',
        'Medical Educ & Public Health',
        'Medical Education Admin Div',
        'Medical Technology',
        'Military Science',
        'Modern & Classical Languages',
        'Molecular Biology',
        'Multicultural Affairs',
        'Music',
        'Neuroscience',
        'Nontraditional/Women\'s Ctr',
        'Nursing/Off-Campus Programs',
        'Ofc Academic Support-Athletics',
        'Offc Diversity Equity & Inclus',
        'Office of Distance Ed Support',
        'Office of Engagement&Outreach',
        'Office of Risk Management',
        'Office of Sponsored Programs',
        'Office of Teacher Education',
        'Office of The President',
        'Office of the Registrar',
        'Paint Shop',
        'Payroll',
        'Petroleum Engineering',
        'Philosophy & Religious Studies',
        'Photo Service',
        'Physics & Astronomy',
        'Plant Sciences',
        'Plumbing Shop',
        'Postal Services',
        'President',
        'Preventive Maintenance',
        'Procurement & Payment Services',
        'Program in Ecology',
        'Project Management',
        'Psychology',
        'R&E Center/Archer',
        'R&E Center/Laramie',
        'R&E Center/Powell',
        'R&E Center/SAREC',
        'R&E Center/Sheridan',
        'R&E Center/Torrington',
        'Real Estate Operations',
        'Recycling',
        'Regional Centers',
        'Research Products Center',
        'Residence Life & Dining Svs',
        'Rodeo',
        'Ruckelshaus Institute of ENR',
        'Schl Cnslng Ldrshp Advoc & Des',
        'Schl of Cultr Gendr & Soc Just',
        'Schl Pol Pub Affrs & Intl Stud',
        'Scholarships and Financial Aid',
        'School of Energy Resources',
        'School of Nursing',
        'School of Pharmacy',
        'School of Teacher Education',
        'Science & Math Teaching Center',
        'Science Initiative',
        'Seed Certification',
        'SEO/Academic Services',
        'SEO/CACG',
        'SEO/ETS/EOC',
        'SEO/Gear-UP',
        'SEO/McNair',
        'SEO/Student Support Services',
        'SEO/UB/MSIP',
        'SEO/Univ Disability Supt Svs',
        'SEO/Women\'s/Adult Student',
        'Shipping & Receiving',
        'Small Business Development Ctr',
        'Social Work',
        'Soil Testing Facility',
        'Special Education',
        'Staff Senate',
        'Stock Farm',
        'Stores',
        'Structural Trades',
        'Student Affairs Computer Fee',
        'Student EducationalOpportunity',
        'Student Financial Operations',
        'Student Health Service',
        'Student Media',
        'Summer High School Institute',
        'Systems & Inst Effectiveness',
        'Technical Services',
        'Theatre & Dance',
        'Transfer Relations',
        'Transfr Artic & Studnt Success',
        'Transit & Parking Services',
        'Trustees Education Initiative',
        'Undeclared Computer Fee',
        'Union Activities Center',
        'Union Copy Center',
        'Union Facilities',
        'Univ Operations Exec Dir Ofc',
        'Univ Studies - First Year Prog',
        'University Art Museum',
        'University Counseling Center',
        'University Honors Program',
        'University Investments',
        'University Libraries',
        'University of Wyoming Trustees',
        'University Operations',
        'University Police',
        'University Public Relations',
        'University Store',
        'Utilities Management',
        'UW Child Care Center',
        'UW Extension',
        'UW Fmly Med Resid Progm Casper',
        'UW Fmly Med Resid Progm Chey',
        'UW Foundation',
        'UW Legal Affairs',
        'UW Licensing Office',
        'UW National Park Research',
        'UW Rifle Team',
        'UW-Casper',
        'UWE/4-H Youth Programs',
        'UWE/Agric Programs',
        'UWE/Communication & Tech',
        'UWE/Community Development Educ',
        'UWE/EFNEP Programs',
        'UWE/Nutrition Programs',
        'UWE/Range Programs',
        'Vending Services',
        'Veterans Services Ctr',
        'Veterinary Science',
        'Visual & Literary Arts',
        'VP Academic Affairs',
        'VP Academic Affairs\' Office',
        'VP Administration',
        'VP Administration\'s Office',
        'VP Gov&Comm Affrs/Legal Affrs',
        'VP Government&Community Affrs',
        'VP Govt & Community Affrs Ofc',
        'VP Info Tech & CIO',
        'VP Institutional Advancement',
        'VP IT & CIO\'s Office',
        'VP Research & Economic Dev',
        'VP Research & Economic Dev Ofc',
        'VP Student Affairs',
        'VP Student Affairs\' Office',
        'Writing Center',
        'WVAC/Wy Volunteer Asst Corp',
        'WWAMI',
        'Wy School/Univ Partnership',
        'WYGISC',
        'Wyo INstitute for Disabilities',
        'Wyo Natural Diversity Database',
        'Wyo Technology Business Ctr',
        'Wyoming Cooperative Unit',
        'Wyoming Public Media',
        'Wyoming Union',
        'WyoOne ID Office',
        'WYSAC',
        'Zoology & Physiology'
    ]


    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.invoiceForm = this._fb.group({
          itemRows: this._fb.array([this.initItemRows()]), // here
          speakers: this._fb.array([this.inItSpeakers()]),
          organization : new FormControl(),
          department : new FormControl(),
          event_name : new FormControl(),
          event_desc : new FormControl(),
            priv : new FormControl(),
            fee : new FormControl(),
            event_start_date_time : new FormControl(),
            eve_st_time : new FormControl(),
            event_end_date_time : new FormControl(),
            eve_en_time : new FormControl(),
            event_file : new FormControl(),
            event_cost : new FormControl(),
            //location
            building_room : new FormControl(),
            address_line1 : new FormControl(),
            address_line2 : new FormControl(),
            county : new FormControl(),
            city : new FormControl(),
            state : new FormControl(),
            country : new FormControl(),
            other_city : new FormControl(),
            zip : new FormControl(),
            //contact info
            first_name : new FormControl(),
            last_name : new FormControl(),
            sponsoring_department : new FormControl(),
            email_1 : new FormControl(),
            email_2 : new FormControl(),
            phone_number : new FormControl(),
            website : new FormControl(),

            anticipated_cost : new FormControl(),
            anticipated_num_attendees: new FormControl(),
            funding_source1 : new FormControl(),
            funding_source2 : new FormControl(),
            funding_other : new FormControl(),
            cost_funding1 : new FormControl(),
            cost_funding2 : new FormControl(),
            cost_funding_other : new FormControl(),
            attendees_count : new FormControl(),
            created_by : new FormControl(),
            cancelled : new FormControl(),
            co_sponsors : new FormGroup({
                co_sponsor_name : new FormControl(),
                co_sponsor_email : new FormControl(),
                co_sponsor_phone_number : new FormControl(),
                co_sponsor_website : new FormControl()
            })
          
        });
      }
  
      /*
      This creates a new formgroup. You can think of it as adding an empty object
      into an array. So we are pushing an object to the formarray 'itemrows' that
      has the property 'itemname'. 
      */
     initItemRows() {
        return this._fb.group({
            // list all your form controls here, which belongs to your form array
            itemname: ['']

        });
    }

    inItSpeakers() {
        return this._fb.group({
            // list all your form controls here, which belongs to your form array
            first_name : '',
            last_name : '',
            middle_name : '',
            email : ''
        });
    }

    addNewSpeaker() {
        // control refers to your formarray
        const control = <FormArray>this.invoiceForm.controls['speakers'];
        // add new formgroup
        control.push(this.inItSpeakers());
    }
    
    deleteSpeaker(index: number) {
        // control refers to your formarray
        const control = <FormArray>this.invoiceForm.controls['speakers'];
        // remove the chosen row
        control.removeAt(index);
    }
    addNewRow() {
        // control refers to your formarray
        const control = <FormArray>this.invoiceForm.controls['itemRows'];
        // add new formgroup
        control.push(this.initItemRows());
    }
    
    deleteRow(index: number) {
        // control refers to your formarray
        const control = <FormArray>this.invoiceForm.controls['itemRows'];
        // remove the chosen row
        control.removeAt(index);
    }

    save(model:EngEvent, formvalid:any)
    {
        console.log(model.organization);
    }


   /* submitted = false;
    formin : NgForm;
    
    constructor()
    {
    }
    onSubmit(f:any) {
        console.log(f.value);
      }
    

    /*
    eventForm :  FormGroup;


    ngOnInit(){
        this.eventForm = new FormGroup({
            organization : new FormControl(),
            department : new FormControl(),
            event_name : new FormControl(),
            event_desc : new FormControl(),
            event_type : new FormControl(),
            priv : new FormControl(),
            fee : new FormControl(),
            event_start_date_time : new FormControl(),
            eve_st_time : new FormControl(),
            event_end_date_time : new FormControl(),
            eve_en_time : new FormControl(),
            event_file : new FormControl(),
            event_cost : new FormControl(),
            speakers : new FormGroup({
                first_name : new FormControl(),
                last_name : new FormControl(),
                middle_name : new FormControl(),
                email : new FormControl()
            }),

            building_room : new FormControl(),
            address_line1 : new FormControl(),
            address_line2 : new FormControl(),
            county : new FormControl(),
            city : new FormControl(),
            state : new FormControl(),
            country : new FormControl(),
            other_city : new FormControl(),
            zip : new FormControl(),

            first_name : new FormControl(),
            last_name : new FormControl(),
            sponsoring_department : new FormControl(),
            email_1 : new FormControl(),
            email_2 : new FormControl(),
            phone_number : new FormControl(),
            website : new FormControl(),


            anticipated_cost : new FormControl(),
            anticipated_num_attendees: new FormControl(),
            funding_source1 : new FormControl(),
            funding_source2 : new FormControl(),
            funding_other : new FormControl(),
            cost_funding1 : new FormControl(),
            cost_funding2 : new FormControl(),
            cost_funding_other : new FormControl(),
            attendees_count : new FormControl(),
            created_by : new FormControl(),
            cancelled : new FormControl(),
            co_sponsors : new FormGroup({
                co_sponsor_name : new FormControl(),
                co_sponsor_email : new FormControl(),
                co_sponsor_phone_number : new FormControl(),
                co_sponsor_website : new FormControl()
            })
        })
    }
      addC(){
          var html = '';
          html+="<tr>";
          html += "<td>" + "<input style="+ '"border:none"' + "type="+ '"text"'+  "class="+'"form-control"'+ "id="+'"fEvent"' + "placeholder="+ '"First name"'+ ">" + "</td>";
          html += "<td>" + "<input style="+ '"border:none"' + "type="+ '"text"'+  "class="+'"form-control"'+ "id="+'"fEvent"' + "placeholder="+ '"Last name"'+ ">" + "</td>";
          html += "<td>" + "<input style="+ '"border:none"' + "type="+ '"text"'+  "class="+'"form-control"'+ "id="+'"fEvent"' + "placeholder="+ '"Middle name"'+ ">" + "</td>";
          html += "<td>" + "<input style="+ '"border:none"' + "type="+ '"text"'+  "class="+'"form-control"'+ "id="+'"fEvent"' + "placeholder="+ '"Email"'+ ">" + "</td>";
          html +="<td> <input type="+'"button"'+ "id ="+'"deleteDep"'+ "value="+'"Delete"'+ "onclick ="+' "deleteRow(this)"'+  "</td>";
          html+="</tr>";
      }*/
}