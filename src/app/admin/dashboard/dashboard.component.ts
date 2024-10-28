import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ProductService } from '../../shared/product.service';

import { IProductInApp } from '../../../types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

  // public products$?: Observable<IProductInApp[]>;
  public products?: IProductInApp[];
  public pSub?: Subscription;
  public rSub?: Subscription;

  constructor(
    private productServ: ProductService,
    
  ) {}


  ngOnInit(): void {
    this.pSub = this.productServ.getAll().subscribe(products => {
      console.log(products)
      this.products = products
    })
  }

  ngOnDestroy() {
    if (this.pSub) {
      this.pSub.unsubscribe()
    }

    if (this.rSub) {
      this.rSub.unsubscribe()
    }
  }

  remove(id: string) {
    this.rSub = this.productServ.remove(id).subscribe(() => {
      this.products = this.products?.filter(product => product.id !== id)
    })
  }
  
}
