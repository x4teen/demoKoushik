import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { FormsModule } from '@angular/forms';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [
    AppComponent,
    AddressCardComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
