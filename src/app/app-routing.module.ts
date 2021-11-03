import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { StatementComponent } from './statement/statement.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'product', component: ProductComponent },
  { path: 'about', component: StatementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
