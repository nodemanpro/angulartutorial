import {DataSource} from '@angular/cdk/collections';
import { ViewChild } from '@angular/core';
import { Observable } from 'rxjs';


export class CaseListDatasource extends DataSource<any[]> {
   



    constructor(private _list$: Observable<any[]>) {
        super();
    }

    connect(): Observable<any[]> {
        return this._list$;
    }

    disconnect() {
    }
    

}