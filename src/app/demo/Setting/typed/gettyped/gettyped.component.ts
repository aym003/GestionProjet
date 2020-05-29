import { Component, OnInit } from '@angular/core';
import { Typed } from 'src/app/core/MsDemandes/model/typed.model';
import { TypedService } from 'src/app/core/MsDemandes/services/typed.service';
import { TableModule } from 'primeng/table';
import { MatDialog } from '@angular/material/dialog';
import { AddedittypesComponent } from '../addedittypes/addedittypes.component';

@Component({
  selector: 'app-gettyped',
  templateUrl: './gettyped.component.html',
  styleUrls: ['./gettyped.component.css']
})
export class GettypedComponent implements OnInit {
  public typed = new Typed();


  constructor(public typedservice:TypedService,private tablem:TableModule,private dialog:MatDialog) { }

  ngOnInit() {
    this.getTyped()
  }
  getTyped(){
    this.typedservice.getTyped().subscribe(data=>{
      this.typedservice.listTyped=data as Typed[];
       
     
      },error=>{
        console.log(error)
      }
      )
  }
  
  onDelete(idTyped){
    if (confirm("Vous êtes sûr de vouloir supprimer cette Tache")) {
     this.typedservice.DeleteTyped(idTyped).subscribe(
       res => {
         if(res == "Delete Done"){
           this.getTyped();
         }
       },
       err => {
         console.log(err);
         });
    }
 }
 AddorEdit(typedid,typelabel){
  this.typedservice.idpass=typedid;
  this.typedservice.labelpass=typelabel;
  
  
   this.dialog.open(AddedittypesComponent).afterClosed().subscribe(res => {
    this.getTyped();
  });
   

 }

}
