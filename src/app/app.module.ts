import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { FormsModule } from '@angular/forms';
import { ViewModule } from './view/view.module';
import { TestService } from './service/test.service';

@NgModule({
  declarations: [AppComponent, AddressCardComponent],
  imports: [BrowserModule, FormsModule, ViewModule],
  providers: [TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
