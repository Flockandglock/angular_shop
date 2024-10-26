import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { environment } from '../../environments/environment';

import { IFbResponse, IProduct } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  create(product: IProduct) {
    return this.http.post(`${environment.fbDbURL}/products.json`, product)
      .pipe(map((res: any) => {
        return {
          ...product,
          id: res.name,
          date: new Date(product.date)
        }
      }))
  }

  public getAll(): Observable<IProduct[]> {
    return this.http.get<Record<string, IProduct>>(`${environment.fbDbURL}/products.json`)
      .pipe(map((res) => {
        return Object.keys(res)
          .map(key => ({
            ...res[key],
            id: key,
            date: new Date(res[key].date)
          }))
      }))
  }

  public getById(id:string): Observable<IProduct> {
    return this.http.get<IProduct>(`${environment.fbDbURL}/products/${id}.json`)
      .pipe(map((res: IProduct) => {
        return {
            ...res,
            id,
            date: new Date(res.date)
          }
      }))
  }
}
