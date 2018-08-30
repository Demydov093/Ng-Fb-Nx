import {Component, OnDestroy, OnInit} from '@angular/core';
import { ProductsService } from './products.service'
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit, OnDestroy {

  isDisabled = true;
  products = [];
  private productsSubscription: Subscription;


  constructor(private productsService: ProductsService) {
    setTimeout(()=>{
      // this.productName = "A tree";
      this.isDisabled = false;

    },3000)
  }

  productName = 'A book';
  ngOnInit() {
    this.products = this.productsService.getProducts();
    this.productsSubscription = this.productsService.productsUpdated.subscribe(() => {
      this.products = this.productsService.getProducts();
    })
  }

  onAddProduct(f){
    if (f.valid) {
      // this.products.push(f.value.productName);
      this.productsService.addProduct(f.value.productName);
    }
  }
  // onRemoveProduct(productName: string) {
  //   this.products = this.products.filter( p => p !== productName)
  // }
  ngOnDestroy() {
    this.productsSubscription.unsubscribe();
  }
}
