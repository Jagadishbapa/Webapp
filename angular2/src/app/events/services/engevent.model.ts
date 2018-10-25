export class EngEvent {
    public event_id	:	number	;
    public organization	:	string	;
    public department	:	string	;
    public event_desc	:	string	;
    public event_type	:	string	;
    public priv	:	string	;
    public fee	:	number	;
    public event_start_date_time	:	String	;
    public event_end_date_time	:	String	;
    public event_cost	:	number	;
    public anticipated_cost	:	number	;
    public anticipated_num_attendees	:	number	;
    public funding_source1	:	string	;
    public funding_source2	:	string	;
    public funding_other	:	string	;
    public cost_funding1	:	number	;
    public cost_funding2	:	number	;
    public cost_funding_other	:	number	;
    public attendees_count	:	number	;
    public created_by	:	string	;
    public cancelled	:	string	;
    public event_file	:	File	;
	public updated_by   : string;	
	public cancelled_by : string;
    public event_name	:	string	;
    public flag	:	string	;
    public speakers: Array<Speakers>;
    public co_sponsors: Array<Cosponsors>;

    public building_room: string;
    public address_line1: string;
    public address_line2: string;
    public county: string;
    public city: string;
    public state: string;
    public country: string;
    public other_city: string
    public zip: number;

    public first_name: string;
    public last_name: string;
    public sponsoring_department: string;
    public email_1: string;
    public email_2: string;
    public phone_number: string;
    public website: string;

}

export class Cosponsors{
    co_sponsor_name: string;
    co_sponsor_email: string;
    co_sponsor_phone_number: number;
    co_sponsor_website: string;
    constructor(co_sponsor_name:string='', co_sponsor_email:string = '', co_sponsor_phone_number:number=null, co_sponsor_website:string=''){
        this.co_sponsor_name= co_sponsor_name;
        this.co_sponsor_email = co_sponsor_email;
        this.co_sponsor_phone_number=co_sponsor_phone_number;
        this.co_sponsor_website=co_sponsor_website;
    }
}

export class Speakers{
    first_name : string;
    last_name : string;
    middle_name : string;
    email : string;
}

/*
export class EngEvent {
    
    event_id: number;
    organization: string;
    department: string;
    event_desc: string;
    event_type: string;
    event_name: string;

    constructor (event_id: number, event_name:string, organization:string, department:string, event_desc:string, event_type:string)
    {
        this.event_id=event_id;
        this.event_name = event_name;
        this.organization=organization;
        this.department=department;
        this.event_desc=event_desc;
        this.event_type=event_type;
    }
}*/