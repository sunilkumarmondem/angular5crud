import { Injectable } from '@angular/core';
import {Product} from './product';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import{HttpClient,HttpHeaders} from '@angular/common/http';
import {catchError,tap,map} from 'rxjs/operators';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }

  private url="http://localhost:3000/products";

  getproducts():Observable<Product[]>{
  return this.http.get<Product[]>(this.url).pipe(tap(data=>console.log(data)));
  }

  getproductdetail(id):Observable<Product>{
  const uri=`${this.url}/${id}`;
  return this.http.get<Product>(uri).pipe(tap(data =>console.log(data)));
  }


  addproducts(product):Observable<Product>{
  return this.http.post<Product>(this.url,product,httpOptions).pipe(tap(data=>console.log(data)));
  }

  deleteproduct(productid):Observable<Product>{
  const url=`${this.url}/${productid}`;
  return this.http.delete<Product>(url,httpOptions).pipe(tap(data=>console.log(data)));
  }


  updateproduct(product):Observable<any>{
  return this.http.put(`${this.url}/${product.id}`,product,httpOptions).pipe(tap(data =>console.log(data)));

  }


}
