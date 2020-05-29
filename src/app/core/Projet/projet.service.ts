import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Projet } from './projet.model';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {
  listProjet : Projet[];
  projet:Projet;
  
  form = new FormGroup({
    idProjet : new FormControl(""),
    label : new FormControl(""),
    dateDebutReelle : new FormControl(""),
    dureeEstimee : new FormControl(""),
    description : new FormControl(""),
    dateCreation :new FormControl(""),
    dateCloture : new FormControl(""),
    attribute1 : new FormControl(""),
    active :new FormControl(""),
    dureeReelle :new FormControl(""),  
    fkSousService :new FormControl(""),
    
  });
  
  initializeFormForEdit(projet:Projet) {
    this.form.setValue({
      idProjet: projet.idProjet,
      label: projet.label,
      dateDebutReelle: projet.dateDebutReelle,
      dureeEstimee: projet.dureeEstimee,
      description: projet.description,
      dateCreation: projet.dateCreation,
      dateCloture: projet.dateCloture,
      attribute1: projet.attribute1,
      active :projet.active,
      dureeReelle :projet.dureeReelle,  
      fkSousService :projet.fkSousService,
      
    });
  }

  initializeFormForPost() {
    this.form.setValue({
      idProjet: '00000000-0000-0000-0000-000000000000',
      label: '',
      dateDebutReelle: '',
      dureeEstimee: '',
      description: '',
      dateCreation: '',
      dateCloture: '',
      attribute1: '', 
      active : '',
      dureeReelle : '',  
      fkSousService : '',
      
       });
    } 
  constructor(private http: HttpClient) { }

  getProjet(){
        
    return this.http.get(environment.GestionProjetApi + '/GetProject') ;
  } 
  

  postProjet() {
   return this.http
  .post(
   "https://localhost:44382/api/Projet/PostProjet",
  this.form.value,
  { responseType: "json" }
  );}


  DeleteProjet(idProjet){
  return this.http
    .delete(environment.GestionProjetApi + "/RemoveProject?id=" + idProjet,
      { responseType: "json" });
  }
 


  putProjet() {
  console.log(this.form.value);
    return this.http
    .put(
      environment.GestionProjetApi + "/PutProject?id=" + this.form.controls.idProjet.value,
      this.form.value,
      { responseType: "json" }
    );
}



}
