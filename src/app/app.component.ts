import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  show : boolean = false;
  constructor(private router: Router){

  }

  title = 'sr-test';

  ngOnInit(): void
  {

  }

  altaId(){
    this.router.navigateByUrl('generateId');
    this.show = true;
  }

  searchId(){
    this.router.navigateByUrl('searchId');
    this.show = true;
  }
}

