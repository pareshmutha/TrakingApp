import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/**
 * A simple settings/config class for storing key/value pairs with persistence.
 */
@Injectable()
export class Students {
  
  
  constructor(public storage: Storage, defaults: any) {
  }

  public setStudents(studentslist: any){
    this._studentlist = studentslist
  }
  public get students(): any {
        return this._studentlist;
    }
  private _studentlist: any = [];
}
