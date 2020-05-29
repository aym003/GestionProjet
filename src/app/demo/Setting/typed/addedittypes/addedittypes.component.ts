import { Component, OnInit } from '@angular/core';
import { TypedService } from 'src/app/core/MsDemandes/services/typed.service';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addedittypes',
  templateUrl: './addedittypes.component.html',
  styleUrls: ['./addedittypes.component.css']
})
export class AddedittypesComponent implements OnInit {
  public idpass;

  constructor(public typedservice:TypedService,
    private fb : FormBuilder,
    public dialogRef: MatDialogRef<AddedittypesComponent>,) { }

  ngOnInit() {
    if (this.typedservice.idpass==null){
   
    
        this.typedservice.form = this.fb.group({
          Id :  [null],
          Label:  [null, Validators.required]
    })
    }
    else{
      this.typedservice.initializeFormForPost();
      this.typedservice.form = this.fb.group({
        Id :  [null],
        Label:  [null, Validators.required]
  })
  console.log( this.typedservice.idpass);
      this.typedservice.form.controls.Id.setValue(this.typedservice.idpass);
      this.typedservice.form.controls.Label.setValue(this.typedservice.labelpass)
     
    }
  }
  onSubmit(){
    if (this.typedservice.idpass==null){
    this.typedservice.form.controls.Id .setValue("00000000-0000-0000-0000-000000000000") ;
    this.typedservice.postTyped().subscribe(data=>{
        console.log(data);
    },error=>{
      console.log(error);
    });
    this.dialogRef.close();
  }
  else {
    
    this.typedservice.putTyped().subscribe(data=>{
      console.log(data);
  },error=>{
    console.log(error);
  });
  this.dialogRef.close();
  }

  }

}
