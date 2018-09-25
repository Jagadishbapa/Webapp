export class EngEvent {
    event_id	:	number	;
    organization	:	string	;
    department	:	string	;
    event_desc	:	string	;
    event_type	:	string	;
    priv	:	string	;
    fee	:	number	;
    event_start_date_time	:	Date	;
    event_end_date_time	:	Date	;
    event_cost	:	number	;
    anticipated_cost	:	number	;
    anticipated_num_attendees	:	number	;
    funding_source1	:	string	;
    funding_source2	:	string	;
    funding_other	:	string	;
    cost_funding1	:	number	;
    cost_funding2	:	number	;
    cost_funding_other	:	number	;
    attendees_count	:	number	;
    created_by	:	string	;
    cancelled	:	string	;
    event_file	:	File	;
    event_name	:	string	;
    flag	:	string	;
    speakers: Speakers[];
    co_sponsors: Cosponsors[];

    building_room: string;
    address_line1: string;
    address_line2: string;
    county: string;
    city: string;
    state: string;
    country: string;
    other_city: string
    zip: number;

    first_name: string;
    last_name: string;
    sponsoring_department: string;
    email_1: string;
    email_2: string;
    phone_number: string;
    website: string;



        constructor (
            event_id	:	number	,
            organization	:	string	,
            department	:	string	,
            event_desc	:	string	,
            event_type	:	string	,
            priv	:	string	,
            fee	:	number	,
            event_start_date_time	:	Date	,
            event_end_date_time	:	Date	,
            event_cost	:	number	,
            anticipated_cost	:	number	,
            anticipated_num_attendees	:	number	,
            funding_source1	:	string	,
            funding_source2	:	string	,
            funding_other	:	string	,
            cost_funding1	:	number	,
            cost_funding2	:	number	,
            cost_funding_other	:	number	,
            attendees_count	:	number	,
            created_by	:	string	,
            cancelled	:	string	,
            event_file	:	File	,
            event_name	:	string	,
            flag	:	string	,
            speakers: Speakers[],
            co_sponsors: Cosponsors[],
        
            building_room: string,
            address_line1: string,
            address_line2: string,
            county: string,
            city: string,
            state: string,
            country: string,
            other_city: string,
            zip: number,
        
            first_name: string,
            last_name: string,
            sponsoring_department: string,
            email_1: string,
            email_2: string,
            phone_number: string,
            website: string
        )
        {
            this.event_id = event_id
            this.organization = organization
            this.department = department
            this.event_desc = event_desc
            this.event_type = event_type
            this.priv = priv
            this.fee = fee
            this.event_start_date_time = event_start_date_time
            this.event_end_date_time = event_end_date_time
            this.event_cost = event_cost
            this.anticipated_cost = anticipated_cost
            this.anticipated_num_attendees = anticipated_num_attendees
            this.funding_source1 = funding_source1
            this.funding_source2 = funding_source2
            this.funding_other = funding_other
            this.cost_funding1 = cost_funding1
            this.cost_funding2 = cost_funding2
            this.cost_funding_other = cost_funding_other
            this.attendees_count = attendees_count
            this.created_by = created_by
            this.cancelled = cancelled
            this.event_file = event_file
            this.event_name = event_name
            this.flag = flag


            this.building_room=building_room
            this.address_line1=address_line1
            this.address_line2=address_line2
            this.city=city
            this.county=county
            this.state=state
            this.country=country
            //this.other_city=other_city
            this.zip=zip

            this.first_name=first_name
            this.last_name= last_name
            this.sponsoring_department=sponsoring_department
            this.email_1=email_1
            this.email_2=email_2
            this.phone_number=phone_number
            this.website=website

            this.speakers = speakers
            this.co_sponsors=co_sponsors         
        }
}

export interface Speakers{
    first_name : string,
    last_name : string,
    middle_name : string,
    email : string
}

export interface Cosponsors{
    cos_name: string,
    cos_email: string,
    cos_ph_number: number,
    cos_website: string
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