import { Component, OnInit } from '@angular/core';
import{ProductService} from '../product.service';
import {Product} from '../product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private service:ProductService) { }

  ngOnInit() {
  this.getproductsfromservice();
  }

  private hiddenform:boolean=true;


  products:Product[];

  getproductsfromservice(){
  this.service.getproducts().subscribe(data=>this.products=data);
  }

  addproduct(product){
  this.service.addproducts(product).subscribe(data =>this.products.push(data));
  this.hiddenform=true;
  }

  newproduct(){
  this.hiddenform=false;
  }

  delete(productid){
  this.service.deleteproduct(productid).subscribe(()=>this.getproductsfromservice());
 
  }


}
