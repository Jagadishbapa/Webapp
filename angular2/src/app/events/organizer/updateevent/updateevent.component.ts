import { Component, OnInit, Input, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
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
    selector: 'updateevent',
    templateUrl: './updateevent.component.html',
    styleUrls : ['./updateevent.component.css']
})

export class UpdateEventComponent{
    //@ViewChild('submitted') eventsubmitcomponent: TemplateRef<any>;
    @Input() eventd:any;
    @Input() userid : string;
    register : boolean;
    events:any;
    public registerform: FormGroup;
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
    ];

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
    ];

    event_type = [
        'Athletic Events/Training',
        'Community College Collaboration',
        'Direct Client/Patient Care',
        'Government or Non-profit Assistance/Collaboration/Technology Transfer',
        'Industry Assistance/Collaboration/Technology Transfer',
        'Other',
        'Policy Work and Evaluation Support',
        'Pre-K through 12 Education Collaboration',
        'Professional Development, Training Programs, and Non-credit Courses',
        'Recruiting or Alumni Engagement',
        'Research or Extension',
        'Seminar/Public talk or Performance/Exhibition'
    ]

    counties = [
        'Albany County',
        'Big Horn County',
        'Campbell County',
        'Carbon County',
        'Converse County',
        'Crook County',
        'Fremont County',
        'Goshen County',
        'Grand Teton National Park',
        'Hot Springs County',
        'Johnson County',
        'Laramie County',
        'Lincoln County',
        'Natrona County',
        'Niobrara County',
        'Park County',
        'Platte County',
        'Sheridan County',
        'Sublette County',
        'Sweetwater County',
        'Teton County',
        'Uinta County',
        'Washakie County',
        'Weston County',
        'Wind River Indian Reservation',
        'Yellowstone National Park',
        'Other'
    ]

    cities = [
        'Afton',
        'Albin',
        'Alcova',
        'Alpine',
        'Arapahoe',
        'Atlantic City',
        'Auburn',
        'Baggs',
        'Bairoil',
        'Banner',
        'Bar Nunn',
        'Basin',
        'Bear River',
        'Beulah',
        'Big Piney',
        'Big Sandy',
        'Bondurant',
        'Boulder',
        'Buffalo',
        'Burlington',
        'Burns',
        'Byron',
        'Casper',
        'Centennial',
        'Cheyenne',
        'Chugwater',
        'Clark',
        'Clearmont',
        'Cody',
        'Cokeville',
        'Cowley',
        'Crowheart',
        'Daniel',
        'Dayton',
        'Deaver',
        'Diamondville',
        'Douglas',
        'Dubois',
        'East Thermopolis',
        'Eden',
        'Edgerton',
        'Elk Mountain',
        'Encampment',
        'Ethete',
        'Etna',
        'Evanston',
        'Evansville',
        'Fort Laramie',
        'Fort Washakie',
        'Frannie',
        'Gillette',
        'Glendo',
        'Glenrock',
        'Granger',
        'Green River',
        'Greybull',
        'Guernsey',
        'Hanna',
        'Hudson',
        'Hulett',
        'Jackson',
        'Jeffrey City',
        'Kaycee',
        'Kemmerer',
        'Kinnear',
        'Kirby',
        'La Barge',
        'Lake',
        'Lander',
        'Laramie',
        'Lingle',
        'Lost Springs',
        'Lovell',
        'Lusk',
        'Lyman',
        'Mammoth',
        'Manderson',
        'Manville',
        'Marbleton',
        'Meeteetse',
        'Midwest',
        'Mills',
        'Moneta',
        'Moorcroft',
        'Moose',
        'Moran',
        'Mountain View',
        'Natrona',
        'Newcastle',
        'Old Faithful',
        'Opal',
        'Pavillion',
        'Pine Bluffs',
        'Pine Haven',
        'Pinedale',
        'Powell',
        'Ranchester',
        'Rawlins',
        'Riverside',
        'Riverton',
        'Rock River',
        'Rock Springs',
        'Rolling Hills',
        'Saratoga',
        'Sheridan',
        'Shoshoni',
        'Sinclair',
        'Smoot',
        'Star Valley Ranch',
        'Story',
        'Sundance',
        'Superior',
        'Ten Sleep',
        'Thane',
        'Thermopolis',
        'Torrington',
        'Ucross',
        'Upton',
        'Van Tassell',
        'Wamsutter',
        'Wheatland',
        'Worland',
        'Wright',
        'Yoder',
        'Other'
    ]
    


    states:any[] = [
        {value:"AL",text:"Alabama"},
        {value:"AK",text:"Alaska"},
        {value:"AZ",text:"Arizona"},
        {value:"AR",text:"Arkansas"},
        {value:"CA",text:"California"},
        {value:"CO",text:"Colorado"},
        {value:"CT",text:"Connecticut"},
        {value:"DE",text:"Delaware"},
        {value:"FL",text:"Florida"},
        {value:"GA",text:"Georgia"},
        {value:"HI",text:"Hawaii"},
        {value:"ID",text:"Idaho"},
        {value:"IL",text:"Illinois"},
        {value:"IN",text:"Indiana"},
        {value:"IA",text:"Iowa"},
        {value:"KS",text:"Kansas"},
        {value:"KY",text:"Kentucky"},
        {value:"LA",text:"Louisiana"},
        {value:"ME",text:"Maine"},
        {value:"MD",text:"Maryland"},
        {value:"MA",text:"Massachusetts"},
        {value:"MI",text:"Michigan"},
        {value:"MN",text:"Minnesota"},
        {value:"MS",text:"Mississippi"},
        {value:"MO",text:"Missouri"},
        {value:"MT",text:"Montana"},
        {value:"NE",text:"Nebraska"},
        {value:"NV",text:"Nevada"},
        {value:"NH",text:"New Hampshire"},
        {value:"NJ",text:"New Jersey"},
        {value:"NM",text:"New Mexico"},
        {value:"NY",text:"New York"},
        {value:"NC",text:"North Carolina"},
        {value:"ND",text:"North Dakota"},
        {value:"OH",text:"Ohio"},
        {value:"OK",text:"Oklahoma"},
        {value:"OR",text:"Oregon"},
        {value:"PA",text:"Pennsylvania"},
        {value:"RI",text:"Rhode Island"},
        {value:"SC",text:"South Carolina"},
        {value:"SD",text:"South Dakota"},
        {value:"TN",text:"Tennessee"},
        {value:"TX",text:"Texas"},
        {value:"UT",text:"Utah"},
        {value:"VT",text:"Vermont"},
        {value:"VA",text:"Virginia"},
        {value:"WA",text:"Washington"},
        {value:"WV",text:"West Virginia"},
        {value:"WI",text:"Wisconsin"},
        {value:"WY",text:"Wyoming"}
    ]

    countries = [{value:"USA",text:"United States of America"}];

    fundingsrcs = [
        'Federal grants',
        'Special Appropriations (legislative)',
        'State grants and other non-federal grants',
        'Student Fees',
        'University operating funds including revenue funds',
        'UW Foundation and other gifts'
    ]
    sps:any[];
   
    constructor(private _fb: FormBuilder, private model: EngEvent, private engservice: EngagementService, private cdRef:ChangeDetectorRef) {


        //const sps: Speakers[] = [{first_name : 'jaga', last_name : 'bapa', middle_name: 'mid', email:"email"}];
      /* this.model.organization = 'American Heritage Center and Art Museum';
       this.model.department = 'A&S Computer Fee';
       this.model.event_type = 'Athletic Events/Training';
       this.model.priv = 'Yes';
       this.model.fee = 0;
       let myDate = new Date(); 

       var datePipe = new DatePipe('en-US');
       this.model.event_start_date_time= datePipe.transform(myDate, 'yyyy-MM-dd h:mm a');

       let myDate1 = new Date(); 
       this.model.event_start_date_time= datePipe.transform(myDate1, 'yyyy-MM-dd h:mm a');

       this.model.event_file=null;

       this.model.speakers=[{first_name : '', last_name : '', middle_name: '', email:''}];
       this.model.building_room='';
       this.model.address_line1=''
        */
       /* this.sps = [this._fb.group({
            // list all your form controls here, which belongs to your form array
            first_name : 'gfsfg',
            last_name : '',
            middle_name : '',
            email : ''
        }), this._fb.group({
            // list all your form controls here, which belongs to your form array
            first_name : 'gfsgfgffg',
            last_name : '',
            middle_name : '',
            email : ''
        })]

        var sps1 = new Array(this._fb.group({
            // list all your form controls here, which belongs to your form array
            first_name : 'gfsgfgffg',
            last_name : '',
            middle_name : '',
            email : ''
        }));
        sps1.splice(0,1);
        sps1.push(this._fb.group(this.model.speakers[0]));
        sps1.push(this._fb.group(this.model.speakers[0]));
        this.sps=sps1;*/
     }

    ngOnInit() {
        this.register=true;
        //console.log(this.userid);
        console.log(this.eventd);
        // event_id = 100;

            this.registerform = this._fb.group({
            event_id : new FormControl(),
            created_by : new FormControl(),
            cancelled : new FormControl(),
            flag : new FormControl(),
            speakers: this._fb.array(this.inItSpeakers()),
            organization : ['', Validators.required],
            department : ['', Validators.required],
            event_name : ['', [Validators.required, Validators.maxLength(100)]],
            event_desc : ['', [Validators.required, Validators.maxLength(500)]],
            event_type : ['', [Validators.required]],
            priv : ['', [Validators.required]],
            fee : ['', [Validators.required]],
            event_file : new FormControl(),
            event_start_date_time : ['', [Validators.required]],
            event_end_date_time : ['', [Validators.required]],
            building_room : new FormControl(),
            address_line1 : ['', [Validators.required, Validators.maxLength(200)]],
            address_line2 : new FormControl(),
            county : ['', [Validators.required, Validators.maxLength(100)]],
            city : ['', [Validators.maxLength(100)]],
            state : ['', [Validators.required, Validators.maxLength(100)]],
            country : ['', [Validators.required, Validators.maxLength(3)]],
            other_city : ['', [Validators.maxLength(100)]],
            zip : ['', [Validators.required]],

            //to-do
            first_name : ['', Validators.maxLength(100)],
            last_name : ['', Validators.maxLength(100)],
            sponsoring_department : ['', [Validators.required, Validators.maxLength(100)]],
            email_1 :  ['', [Validators.required, Validators.email, Validators.maxLength(100)]],
            email_2 :  ['', [Validators.email, Validators.maxLength(100)]],
            phone_number : new FormControl(),
            website : ['', Validators.maxLength(100)],
            anticipated_cost : new FormControl(),
            anticipated_num_attendees: new FormControl(),
            funding_source1 : new FormControl(),
            funding_source2 : new FormControl(),
            funding_other : new FormControl(),
            cost_funding1 : new FormControl(),
            cost_funding2 : new FormControl(),
            cost_funding_other : new FormControl(),
            attendees_count : new FormControl(),
            event_cost : new FormControl(),
            co_sponsors: this._fb.array(this.inItcosponsors())
        },
         { validator:  this.allvalidator
              }
            );
            this.registerform.patchValue(this.eventd);
            this.registerform.controls['event_start_date_time'].setValue(this.stdate());
            this.registerform.controls['event_end_date_time'].setValue(this.endate());
            /*console.log("1"+this.registerform.status);
            this.registerform.patchValue(this.eventd);
            console.log("2"+this.registerform.status);
            //this.registerform.markAsPristine();
            //this.registerform.updateValueAndValidity();
            console.log("3"+this.registerform.status);

            this.registerform.get('city').valueChanges.subscribe(
                (mode: string) => {
                    console.log("subscribe"+mode);
                    console.log(this.registerform.status);
                });*/
            //form.markAsPristine();
            /*
            console.log("printing eventd");
            console.log(this.eventd);
            console.log(this.eventd.event_start_date_time);

            var sps1 = new Array(this._fb.group({
                // list all your form controls here, which belongs to your form array
                first_name : '',
                last_name : '',
                middle_name : '',
                email : ''
            }));

            var csp = new Array(this._fb.group({
                // list all your form controls here, which belongs to your form array
                co_sponsor_name : '',
                co_sponsor_email : '',
                co_sponsor_phone_number : '',
                co_sponsor_website : ''
            }));
            /*
            if(this.eventd['speakers'].length>0)
            {
            sps1.splice(0,1);
            for(var i =0; i<this.eventd.speakers.length;i++)
                sps1.push(this._fb.group(this.eventd.speakers[i]));
            delete this.eventd['speakers'];
            this.eventd.speakers=sps1;
            }

            if(this.eventd['co_sponsors'].length>0)
            {
                csp.splice(0,1);
                for(var i =0; i<this.eventd['co_sponsors'].length;i++)
                    csp.push(this._fb.group(this.eventd.co_sponsors[i]));
                delete this.eventd['co_sponsors'];
                this.eventd.co_sponsors=csp;
            }
            
            //delete this.eventd['speakers'];
            //delete this.eventd['co_sponsors'];
            //this.eventd.speakers=sps1;
            //this.eventd.co_sponsors=csp;
            this.registerform.patchValue(this.eventd);
            let dateString = '2018-11-16T00:00:00' 
            let newDate = new Date(dateString);
            console.log("dkjbadkgjbadkgjb");

            //this.registerform.controls['event_start_date_time'].setValue(new Date(this.eventd.event_start_date_time));
            //this.registerform.controls['event_start_date_time'].setValue(newDate);*/
      }
    
      //(formGroup: FormGroup) => {
     //   return this.cityvalidator(formGroup);
     // }

     stdate()
     {

        //let dateString = '2018-11-16 00:00:00' 
        var datePipe = new DatePipe('en-US');
        this.eventd.event_start_date_time=datePipe.transform(this.eventd.event_start_date_time, 'yyyy-MM-dd HH:mm');
       /* let newDate = new Date(this.eventd.event_start_date_time);
        console.log("new date"+newDate);
        console.log("hours"+ newDate.toLocaleDateString());
        console.log("eventstring"+ this.eventd.event_start_date_time);
        console.log(this.eventd.event_start_date_time.substr(0,10)+'T'+this.eventd.event_start_date_time.substr(11));
*/
        //console.log(this.eventd.event_start_date_time.substr(0,10)+'T'+this.eventd.event_start_date_time.substr(11,5));
        

        return this.eventd.event_start_date_time.substr(0,10)+'T'+this.eventd.event_start_date_time.substr(11,5);
     }


     endate()
     {

        //let dateString = '2018-11-16 00:00:00' 
        //var datePipe = new DatePipe('en-US');
        //datePipe.transform(dateString, 'MM/dd/yyyy h:mm a');
        //let newDate = new Date(dateString);
        //console.log(this.eventd.event_start_date_time.substr(0,10)+'T'+this.eventd.event_start_date_time.substr(11));

        //console.log(this.eventd.event_end_date_time.substr(0,10)+'T'+this.eventd.event_end_date_time.substr(11,5));

        var datePipe = new DatePipe('en-US');
        this.eventd.event_end_date_time=datePipe.transform(this.eventd.event_end_date_time, 'yyyy-MM-dd HH:mm');

        return this.eventd.event_end_date_time.substr(0,10)+'T'+this.eventd.event_end_date_time.substr(11,5);
     }
    inItSpeakers() {
        var sps1 = new Array(this._fb.group({
            // list all your form controls here, which belongs to your form array
            first_name : ['', Validators.maxLength(100)],
            last_name : ['', Validators.maxLength(100)],
            middle_name : ['', Validators.maxLength(100)],
            email : ['', Validators.maxLength(100)]
        }));
        if(this.eventd.speakers.length>0)
        {
           // console.log("ddgdkjabspeaker1")
            sps1.splice(0,1);
        for(var i =0; i<this.eventd.speakers.length;i++)
        {
            
            sps1.push(this._fb.group({
                // list all your form controls here, which belongs to your form array
                first_name : [this.eventd.speakers[i]['first_name'], Validators.maxLength(100)],
                last_name : [this.eventd.speakers[i]['last_name'], Validators.maxLength(100)],
                middle_name : [this.eventd.speakers[i]['middle_name'], Validators.maxLength(100)],
                email : [this.eventd.speakers[i]['email'], Validators.maxLength(100)],
            }));
        
            //sps1.push(this._fb.group(this.eventd.speakers[i]));
        }
        //delete this.eventd['speakers'];
        //this.eventd.speakers=sps1;
        }
        return sps1;
        /*
    return this._fb.group({


        

        // list all your form controls here, which belongs to your form array
        first_name : ['gsdg', Validators.maxLength(100)],
        last_name : ['', Validators.maxLength(100)],
        middle_name : ['', Validators.maxLength(100)],
        email : ['', [Validators.email, Validators.maxLength(100)]],
    }
        );*/
    //return this._fb.group(this.model.speakers);
    }

    addNewSpeaker() {
        // control refers to your formarray
        //var value:any;
        var sps1 = this._fb.group({
            // list all your form controls here, which belongs to your form array
            first_name : ['', Validators.maxLength(100)],
            last_name : ['', Validators.maxLength(100)],
            middle_name : ['', Validators.maxLength(100)],
            email : ['', Validators.maxLength(100)]
        });
        const control = <FormArray>this.registerform.controls['speakers'];
        //value = control.value;
        // add new formgroup
        //value.push(sps1);
        control.push(sps1);
    }
    
    deleteSpeaker(index: number) {
        // control refers to your formarray
        const control = <FormArray>this.registerform.controls['speakers'];
        // remove the chosen row
        control.removeAt(index);
    }

    inItcosponsors() {
        var csp = new Array(this._fb.group({
            // list all your form controls here, which belongs to your form array
            co_sponsor_name : ['', Validators.maxLength(100)],
            co_sponsor_email : ['', [Validators.email,Validators.maxLength(100)]],
            co_sponsor_phone_number : new FormControl(),
            co_sponsor_website : ['', Validators.maxLength(100)]
        }));


        if(this.eventd.co_sponsors.length>0)
        {
            //console.log("ddgdkjabspeaker1")
            csp.splice(0,1);
        for(var i =0; i<this.eventd.co_sponsors.length;i++)
        {
             csp.push(this._fb.group({
                // list all your form controls here, which belongs to your form array
                co_sponsor_name : ['', Validators.maxLength(100)],
                co_sponsor_email : ['', [Validators.email,Validators.maxLength(100)]],
                co_sponsor_phone_number : new FormControl(),
                co_sponsor_website : ['', Validators.maxLength(100)]
            }));
        
           // csp.push(this._fb.group(this.eventd.co_sponsors[i]));
        }
        //delete this.eventd['speakers'];
        //this.eventd.co_sponsors=csp;
        }
        return csp;

        


        //return this._fb.group(this.model.speakers);
        }
    
        addNewcosponsor() {
            // control refers to your formarray
            const control = <FormArray>this.registerform.controls['co_sponsors'];
            // add new formgroup
           // control.push(this.inItcosponsors());

           var csp = this._fb.group({
            // list all your form controls here, which belongs to your form array
            co_sponsor_name : ['', Validators.maxLength(100)],
            co_sponsor_email : ['', [Validators.email,Validators.maxLength(100)]],
            co_sponsor_phone_number : new FormControl(),
            co_sponsor_website : ['', Validators.maxLength(100)]
        });
        // add new formgroup
        control.push(csp);
        }
        
        deletecosponsor(index: number) {
            // control refers to your formarray
            const control = <FormArray>this.registerform.controls['co_sponsors'];
            // remove the chosen row
            control.removeAt(index);
        }

       /* cityvalidator(group: FormGroup)
        {

            //group.controls['city']
            
            //console.log(c,oc,evstdate,evendate)
 
            //let cv = false;
            //console.log("gsbdgkjsbgljgbbxflbgnlsgbn")
            if((group.controls['city'].value==="" || group.controls['city'].value==="Other") && (group.controls['other_city'].value === ""))
                
            {
                console.log("true");
                return true;
            }
            else 
            {
                console.log("null");
                return null;
            }
           /* let dv = false;
            let esd = new Date(evstdate);
            let eed = new Date(evendate);
            if(esd<eed)
                dv = true;
            return (cv && dv);
        }*/

        allvalidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
            const c = control.get('city');
            const oc = control.get('other_city');
            const stdate = new Date(control.get('event_start_date_time').value);
            const endate = new Date(control.get('event_end_date_time').value);
            
            //console.log(stdate);
            //console.log(endate);
            //console.log(stdate<endate);

            let cv = false;
            let dv = false;
            if(((c.value==='' || c.value==='Other') && (oc.value === '' || oc.value === null))) 
            {
                cv=true;
                
            }

            if(stdate>=endate)
            {
                dv = true;
            }

            if(!cv && !dv)
            {
                return null;
                
            }
            else
                return {'cityvalid':true};
          
            //return name && alterEgo && name.value === alterEgo.value ? { 'identityRevealed': true } : null;
          };




    /*spfunc()
    {
        return this.sps;
    }*/

      save(model:EngEvent, formvalid:any)
      {
        if(model.other_city==="")
        {
            //console.log("yes");
        }
        //console.log(model);
  
        var datePipe = new DatePipe('en-US');
        model.event_start_date_time = datePipe.transform(model.event_start_date_time, 'yyyy-MM-dd h:mm a');
        model.event_end_date_time = datePipe.transform(model.event_end_date_time, 'yyyy-MM-dd h:mm a');
        model.created_by = this.userid;

          //delete model['speakers']

          var j=0;
          for(var i =0;i<model['speakers'].length ;i++)
          {
              if(model['speakers'][i]['first_name']==='' && model['speakers'][i]['last_name']==='' && model['speakers'][i]['middle_name']==='' && model['speakers'][i]['email']==='')
              {
                  model['speakers'].splice(i,1);
                  i=i-1;
              }
              else
                  j=1;
          }

          if(j===0)
          {
            delete model['speakers'];
          }


          var k=0;
          for(var i =0;i<model['co_sponsors'].length ;i++)
          {

              if(model['co_sponsors'][i]['co_sponsor_name']==='' && model['co_sponsors'][i]['co_sponsor_email']==='' && model['co_sponsors'][i]['co_sponsor_phone_number']===null && model['co_sponsors'][i]['co_sponsor_website']==='')
              {
                  model['co_sponsors'].splice(i,1);
                  i=i-1;
              }
              else
                  k=1;
          }

          if(k===0)
          {
            delete model['co_sponsors'];
          }

          delete model['creation_date'];
          console.log(model);
        this.engservice.saveEvent(model)
        .subscribe(
            eventss=>{ 
                console.log("submittedgdsgsdglgsg")
                console.log(eventss);
                this.events=eventss;
                console.log(eventss['event_name'])
                console.log("printing this")
                console.log(this.events);
                this.register=false;
                this.cdRef.detectChanges();
                this.register=false;
             });





    }
  
      /*
      This creates a new formgroup. You can think of it as adding an empty object
      into an array. So we are pushing an object to the formarray 'itemrows' that
      has the property 'itemname'. 
      */
/*


     initItemRows() {
        return this._fb.group({
            // list all your form controls here, which belongs to your form array
            itemname: ['']

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