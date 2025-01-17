import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../shared/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrl: './add-page.component.scss',
})
export class AddPageComponent {
  
  public submitted: boolean = false;

  constructor(
    private productServ: ProductService,
    private router: Router
  ) {}

  submit() {
    if (this.form.invalid) {
      return
    }

    this.submitted = true

    const product = {
      type: this.form.value.type,
      title: this.form.value.title,
      photo: this.form.value.photo,
      info: this.form.value.info,
      price: this.form.value.price,
      date: new Date()
    };

    this.productServ.create(product).subscribe(res => {
      this.form.reset();
      this.submitted = false;
      this.router.navigate(['/'])
    })
  }

  public form = new FormGroup({
    type: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    photo: new FormControl(null, [Validators.required]),
    info: new FormControl(null, [Validators.required]),
    price: new FormControl(null, [Validators.required]),
    
  });
}
