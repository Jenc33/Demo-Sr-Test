import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import jsPDF from 'jspdf';
import { Identification } from 'src/app/models/identification';
import { MyApiService } from 'src/app/services/my-api.service';

@Component({
  selector: 'app-search-id',
  templateUrl: './search-id.component.html',
  styleUrls: ['./search-id.component.css']
})
export class SearchIDComponent implements OnInit {

  searchForm : FormGroup;
  identifications : Identification[];

  constructor(private fb: FormBuilder, private search : MyApiService) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.searchForm = this.fb.group({
      idS : [""],
      name : [""]
    });
  }
  searchID(){
    let id : string = this.searchForm.get("idS").value.trim();
    let name : string = this.searchForm.get("name").value.trim();
    console.log("ID: " + id);
    console.log("Name: " + name);

    if(id !== ""){
      if(name !== ""){
        return this.search.searchByIdName(id, name).then( res => {
          this.identifications = res;

        }).catch( err => {
          console.log(err);
        });
      } else {
        return this.search.searchById(id).then( res => {
          this.identifications = res;
        }).catch( err => {
          console.log(err);
        });
      }
    } else {
      if(name !== ""){
        return this.search.searchByName(name).then( res => {
          this.identifications = res;
        }).catch( err => {
          console.log(err);
        });
      } else {
        alert("Ingresa un ID o nombre para buscar");
      }
    }
  }

  validateHasRFC(id : Identification) : boolean{
    if(id.rfc !== undefined || id.rfc !== ""){
      return true;
    } else {
      return false;
    }
  }

  generatePDF(id : Identification){
    const doc = new jsPDF();
    doc.text("Nombre: " + id.name + " " + id.pLastName +
    " " + id.mLastName, 10, 10);
    doc.text("Fecha de nacimiento: " + id.birthdate, 10, 20);
    doc.text("Género: " + id.gender.nombre, 10, 30);
    doc.text("Nacionalidad: " + id.nationality.nombre, 10, 40);
    doc.text("Club de futbol: " + id.footballClub.nombre, 10, 50);
    if(this.validateHasRFC(id)){
      doc.text("RFC: " + id.rfc, 10, 60);
    }
    doc.save("formatoId.pdf");
  }
}
