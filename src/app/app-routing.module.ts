import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { DetailComponent } from './detail/detail.component';
import {Product} from './product';


const routes: Routes = [
{path:'',component:ProductComponent},

{path:'home',component:ProductComponent},

{path:'detail/:id',component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
