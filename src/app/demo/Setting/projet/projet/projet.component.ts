import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Projet } from 'src/app/core/Projet/projet.model';
import { ProjetService } from 'src/app/core/Projet/projet.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {
  modalRef:BsModalRef;

  public projet=new Projet();
  edit : TemplateRef<any> ;
  constructor(public projetService:ProjetService,private modalService: BsModalService,private fb : FormBuilder) { }

  ngOnInit(): void {
    this.getProjet();
    this.projetService.initializeFormForPost();
    this.projetService.form = this.fb.group({
      
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
  
  getProjet(){
    this.projetService.getProjet().subscribe(data=>{
      this.projetService.listProjet=data as Projet[];
       console.log(data)
       
      },error=>{
        console.log(error)
      }
      )
  }
  
  
  
  
  AddProjet(template){
    this.openModal(template);
    
  }
  
  
  
  
  onModifier(projet,edit){
    this.projet=projet;
    this.openModal(edit);
    this.projetService.initializeFormForEdit(projet);
    this.modalRef = this.modalService.show(this.edit,{
          class : 'modal-dialog-centered'
       });
  }
 
  
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  // add + update
  processForm() {
  
      this.projetService.form.controls.idProjet.setValue("00000000-0000-0000-0000-000000000000") ;
      this.projetService.postProjet().subscribe(data=>{
        console.log(data);
    },error=>{
      console.log(error);
    });
  
    } 
  
  
  
    onupdate() {
      if(this.projetService.form.controls.idProjet.value != "00000000-0000-0000-0000-000000000000")
      this.projetService.putProjet().subscribe(data=>{
        if(data == "Update Done"){
          this.getProjet();
          this.modalRef.hide();
        }
      })
   

  }

  
  
  onDelete(idProjet){
   if (confirm("Vous êtes sûr de vouloir supprimer cette Tache")) {
    this.projetService.DeleteProjet(idProjet).subscribe(
      res => {
        if(res == "Delete Done"){
          this.getProjet();
        }
      },
      err => {
        console.log(err);
        });
   }
}

}
