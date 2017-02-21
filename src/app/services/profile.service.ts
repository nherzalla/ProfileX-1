import {Injectable} from '@angular/core';
import {Headers,Http,Response} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';
import {Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
 


import 'rxjs/add/operator/toPromise';

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
}