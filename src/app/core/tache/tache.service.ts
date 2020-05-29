import { Injectable } from '@angular/core';
import { Tache } from './tache.model';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TacheService {
  listTache : Tache[];
  tache:Tache;
  
  form = new FormGroup({
    idTache : new FormControl(""),
    label : new FormControl(""),
    description : new FormControl(""),
    dateDebutReelle : new FormControl(""),
    dureeEstimee : new FormControl(""),
    dateRappel :new FormControl(""),
    attribute1 : new FormControl(""),
    dureeReelle : new FormControl(""),
    fKObjectifs :new FormControl(""),
    fKTaskType_S_Service :new FormControl(""),  
    fKGroupeUserRole_s_s :new FormControl(""),
    fKDemande :new FormControl(""),  
  });
  

  initializeFormForEdit(tache: Tache) {
    this.form.setValue({
      idTache: tache.idTache,
      label: tache.label,
      description: tache.description,
      dateDebutReelle: tache.dateDebutReelle,
      dureeEstimee: tache.dureeEstimee,
      dateRappel: tache.dateRappel,
      attribute1: tache.attribute1,
      dureeReelle: tache.dureeReelle,
      fKObjectifs :tache.fKObjectifs,
      fKTaskType_S_Service :tache.fKTaskType_S_Service,  
      fKGroupeUserRole_s_s :tache.fKGroupeUserRole_s_s,
      fKDemande :tache.fKDemande,
    });
  }
  initializeFormForPost() {
    this.form.setValue({
      idTache: '00000000-0000-0000-0000-000000000000',
      label: '',
      description: '',
      dateDebutReelle: '',
      dureeEstimee: '',
      dateRappel: '',
      attribute1: '',
      dureeReelle: '', 
      fKObjectifs : '',
      fKTaskType_S_Service : '',  
      fKGroupeUserRole_s_s : '',
      fKDemande : '',
       });
    } 
  constructor(private http: HttpClient) { }

  getTache(){
        
    return this.http.get(environment.GestionTacheApi + '/GetTache') ;
  } 
  

  postTache() {
   return this.http
  .post(
   "https://localhost:44382/api/Tache/PostTache",
  this.form.value,
  { responseType: "json" }
  );}


  DeleteTache(idTache){
  return this.http
    .delete(environment.GestionTacheApi + "/DeleteTache?id=" + idTache,
      { responseType: "json" });
  }
 


  putTache() {
  console.log(this.form.value);
    return this.http
    .put(
      environment.GestionTacheApi + "/PutTache?id=" + this.form.controls.idTache.value,
      this.form.value,
      { responseType: "json" }
    );
}
}