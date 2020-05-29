import { Injectable } from '@angular/core';
import { Typed} from '../model/typed.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormControl, FormGroup,Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class TypedService {

  listTyped: Typed[];
  form = new FormGroup({
    id : new FormControl(""),
    label: new FormControl('', Validators.required)
    });

  constructor(private http: HttpClient) { }

  getTyped(){
        
    return this.http.get(environment.GestionTypedAPi + '/') ;
  }
  DeleteProjet(idTyped){
    return this.http
      .delete(environment.GestionProjetApi + "/RemoveTyped?id=" + idTyped,
        { responseType: "json" });
    }
    initializeFormForPost() {
      this.form.setValue({
        id: '00000000-0000-0000-0000-000000000000',
        label: '',
      });
    }
   
}
