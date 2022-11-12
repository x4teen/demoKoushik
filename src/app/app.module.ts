import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { FormsModule } from '@angular/forms';
import { ViewModule } from './view/view.module';
import { TestService } from './service/test.service';
import { SecondViewComponent } from './view/second-view/second-view.component';

@NgModule({
  declarations: [AppComponent, AddressCardComponent, SecondViewComponent],
  imports: [BrowserModule, FormsModule, ViewModule, HttpClientModule],
  providers: [TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
