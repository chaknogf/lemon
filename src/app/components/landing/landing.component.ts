import { Component, OnInit } from '@angular/core';
import { IconService } from '../../service/icon.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LandingComponent implements OnInit {

  backgroundImage: string = '';
  gradient: string = '';
  public email: string = '';

  options: { nombre: string; descripcion: string; ruta: string; icon: string }[] = [];

  // iconos
  icons: { [key: string]: any } = {};



  constructor(
    private iconService: IconService,
  ) {

    this.icons = {
      lemon: this.iconService.getIcon('lemon1'),
      heart: this.iconService.getIcon('heart'),
      search: this.iconService.getIcon('search'),
      bag: this.iconService.getIcon('bag'),
      menu: this.iconService.getIcon('menu'),
      clothe: this.iconService.getIcon('clothe')
    }

  }

  ngOnInit() {
    this.updateBackground();
  }

  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  updateBackground(): void {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12) {
      // 🌅 Mañana
      this.backgroundImage = 'assets/images/hero/morning.jpg';
      this.gradient = 'linear-gradient(to bottom, rgba(255,255,255,0.85), rgba(240,248,255,0.7))';
    } else if (hour >= 12 && hour < 18) {
      // 🌞 Tarde
      this.backgroundImage = 'assets/images/hero/afternoon.jpg';
      this.gradient = 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(245,245,245,0.6))';
    } else {
      // 🌙 Noche
      this.backgroundImage = 'assets/images/hero/night.jpg';
      this.gradient = 'linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.85))';
    }
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



  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('Newsletter signup:', this.email);
    this.email = '';
  }

}
