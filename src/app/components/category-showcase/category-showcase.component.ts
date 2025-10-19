import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-showcase',
  templateUrl: './category-showcase.component.html',
  styleUrls: ['./category-showcase.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CategoryShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  categories = [
    {
      name: 'Moda de Otoño',
      description: 'Luz, calidez para la temporada',
      image: 'assets/categoria1.jpeg',
      span: 'lg:col-span-2',
    },
    {
      name: 'Accessorios',
      description: 'Completa tu look',
      image: 'assets/categoria2.jpeg',
      span: 'lg:col-span-1',
    },
    {
      name: 'Moda en todas partes',
      description: 'Sofisticación y elegancia',
      image: 'assets/categoria3.jpeg',
      span: 'lg:col-span-1',
    },
    {
      name: 'Casual Chic',
      description: 'Confort y estilo diario',
      image: 'assets/categoria4.jpeg',
      span: 'lg:col-span-2',
    },
  ];

}
