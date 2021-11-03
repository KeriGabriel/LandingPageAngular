import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';
import { StatementComponent } from './statement/statement.component';



@NgModule({
  declarations: [				
    AppComponent,
      NavbarComponent,
      ProductComponent,
      MainComponent,
      StatementComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
