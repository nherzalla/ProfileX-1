import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



import 'rxjs/add/operator/toPromise';
import { userprofile } from '../models/userprofile.model';
import { address } from '../models/address.model';
import { education } from '../models/education.model';
import { experience } from '../models/experience.model';

@Injectable()

export class profileService {

    private profileUrl = "http://localhost:54490/api/Profile";

    constructor(private http: Http, private authHttp: AuthHttp) {

    }

    getProfile() {
        return this.authHttp
            .get(this.profileUrl)
            .toPromise()
            .then(response => response.text)
            .catch(this.handleError);
    }
<<<<<<< HEAD
    getProfileImage()
    {
        return this.authHttp
            .get(this.profileUrl+ "/getprofileimage",)
            .toPromise()
            .then(response => response.text)
            .catch(this.handleError);
    }
=======
>>>>>>> parent of e0a4856... Download File not complete
    updateProfile(userprofile: userprofile, fileToUpload: any) 
    {
        let formData = new FormData();
        formData.append("firstName", userprofile.firstName);
        formData.append("lastName", userprofile.lastName);
        formData.append("file", fileToUpload);
        return this.authHttp
            .post(this.profileUrl + "/updateprofile", formData)
            .toPromise()
            .then(response => response.json() as userprofile[])
            .catch(this.handleError);

    }
    /*---------------------------------------------Sub Arrays------------------------------------------------*/
    addAddress(address: address[]) {
        return this.authHttp
            .post(this.profileUrl + "/insertaddress", address)
            .toPromise()
            .then(response => response.json() as userprofile[])
            .catch(this.handleError);
    }
    addEducation(education: education[]) {
        return this.authHttp
            .post(this.profileUrl + "/inserteducation", education)
            .toPromise()
            .then(response => response.json() as userprofile[])
            .catch(this.handleError);
    }
    addExperience(experience: experience[]) {
        return this.authHttp
            .post(this.profileUrl + "/insertexperience", experience)
            .toPromise()
            .then(response => response.json() as userprofile[])
            .catch(this.handleError);
    }

    updateAddress(address: address[]) {
        return this.authHttp
            .post(this.profileUrl + "/updateaddress", address)
            .toPromise()
            .then(response => response.json() as userprofile[])
            .catch(this.handleError);
    }
    updateEducation(education: education[]) {
        return this.authHttp
            .post(this.profileUrl + "/updateeducation", education)
            .toPromise()
            .then(response => response.json() as userprofile[])
            .catch(this.handleError);
    }
    updateExperience(experience: experience[]) {
        return this.authHttp
            .post(this.profileUrl + "/updateexperience", experience)
            .toPromise()
            .then(response => response.json() as userprofile[])
            .catch(this.handleError);
    }
    deleteAddress(address: address) {
        return this.authHttp
            .post(this.profileUrl + "/deleteaddress", address)
            .toPromise()
            .then(response => response.json() as userprofile[])
            .catch(this.handleError);
    }
    deleteEducation(education: education) {
        return this.authHttp
            .post(this.profileUrl + "/deleteeducation", education)
            .toPromise()
            .then(response => response.json() as userprofile[])
            .catch(this.handleError);
    }
    deleteExperience(experience: experience) {
        return this.authHttp
            .post(this.profileUrl + "/deleteexperience", experience)
            .toPromise()
            .then(response => response.json() as userprofile[])
            .catch(this.handleError);
    }

    /*---------------------------------------------Sub Arrays---------------------------------------------*/


    verifyProfilePromise() {
        return this.authHttp
            .get(this.profileUrl + "/profileverify")
            .toPromise()
            .then(response => response.json() as userprofile[])
            .catch(this.handleError);
    }
    verifyProfile(): Observable<any> {
        return this.authHttp
            .get(this.profileUrl + "/profileverify")
            .map(this.extractData)
            .catch(this.handleError);
        // .subscribe(data=> console.log('success',data),
        // err=> console.log('error', err)
        //)

    }


    //Private methods.......................................................................
    private extractDataPromise(res: Response) {
        let body = res.json();
        return body || [];
    }
    private extractData(res: Response) {
        return res || {};

    }

    // private handleError(error: any): Promise<any> 
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
    //Private methods.......................................................................
}