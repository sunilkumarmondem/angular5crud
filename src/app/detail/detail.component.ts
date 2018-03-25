import { Component, OnInit } from '@angular/core';
import {Product} from '../product';
import {ActivatedRoute} from '@angular/router';
import {Location} from'@angular/common';
import{ProductService} from'../product.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {


  constructor(private service:ProductService,private route:ActivatedRoute,private location:Location) { }

  product:Product;

  ngOnInit() {
  this.getproductsfromroute();
  }


  getproductsfromroute(){

  const id=+this.route.snapshot.paramMap.get('id');
  this.service.getproductdetail(id).subscribe(data=>this.product=data);


  }

  goback(){
  this.location.back();
  }


  save(){
  this.service.updateproduct(this.product).subscribe(()=>this.goback());
  }

}
