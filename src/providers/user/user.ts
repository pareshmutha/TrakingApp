import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  _user: any;
  private _studentlist: any = [];
  private _userId:string = '';
  constructor(public api: Api) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  public setCurrentUserId(userId){
    this._userId = userId;
  }
  public get userId(): any {
      return this._userId;
  }
  
  public setStudents(studentslist: any){
    this._studentlist = studentslist
  }
  public get students(): any {
        return this._studentlist;
  }
  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    let seq = this.api.post('signup', accountInfo).share();
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
  GetSchoolNames() {
    let seq = this.api.get('GetSchoolNames').share();
    seq.subscribe((res: any) => {
    }, err => {
      console.error('ERROR', err);
    });
    return seq; 
  }
  GetBusDetails(nameObj){
    let seq = this.api.post('GetBusNavigationDetails', nameObj).share();
    seq.subscribe((res: any) => {
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
  GetBusRouteDetails(nameObj){
    let seq = this.api.post('GetBusRouteDetails', nameObj).share();
    seq.subscribe((res: any) => {
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }
  newstudentregistration(newStudent){
    let seq = this.api.post('newstudentregistration', newStudent).share();
    seq.subscribe((res: any) => {
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }
  GetCam1Data(name){
    let seq = this.api.post('GetCam1Data', name).share();
    seq.subscribe((res: any) => {
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }
  GetCam2Data(name){
    let seq = this.api.post('GetCam2Data', name).share();
    seq.subscribe((res: any) => {
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }
  buslocation(studentId){
    let seq = this.api.post('GetBusNavigationDetails', studentId).share();
    seq.subscribe((res: any) => {
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }
  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._user = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._user = resp.user;
  }
}
