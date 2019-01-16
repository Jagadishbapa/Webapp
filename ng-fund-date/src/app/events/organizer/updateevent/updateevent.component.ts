import { Component, Input,  ChangeDetectorRef } from '@angular/core';
import {  FormArray,  FormBuilder, Validators,  ValidationErrors } from '@angular/forms';
import {EngEvent} from '../../services/engevent.model'
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import {EngagementService} from '../../services/engagement.service';
import {DatePipe} from '@angular/common';


@Component({
    selector: 'updateevent',
    templateUrl: './updateevent.component.html',
    styleUrls : ['./updateevent.component.css']
})

export class UpdateEventComponent{
    public cansubmit: boolean;
    @Input() eventd:any;
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
     }

    ngOnInit() {
            this.cansubmit=true;
            this.register=true;
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

      }
    stdate()
     {
        var datePipe = new DatePipe('en-US');
        this.eventd.event_start_date_time=datePipe.transform(this.eventd.event_start_date_time, 'yyyy-MM-dd HH:mm');
        return this.eventd.event_start_date_time.substr(0,10)+'T'+this.eventd.event_start_date_time.substr(11,5);
     }


     endate()
     {
        var datePipe = new DatePipe('en-US');
        this.eventd.event_end_date_time=datePipe.transform(this.eventd.event_end_date_time, 'yyyy-MM-dd HH:mm');
        return this.eventd.event_end_date_time.substr(0,10)+'T'+this.eventd.event_end_date_time.substr(11,5);
     }
    inItSpeakers() {
        var sps1 = new Array(this._fb.group({
            first_name : ['', Validators.maxLength(100)],
            last_name : ['', Validators.maxLength(100)],
            middle_name : ['', Validators.maxLength(100)],
            email : ['', [Validators.email, Validators.maxLength(100)]]
        }));
        if(this.eventd.speakers.length>0)
        {
            sps1.splice(0,1);
        for(var i =0; i<this.eventd.speakers.length;i++)
        {
            
            sps1.push(this._fb.group({
                first_name : [this.eventd.speakers[i]['first_name'], Validators.maxLength(100)],
                last_name : [this.eventd.speakers[i]['last_name'], Validators.maxLength(100)],
                middle_name : [this.eventd.speakers[i]['middle_name'], Validators.maxLength(100)],
                email : [this.eventd.speakers[i]['email'], [Validators.email, Validators.maxLength(100)]],
            }));
        }
        }
        return sps1;
    }

    addNewSpeaker() {
        var sps1 = this._fb.group({
            first_name : ['', Validators.maxLength(100)],
            last_name : ['', Validators.maxLength(100)],
            middle_name : ['', Validators.maxLength(100)],
            email : ['', [Validators.email, Validators.maxLength(100)]]
        });
        const control = <FormArray>this.registerform.controls['speakers'];
        control.push(sps1);
    }
    
    deleteSpeaker(index: number) {
        const control = <FormArray>this.registerform.controls['speakers'];
        control.removeAt(index);
    }

    inItcosponsors() {
        var csp = new Array(this._fb.group({
            co_sponsor_name : ['', Validators.maxLength(100)],
            co_sponsor_email : ['', [Validators.email,Validators.maxLength(100)]],
            co_sponsor_phone_number : new FormControl(),
            co_sponsor_website : ['', Validators.maxLength(100)]
        }));


        if(this.eventd.co_sponsors.length>0)
        {
            csp.splice(0,1);
        for(var i =0; i<this.eventd.co_sponsors.length;i++)
        {
             csp.push(this._fb.group({
                co_sponsor_name : ['', Validators.maxLength(100)],
                co_sponsor_email : ['', [Validators.email,Validators.maxLength(100)]],
                co_sponsor_phone_number : new FormControl(),
                co_sponsor_website : ['', Validators.maxLength(100)]
            }));
        }
        }
        return csp;
        }
    
        addNewcosponsor() {
            const control = <FormArray>this.registerform.controls['co_sponsors'];

           var csp = this._fb.group({
            co_sponsor_name : ['', Validators.maxLength(100)],
            co_sponsor_email : ['', [Validators.email,Validators.maxLength(100)]],
            co_sponsor_phone_number : new FormControl(),
            co_sponsor_website : ['', Validators.maxLength(100)]
        });
        control.push(csp);
        }
        
        deletecosponsor(index: number) {
            const control = <FormArray>this.registerform.controls['co_sponsors'];
            control.removeAt(index);
        }

        _keyDown(event: any) {    
            if (event.target.value>99999999) {
              event.preventDefault();
            }
        }

        _keyDown1(event: any) {     
            if (event.target.value>9999999999) {
            event.preventDefault();
            }

        }

        allvalidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
            const c = control.get('city');
            const oc = control.get('other_city');
            const stdate = new Date(control.get('event_start_date_time').value);
            const endate = new Date(control.get('event_end_date_time').value);

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
                if(control.get('fee').value>999999999 || control.get('phone_number').value>99999999999 || control.get('zip').value>999999999 || control.get('anticipated_num_attendees').value>999999999 || control.get('event_cost').value>999999999 || control.get('attendees_count').value>999999999 || control.get('cost_funding1').value>999999999 || control.get('cost_funding2').value>999999999 || control.get('cost_funding_other').value>999999999)
                    return {'cityvalid':true};
                else
                    return null;  
            }
            else
                return {'cityvalid':true};
        
          };

          save(model:any, formvalid:any)
          {
    
            const c = this.registerform.get('city');
            const oc = this.registerform.get('other_city');
            const stdate = new Date(this.registerform.get('event_start_date_time').value);
            const endate = new Date(this.registerform.get('event_end_date_time').value);
    
            let cv = false;
            let dv = false;
            if(((c.value==="" || c.value==="Other") && (oc.value === ""))) 
            {
                this.registerform.controls['city'].markAsTouched();
                this.registerform.controls['city'].setErrors({'incorrect': true});
    
                this.registerform.controls['other_city'].markAsTouched();
                this.registerform.controls['other_city'].setErrors({'incorrect': true});
            }
            else
            {
                this.registerform.controls['city'].setErrors(null);
                this.registerform.controls['other_city'].setErrors(null);
            }
    
            if(stdate>=endate)
            {
                this.registerform.controls['event_start_date_time'].setErrors({'greater': true});
                this.registerform.controls['event_end_date_time'].setErrors({'lesser': true});
    
            }
            else{
                this.registerform.controls['event_start_date_time'].setErrors(null);
                this.registerform.controls['event_end_date_time'].setErrors(null);
            }
    
            if(this.registerform.get('fee').value>999999999)
            {
                this.registerform.controls['fee'].setErrors({'incorrect': true});
            }
    
            if(this.registerform.get('phone_number').value>99999999999)
            {
                this.registerform.controls['phone_number'].setErrors({'incorrect': true});
            }
            if(this.registerform.get('zip').value>999999999)
            {
                this.registerform.controls['zip'].setErrors({'incorrect': true});
            }
            if(this.registerform.get('anticipated_num_attendees').value>999999999)
            {
                this.registerform.controls['anticipated_num_attendees'].setErrors({'incorrect': true});
            }
            if(this.registerform.get('event_cost').value>999999999)
            {
                this.registerform.controls['event_cost'].setErrors({'incorrect': true});
            }
            if(this.registerform.get('attendees_count').value>999999999)
            {
                this.registerform.controls['attendees_count'].setErrors({'incorrect': true});
            }
            if(this.registerform.get('cost_funding1').value>999999999)
            {
                this.registerform.controls['cost_funding1'].setErrors({'incorrect': true});
            }
            if(this.registerform.get('cost_funding2').value>999999999)
            {
                this.registerform.controls['cost_funding2'].setErrors({'incorrect': true});
            }
            if(this.registerform.get('cost_funding_other').value>999999999)
            {
                this.registerform.controls['cost_funding_other'].setErrors({'incorrect': true});
            }
    
    
    
                /*
                if(this.registerform.get('fee').value>999999999 || this.registerform.get('phone_number').value>99999999999 || control.get('zip').value>999999999 || control.get('anticipated_num_attendees').value>999999999 || control.get('event_cost').value>999999999 || control.get('attendees_count').value>999999999 || control.get('cost_funding1').value>999999999 || control.get('cost_funding2').value>999999999 || control.get('cost_funding_other').value>999999999)
                {}
                */
    
    
    
              /*
            var cansubmit=false;
            console.log(model.organization)
            this.registerform.controls['event_name'].markAsTouched();
            this.registerform.controls['event_name'].setErrors({'incorrect': true});
            var regexp = new RegExp('[A-Za-z0-9._%+-]+@uwyo.edu')
            console.log(regexp.test(model.email_1));
    
            var reqpattern = '[]+'
            if(model.organization==='')
            {
                console.log('enter org')
            }
     
            var cansubmit=false;
            if(this.registerform.controls['email_1'].invalid)
            {
                this.registerform.controls['email_1'].markAsTouched();
                this.registerform.controls['email_1'].setErrors({'incorrect': true});
            }
    
            if(this.registerform.controls['fee'].invalid)
            {
                this.registerform.controls['fee'].markAsTouched();
                this.registerform.controls['fee'].setErrors({'incorrect': true});
            }
    
            const sp = <FormArray>this.registerform.controls['speakers'];
    
            console.log(sp['controls'][0].get('first_name').value)
            for(var i=0;i<sp['controls'].length;i++)
            {
                const sprow = sp['controls'][i];
                if(sprow.get('email').invalid)
                {
    
                    //this.registerform.controls.speakers.at(0).controls.first_name.markAsTouched();
                    //this.registerform.controls.speakers.at(0).controls.first_name.updateValueAndValidity();
    
                    for (let inner in this.registerform.controls) {
                        this.registerform.get(inner).markAsTouched();
                        this.registerform.get(inner).updateValueAndValidity();
                    }
    
                    console.log(this.registerform.controls.speakers[0]);
    
                    console.log(this.registerform.controls.speakers.at(0));
                    for(let speaker of   this.registerform.controls.speakers.controls)
                    {
                        speaker.first_name.markAsTouched();
                        speaker.first_name.updateValueAndValidity();
                        console.log(speaker);
                      // this.registerform.controls.speakers.at(0).get(inner1).markAsTouched();
                      //this.registerform.controls.speakers.at(0).controls.first_name.updateValueAndValidity();
                        //this.registerform.controls.speakers.updateValueAndValidity();
                        //.controls.first_name.setErrors({'incorrect': true});
                        //this.registerform.controls.speakers.at(0).get(inner1).setErrors({'incorrect': true});
                        //console.log(this.speakers.at(0).get(inner1));
                       // this.speakers.at(0).get(inner1).markAsTouched();
                        //this.speakers.at(0).get(inner1).updateValueAndValidity();
                        //this.speakers.at(0).get(inner1).setErrors({'incorrect': true});
                       break;
    
                    }
                    //console.log(this.speakers.at(0).get('first_name'));
                    //console.log(this.speakers.at(0).get('first_name'));
                    //this.speakers.at(0).get('first_name').updateValueAndValidity();
                   // controls.first_name.markAsTouched();
                    //this.speakers.at(0).controls.first_name.setErrors({'incorrect': true});
                    //console.log('invalid');
                    //console.log(this.registerform.controls['speakers'][0])
                    //this.registerform.controls['speakers'].markAsTouched();
                    //this.registerform.controls['speakers'].setErrors({'incorrect': true});
                   // this.registerform.controls['speakers']['controls'][i].controls['first_name'].markAsTouched();
                    //this.registerform.controls['speakers']['controls'][i].controls['first_name'].setErrors({'incorrect': true});
                    //console.log(this.registerform.controls['speakers']['controls'][i].get('first_name').markAsTouched());
                    //console.log(this.registerform.controls['speakers']['controls'][i].get('first_name').setErrors({'incorrect': true}));
                    //this.registerform.controls['speakers'].get('first_name').markAsTouched();
                    //this.registerform.controls['speakers'].get('first_name').setErrors({'incorrect': true});
                }
            }
    
    
            */
           this.cansubmit=true;
    
    
           for (let inner in this.registerform.controls) {
            this.registerform.get(inner).markAsTouched();
            //this.registerform.get(inner).updateValueAndValidity();
            if(this.registerform.get(inner).invalid)
                this.cansubmit=false;
            else{
                this.registerform.controls[inner].setErrors(null);
            }
            }
    
            if(this.cansubmit)
            {
                var datePipe = new DatePipe('en-US');
                model.event_start_date_time = datePipe.transform(model.event_start_date_time, 'yyyy-MM-dd h:mm a');
                model.event_end_date_time = datePipe.transform(model.event_end_date_time, 'yyyy-MM-dd h:mm a');
                model.created_by = sessionStorage.getItem('org_key');
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
    
                this.engservice.saveEvent(model)
                .subscribe(
                    eventss=>{ 
                        this.events=eventss;
                        this.register=false;
                        this.cdRef.detectChanges();
                    },
                    (err)=>{console.log('organizer create error')});
            }
        }
    }