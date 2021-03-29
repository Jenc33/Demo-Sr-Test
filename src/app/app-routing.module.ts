import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GenerateIDComponent } from './components/generate-id/generate-id.component';
import { SearchIDComponent } from './components/search-id/search-id.component';


const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'generateId', component: GenerateIDComponent },
  { path: 'searchId', component: SearchIDComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
