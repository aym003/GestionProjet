import { Component, OnInit } from '@angular/core';
import { TypedService } from 'src/app/core/MsDemandes/services/typed.service';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-addedittypes',
  templateUrl: './addedittypes.component.html',
  styleUrls: ['./addedittypes.component.css']
})
export class AddedittypesComponent implements OnInit {

  constructor(public typedservice:TypedService,private fb : FormBuilder,) { }

  ngOnInit() {
    this.typedservice.initializeFormForPost();
        this.typedservice.form = this.fb.group({
          Id :  [null],
          Label:  [null, Validators.required]
    })
  }
  onSubmit(){
    
  }

}
