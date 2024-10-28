import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs';

import { ProductService } from '../../shared/product.service';
import { IProductInApp } from '../../../types';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrl: './edit-page.component.scss'
})
export class EditPageComponent implements OnInit {

  public product?: IProductInApp;
  public form: FormGroup = new FormGroup({});
  // public form = new FormGroup({});


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productServ: ProductService
  ) {}


  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(params => {
        return this.productServ.getById(params['id'])
      })
    )
    .subscribe(product => {
      this.product = product;
      this.form = new FormGroup({
        type: new FormControl(this.product.type, [Validators.required]),
        title: new FormControl(this.product.title, [Validators.required]),
        photo: new FormControl(this.product.photo, [Validators.required]),
        info: new FormControl(this.product.info, [Validators.required]),
        price: new FormControl(this.product.price, [Validators.required]),
      })
    })
  }

 
}
