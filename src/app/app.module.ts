import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddproduitComponent } from './application/addproduit/addproduit.component';
import { ListproduitsComponent } from './application/listproduits/listproduits.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproduitComponent,
    ListproduitsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
