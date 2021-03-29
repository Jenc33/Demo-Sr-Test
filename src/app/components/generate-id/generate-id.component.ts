import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgWizardConfig, NgWizardService, StepChangedArgs, StepValidationArgs, STEP_STATE, THEME } from 'ng-wizard';
import { of } from 'rxjs';
import { clubes } from 'src/app/data/clubes';
import { generos } from 'src/app/data/generos';
import { nacionalidades } from 'src/app/data/nacionalidades';
import { Footballclub } from 'src/app/models/footballclub';
import { Gender } from 'src/app/models/gender';
import { Identification } from 'src/app/models/identification';
import { Nationality } from 'src/app/models/nationality';
import { MyApiService } from 'src/app/services/my-api.service';

@Component({
  selector: 'app-generate-id',
  templateUrl: './generate-id.component.html',
  styleUrls: ['./generate-id.component.css']
})
export class GenerateIDComponent implements OnInit {

  idForm1 : FormGroup;
  idForm2 : FormGroup;
  patternRFC = '^[A-Z,Ñ,&]{3,4}[0-9]{2}[0-1][0-9][0-3][0-9][A-Z,0-9]?[A-Z,0-9]?[0-9,A-Z]?$';
  patternPostalCode = '^[0-9]{6}$';
  showRFC : boolean = false;
  genderS : Gender;
  nacionalityS : Nationality;
  club : Footballclub;
  readonly clubs = clubes;
  readonly nacionalities = nacionalidades;
  readonly genders = generos;
  identification : Identification;
  idRandom : string;

  constructor(private ngWizardService: NgWizardService, private fb: FormBuilder,
    private alta : MyApiService) { }

    ngOnInit(): void{
      this.initForms();
      this.identification = new Identification();
      let footballC = new Footballclub();
      let nationality = new Nationality();
      this.identification.footballClub = footballC;
      this.identification.nationality = nationality;

      let firstId = Math.floor(Math.random() * (99999)) + 1;
      let secondId = Math.floor(Math.random() * (99)) + 1;
      let thirtId = Math.floor(Math.random() * (99)) + 1;
      let fourthId = Math.floor(Math.random() * (9999)) + 1;
      this.idRandom = firstId.toString().padStart(5, '0') + ' ' + secondId.toString().padStart(2, '0') +
      ' ' + thirtId.toString().padStart(2, '0') + ' ' + fourthId.toString().padStart(4, '0');

    }

    stepStates = {
      normal: STEP_STATE.normal,
      disabled: STEP_STATE.disabled,
      error: STEP_STATE.error,
      hidden: STEP_STATE.hidden
    };

    config: NgWizardConfig = {
      selected: 0,
      theme: THEME.arrows,
      toolbarSettings: {
        toolbarExtraButtons: [
          { text: 'Finish', class: 'btn btn-info', event: () => { alert("Finished!!!"); } }
        ],
      }
    };

    showPreviousStep(event?: Event) {
      this.ngWizardService.previous();
    }

    showNextStep(event?: Event) {
      this.ngWizardService.next();
    }

    resetWizard(event?: Event) {
      this.ngWizardService.reset();
    }

    setTheme(theme: THEME) {
      this.ngWizardService.theme(theme);
    }

    stepChanged(args: StepChangedArgs) {
      console.log(args.step);
    }

    isValidTypeBoolean: boolean = true;

    isValidFunctionReturnsBoolean(args: StepValidationArgs) {
      return true;
    }

    isValidFunctionReturnsObservable(args: StepValidationArgs) {
      return of(true);
    }

    initForms(){
      this.idForm1 = this.fb.group({
        name : ["", Validators.required],
        pLastName : ["", Validators.required],
        mLastName : ["", Validators.required],
        birthdate : ["", Validators.required],
        gender : ["", Validators.required],
        nacionality : ["", Validators.required],
        footballClub : ["", Validators.required],
        occupation : ["", Validators.required]
      });

      this.idForm2 = this.fb.group({
        rfc : ["", Validators.pattern(this.patternRFC)],
        noExt : ["", Validators.required],
        street : ["", Validators.required],
        colony : ["", Validators.required],
        postalCode : ["", Validators.pattern(this.patternPostalCode)],
      });
    }

    saveDataId(){
      if(this.idForm1.valid){
        this.identification = new Identification();
        this.identification.name = this.idForm1.get("name").value;
        this.identification.pLastName = this.idForm1.get("pLastName").value;
        this.identification.mLastName = this.idForm1.get("mLastName").value;
        this.identification.birthdate = this.idForm1.get("birthdate").value;
        this.identification.gender = this.genderS;
        this.identification.nationality = this.nacionalityS;
        this.identification.footballClub = this.club;
        this.identification.ocupation = this.idForm1.get("occupation").value;
        this.ngWizardService.next();
      } else{
        alert("Completa el formulario con los datos faltantes");
      }
    }

    savePersonalDataId(){
      if(this.idForm2.valid){
        this.identification.rfc = this.idForm2.get("rfc").value;
        this.identification.numero = this.idForm2.get("noExt").value;
        this.identification.calle = this.idForm2.get("street").value;
        this.identification.colonia = this.idForm2.get("colony").value;
        this.identification.codigoPostal = this.idForm2.get("postalCode").value;
        this.ngWizardService.next();
      } else{
        alert("Completa el formulario con los datos faltantes");
      }
    }

    validateDate(date){
      var today = new Date();
      var minAge = 18;
      var dateF = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
      var dateS = new Date(date.value);
      if(dateS < dateF){
        this.showRFC = true;
      } else {
        this.showRFC = false;
      }
    }

    get name(){
      return this.idForm1.get('name');
    }

    get pLastName(){
      return this.idForm1.get('pLastName');
    }

    get mLastName(){
      return this.idForm1.get('mLastName');
    }

    get birthdate(){
      return this.idForm1.get('birthdate');
    }

    get gender(){
      return this.idForm1.get('gender');
    }

    get nacionality(){
      return this.idForm1.get('nacionality');
    }

    get footballClub(){
      return this.idForm1.get('footballClub');
    }

    get occupation(){
      return this.idForm1.get('occupation');
    }

    get rfc() {
      return this.idForm2.get('rfc');
    }

    get noExt(){
      return this.idForm2.get('noExt');
    }

    get street(){
      return this.idForm2.get('street');
    }

    get colony(){
      return this.idForm2.get('colony');
    }

    get postalCode(){
      return this.idForm2.get('postalCode');
    }

    guardarInfo(){
      this.identification.id = this.idRandom;
      console.log(this.idRandom);
      this.alta.saveId(this.identification).then(res =>{
        alert("Identificacion creada con éxito");
      }).catch( error =>{
        console.log(error);
        alert("Identificacion no creada");
      });
    }

}
