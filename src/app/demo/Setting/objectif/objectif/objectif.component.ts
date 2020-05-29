import { Component, OnInit, TemplateRef } from '@angular/core';
import { Objectif } from 'src/app/core/objectif/objectif.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ObjectifService } from 'src/app/core/objectif/objectif.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.component.html',
  styleUrls: ['./objectif.component.css']
})
export class ObjectifComponent implements OnInit {
  modalRef:BsModalRef;

  public objectif=new Objectif();
  edit : TemplateRef<any> ;
  
  
  
  constructor(public objectifService:ObjectifService,private modalService: BsModalService,private fb : FormBuilder) { }

  ngOnInit(): void {
    this.getObjectif();
    this.objectifService.initializeFormForPost();
    this.objectifService.form = this.fb.group({
      
      idObjectifs  :[null],
      dateDebutReelle :[null,Validators.required],
      dureeEstimee :[null,Validators.required],
      description :[null,Validators.required],
      dateCreation :[null,Validators.required],
      attribute1 :[null,Validators.required],
      label :[null,Validators.required],
      dureeReelle :[null,Validators.required],
      fKProjet :[null,Validators.required],  
      fKTypeObjectif_S_Service :[null,Validators.required], 
   
    })
  
  }
  
  
  
  getObjectif(){
    this.objectifService.getObjectif().subscribe(data=>{
      this.objectifService.listObjectif=data as Objectif[];
       console.log(data)
       
      },error=>{
        console.log(error)
      }
      )
  }
  
  
  
  
  AddObjectif(template){
    this.openModal(template);
    
  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }





  onModifier(objectif,edit){
    this.objectif=objectif;
    this.openModal(edit);
    this.objectifService.initializeFormForEdit(objectif);
    this.modalRef = this.modalService.show(this.edit,{
          class : 'modal-dialog-centered'
       });
  }


  processForm() {
  
    this.objectifService.form.controls.idObjectifs.setValue("00000000-0000-0000-0000-000000000000") ;
    this.objectifService.postObjectif().subscribe(data=>{
      console.log(data);
  },error=>{
    console.log(error);
  });

  } 

  onupdate() {
    if(this.objectifService.form.controls.idObjectifs.value != "00000000-0000-0000-0000-000000000000")
    this.objectifService.putObjectif().subscribe(data=>{
      if(data == "Update Done"){
        this.getObjectif();
        this.modalRef.hide();
      }
    })
 

}



onDelete(idObjectifs){
 if (confirm("Vous êtes sûr de vouloir supprimer cette Objectif")) {
  this.objectifService.DeleteObjectif(idObjectifs).subscribe(
    res => {
      if(res == "Delete Done"){
        this.getObjectif();
      }
    },
    err => {
      console.log(err);
      });
 }
}




}
