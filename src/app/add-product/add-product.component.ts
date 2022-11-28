import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

  title = ""
  image = ""
  description = ""
  rate = ""
  sellerName = ""
  quantity = ""

  productValues=()=>
  {
    let data:any = {"title":this.title,"price":this.rate,"description":this.description,"image":this.image,"quantity": this.quantity}
    
    console.log(data);
  }

    
  }





