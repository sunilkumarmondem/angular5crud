import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './detail/detail.component';
import{ProductService} from './product.service';
import {HttpClientModule} from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
