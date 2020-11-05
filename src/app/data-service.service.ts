import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private formdatasujecct = new Subject<any>();
  formdataobs$ = this.formdatasujecct.asObservable().pipe();

  constructor() { }
  getformdata(val:any[])
    {
      console.log(val);
      return this.formdatasujecct.next(val);
    }
}
