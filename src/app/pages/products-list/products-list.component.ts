import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-products-list',
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Kiebab',
      price: 109,
      image: '',
    },
  ]);
}
