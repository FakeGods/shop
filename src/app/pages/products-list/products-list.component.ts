import { Component } from '@angular/core';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-products-list',
  imports: [],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent {
  products = signal<Product[]>([{}]);
}
