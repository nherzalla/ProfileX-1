import {address} from "./../models/address.model";
import {education} from './../models/education.model';


export class userprofile
{
    
        public Email : string;
        public firstName: string;
        public lastName : string;
        public address : address[];
        public education : education[];

}