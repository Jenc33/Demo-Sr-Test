import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { API } from '../lib/api';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  public api : API


  constructor(
    public _http: HttpClient
      
  ) {
    this.api = new API(_http);

  }
  
}
