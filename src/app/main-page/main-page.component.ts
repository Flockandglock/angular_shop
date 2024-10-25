import { Component, OnInit } from '@angular/core';

import { ProductService } from '../shared/product.service';
import { IProduct } from '../../types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {

  public products$?: Observable<IProduct[]>;

  constructor(
    private prudactServ: ProductService
  ) {

  }
  ngOnInit(): void {
    this.products$ = this.prudactServ.getAll()
  }
}
