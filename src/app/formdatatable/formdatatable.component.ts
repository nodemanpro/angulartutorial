import { Component, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DataServiceService } from '../data-service.service';
import { CaseListDatasource } from '../elementsource';
import {HttpClient,HttpParams} from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export interface formdata {
  firstname: string;
  lastname: number;
  city: number;
  phone: string;
}

@Component({
  selector: 'app-formdatatable',
  templateUrl: './formdatatable.component.html',
  styleUrls: ['./formdatatable.component.css']
})

export class FormdatatableComponent implements OnInit {
  displayedColumns: string[] = ['firstname', 'lastname', 'city', 'phone'];
   Element_data:formdata[]=[];

   show=true;

  //subject = new BehaviorSubject(this.Element_data);
  dataSource = new MatTableDataSource(this.Element_data);
  
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dataservice:DataServiceService) { }

  ngOnInit(): void {
    this.dataservice.formdataobs$.subscribe(data=>{
     
    this.Element_data.push(data); 
    this.dataSource.sort = this.sort
    this.show=false; 
    console.log(data);
    })
  }

}
