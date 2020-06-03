import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { TypeoService } from 'src/app/core/MsObjectifs/services/typeo.service';

@Component({
  selector: 'app-addditobj',
  templateUrl: './addditobj.component.html',
  styleUrls: ['./addditobj.component.css']
})
export class AddditobjComponent implements OnInit {

  public idpass;

  constructor(public TypeoService:TypeoService,
    private fb : FormBuilder,
    public dialogRef: MatDialogRef<AddditobjComponent>,
    private _snack:MatSnackBar) { }

  ngOnInit() {
    if (this.TypeoService.idpass==null){
   
    
        this.TypeoService.form = this.fb.group({
          Id :  [null],
          Label:  [null, Validators.required]
    })
    }
    else{
      // this.TypeoService.initializeFormForPost();
      this.TypeoService.form = this.fb.group({
        idTypeObjectif :  [null],
        Label:  [null, Validators.required]
  })
  
      this.TypeoService.form.controls.idTypeObjectif.setValue(this.TypeoService.idpass);
      this.TypeoService.form.controls.Label.setValue(this.TypeoService.labelpass)
     
    }
  }
  onSubmit(){
    if (this.TypeoService.idpass==null){
    this.TypeoService.form.controls.idTypeObjectif .setValue("00000000-0000-0000-0000-000000000000") ;
    this.TypeoService.postTypeo().subscribe(data=>{
      this._snack.open("Ajout réussi",'X',{
        verticalPosition: 'top',
        duration: 2000,
        panelClass:'snack-succ'
      });
        
    },error=>{
      console.log(error);
    });
    this.dialogRef.close();
    this.TypeoService.idpass=null;
  }
  else {
  
    this.TypeoService.putTypeo().subscribe(data=>{
      this._snack.open("Modification réussi",'X',{
        verticalPosition: 'top',
        duration: 2000,
        panelClass:'snack-succ'
      });
     
  },error=>{
    console.log(error);
  });
  this.dialogRef.close();
  }
  this.TypeoService.idpass=null;
  }

}
