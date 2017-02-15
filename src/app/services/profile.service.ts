import {Injectable} from '@angular/core';
import {Headers,Http,Response} from '@angular/http';
import {AuthHttp} from 'angular2-jwt';

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
        .then(response=>response.json())
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> 
    {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}