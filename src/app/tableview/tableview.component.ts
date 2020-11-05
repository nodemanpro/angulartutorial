import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.css']
})
export class TableviewComponent implements OnInit {

  constructor(private fb:FormBuilder,private formservice:DataServiceService) { }
  myControl = new FormControl();
  registerform:FormGroup;

  ngOnInit(): void {
    this.registerform = this.fb.group({
   
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      city: [null, Validators.required],
      phone: [null, Validators.required],
    
  });
  }
  get f() { return this.registerform.controls; }
  register()
  {
    if (this.registerform.invalid) {
        return;
    }
    console.log(this.registerform.value);
    this.formservice.getformdata(this.registerform.value);
  }
}
