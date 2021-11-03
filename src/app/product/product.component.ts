import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor(private router: ActivatedRoute, private route: Router) { }
  
  product: any = null;
  productList: any[] =[
    {
      productName: "Watch 3000",
      productDiscription: "A pretium nisl. Phasellus et ornare justo, eleifend aliquam lacus.  Aenean malesuada tortor eu ipsum faucibus venenatis. "     
    },
    {
      productName: "Watch 500",
      productDiscription: "A pretium nisl. Phasellus et ornare justo, eleifend aliquam lacus. Aenean malesuada tortor eu ipsum faucibus venenatis. "     
    },
    {
      productName: "Watch G10",
      productDiscription: "A pretium nisl. Phasellus et ornare justo, eleifend aliquam lacus. Aenean malesuada tortor eu ipsum faucibus venenatis. "     
    }
  ];
  ngOnInit() {
    for (let index = 0; index < this.productList.length; index++) {
      this.product = this.productList[index];
      
    }
   
  }
  goHome() {
    this.route.navigate(['home']);
  }
}
