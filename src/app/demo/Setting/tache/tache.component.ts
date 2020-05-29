import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { TacheService } from 'src/app/core/tache/tache.service';
import { Tache } from 'src/app/core/tache/tache.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styles: ['./tache.component.css']
})
export class TacheComponent implements OnInit {
  modalRef:BsModalRef;

  public tache=new Tache();
  edit : TemplateRef<any> ;
  
  constructor(public tacheService:TacheService,private modalService: BsModalService,private fb : FormBuilder) { }

  ngOnInit(): void {
    this.getTache();
    this.tacheService.initializeFormForPost();
    this.tacheService.form = this.fb.group({
      
    idTache  :[null],
    label :[null,Validators.required],
    description :[null,Validators.required],
    dateDebutReelle :[null,Validators.required],
    dureeEstimee :[null,Validators.required],
    dateRappel :[null,Validators.required],
    attribute1 :[null,Validators.required],
    dureeReelle :[null,Validators.required],
    fKObjectifs :[null,Validators.required],  
    fKTaskType_S_Service :[null,Validators.required], 
    fKGroupeUserRole_s_s :[null,Validators.required],
    fKDemande :[null,Validators.required],
    })
  
  }



  getTache(){
    this.tacheService.getTache().subscribe(data=>{
      this.tacheService.listTache=data as Tache[];
       console.log(data)
       
      },error=>{
        console.log(error)
      }
      )
  }
  
  
  
  
  AddTache(template){
    this.openModal(template);
    
  }
  
  
  
  
  onModifier(tache,edit){
    this.tache=tache;
    this.openModal(edit);
    this.tacheService.initializeFormForEdit(tache);
    this.modalRef = this.modalService.show(this.edit,{
          class : 'modal-dialog-centered'
       });
  }
 
  
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  // add + update
  processForm() {
  
      this.tacheService.form.controls.idTache.setValue("00000000-0000-0000-0000-000000000000") ;
      this.tacheService.postTache().subscribe(data=>{
        console.log(data);
    },error=>{
      console.log(error);
    });
  
    } 
  
  
  
    onupdate() {
      if(this.tacheService.form.controls.idTache.value != "00000000-0000-0000-0000-000000000000")
      this.tacheService.putTache().subscribe(data=>{
        if(data == "Update Done"){
          this.getTache();
          this.modalRef.hide();
        }
      })
   

  }

  
  
  onDelete(idTache){
   if (confirm("Vous êtes sûr de vouloir supprimer cette Tache")) {
    this.tacheService.DeleteTache(idTache).subscribe(
      res => {
        if(res == "Delete Done"){
          this.getTache();
        }
      },
      err => {
        console.log(err);
        });
   }
}


}