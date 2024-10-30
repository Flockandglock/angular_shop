import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { IProduct } from '../../types';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent implements OnInit {

  public product$?: Observable<IProduct>;

  constructor(
    private productServ: ProductService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.product$ = this.route.params
      .pipe(switchMap(params => {
        return this.productServ.getById(params['id'])
      }))
  }
}
