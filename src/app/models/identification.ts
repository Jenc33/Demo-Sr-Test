import { Footballclub } from "./footballclub";
import { Gender } from "./gender";
import { Nationality } from "./nationality";

export class Identification {
  public id : string;
  public name : string;
  public pLastName : string;
  public mLastName : string;
  public birthdate : Date;
  public gender : Gender;
  public nationality : Nationality;
  public footballClub : Footballclub;
  public rfc : string;
  public ocupation : string;
  public calle : string;
  public numero : string;
  public colonia : string;
  public codigoPostal : number;
}
