import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';


interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}
@Component({
  selector: 'app-featured-collection',
  templateUrl: './featured-collection.component.html',
  styleUrls: ['./featured-collection.component.css'],
  standalone: true,
  imports: [
    CommonModule
  ]

})
export class FeaturedCollectionComponent implements OnInit {



  constructor() { }


  ngOnInit() {
  }

  products: Product[] = [
    {
      id: 1,
      name: 'Falda de Flores',
      price: 'Q189',
      image: 'assets/product1.jpeg',
      category: 'Dresses',
    },
    {
      id: 2,
      name: 'Blazer',
      price: 'Q245',
      image: 'assets/product2.jpeg',
      category: 'Outerwear',
    },
    {
      id: 3,
      name: 'Aretes Dorados',
      price: 'Q78',
      image: 'assets/product3.jpeg',
      category: 'Accessories',
    },
    {
      id: 4,
      name: 'Pantalones Casuales',
      price: 'Q156',
      image: 'assets/product4.jpeg',
      category: 'Bottoms',
    },
  ];

}
