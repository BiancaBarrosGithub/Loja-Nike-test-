import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Iproducts[] = [
    { id: 1, name: 'Tênis Nike Preto', price: 300.0, description: 'Tênis Nike Revolution 7 - Masculino', image: './image.png'},
    { id: 2, name: 'Tênis Nike Azul ', price: 950.0, description: 'Zoom Vomero 5', image: './image1.png' },
    { id: 3, name: 'Tênis Nike Branco', price: 2000.0, description: 'Kobe 8 Proto', image: './image2.png' }
  ];
  getProducts(): Iproducts[] {
    return this.products;
  }
}
