import {address} from "./../models/address.model";
import {education} from './../models/education.model';
import {experience} from './../models/experience.model';



export class userprofile
{
    
        public Email : string;
        public firstName: string;
        public lastName : string;
        public imageURL : string;
        public address : address[];
        public education : education[];
        public experience : experience[];

}