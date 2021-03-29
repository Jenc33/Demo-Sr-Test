import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NgWizardModule, NgWizardConfig, THEME } from 'ng-wizard';
import { SearchIDComponent } from './components/search-id/search-id.component';
import { GenerateIDComponent } from './components/generate-id/generate-id.component';

const ngWizardConfig: NgWizardConfig = {
  theme: THEME.default
};

@NgModule({
  declarations: [
    AppComponent,
    SearchIDComponent,
    GenerateIDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgWizardModule.forRoot(ngWizardConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
