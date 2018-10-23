export class EngEvent {
    public organization	:	string	;
    public speakers : Array<Speakers>;
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