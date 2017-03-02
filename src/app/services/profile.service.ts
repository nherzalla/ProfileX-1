import {Injectable} from '@angular/core';
import {Headers,Http,Response} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 


import 'rxjs/add/operator/toPromise';
import {userprofile} from '../models/userprofile.model';
import {address} from '../models/address.model';

@Injectable()

export class profileService{

    private profileUrl = "http://localhost:54490/api/Profile";

    constructor(private http:Http,private authHttp : AuthHttp)
    {

    }

    getProfile()
    {
        return this.authHttp
        .get(this.profileUrl)
        .toPromise()
        .then(response=>response.text)
        .catch(this.handleError);
    }
    updateAddress(address:address[])
    {
        return this.authHttp
        .post(this.profileUrl + "/updateaddress",address)
        .toPromise()
        .then(response=>response.json() as userprofile[])
        .catch(this.handleError);
    }

    addAddress(address:address[])
    {
        return this.authHttp
        .post(this.profileUrl + "/insertaddress",address)
        .toPromise()
        .then(response=>response.json() as userprofile[])
        .catch(this.handleError);
    }
    verifyProfilePromise()
    {
        return this.authHttp
        .get(this.profileUrl + "/profileverify")
        .toPromise()
        .then(response=>response.json() as userprofile[])
        .catch(this.handleError);
    }
    verifyProfile() : Observable<any>
    {
        return this.authHttp
        .get(this.profileUrl + "/profileverify")
        .map(this.extractData)
        .catch(this.handleError);
       // .subscribe(data=> console.log('success',data),
       // err=> console.log('error', err)
        //)
        
    }

    //Private methods.......................................................................
    private extractDataPromise(res:Response)
    {
        let body = res.json();
        return body || [];
    }
    private extractData(res:Response)
    {
        return res || {};

    }
    
   // private handleError(error: any): Promise<any> 
    private handleError(error: any) 
    {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    //Private methods.......................................................................
}