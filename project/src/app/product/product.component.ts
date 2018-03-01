import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() {
    setTimeout(()=>{
      this.productName = "A tree";
    },3000)
  }

  productName = 'A book';
  ngOnInit() {
  }

}
