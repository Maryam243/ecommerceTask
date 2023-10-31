import { Component, OnInit } from '@angular/core';
import { ServicsProductsService } from '../../services/servics-products.service';

@Component({
  selector: 'app-all-producs',
  templateUrl: './all-producs.component.html',
  styleUrls: ['./all-producs.component.css'],
})
export class AllProducsComponent implements OnInit {
  products: any[] = [];

  constructor(private service: ServicsProductsService) {}

  ngOnInit(): void {
    this.getAllProduts();
  }
  
  getAllProduts() {
    this.service.getAllProducts().subscribe((res: any) => {
      this.products = res.products;
      console.log(this.products);
    });
  }
  // getAllProduts() {
  //   this.service.getAllProducts().subscribe({
  //     next: (res) => {
  //       this.products = res.products; 
  //       console.log(res);
  //     },
  //     error: (error) => {
  //       console.log(error.Message);
  //     },
  //   });
  // }
}
