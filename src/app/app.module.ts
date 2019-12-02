import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlateauComponent } from './plateau/plateau.component';
import { CommentateurComponent } from './commentateur/commentateur.component';
import { PionComponent } from './pion/pion.component';

@NgModule({
  declarations: [
    AppComponent,
    PlateauComponent,
    CommentateurComponent,
    PionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
