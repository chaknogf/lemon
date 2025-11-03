import { heart, search, bag, menu } from './../../shared/icons/icons';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { lemon1 } from '../../shared/icons/icons';
import { IconService } from '../../service/icon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent implements OnInit {

  backgroundImage: string = '';
  gradient: string = '';

  options: { nombre: string; descripcion: string; ruta: string; icon: string }[] = [];

  // iconos
  icons: { [key: string]: any } = {};

<<<<<<< HEAD


  constructor(
=======
  private sanitizarSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  logo: SafeHtml = lemon1;
  heart: SafeHtml = heart;
  search: SafeHtml = search;
  bag: SafeHtml = bag;
  menu: SafeHtml = menu;

  constructor(
    private sanitizer: DomSanitizer,
>>>>>>> fd96447 (Primer commit: proyecto Lemon inicial)
    private iconService: IconService,
  ) {

    this.icons = {
<<<<<<< HEAD
      lemon: this.iconService.getIcon('lemon1'),
      heart: this.iconService.getIcon('heart'),
      search: this.iconService.getIcon('search'),
      bag: this.iconService.getIcon('bag'),
      menu: this.iconService.getIcon('menu'),
      clothe: this.iconService.getIcon('clothe')
=======
      lemon: this.sanitizarSvg(lemon1),
      heart: this.sanitizarSvg(heart),
      search: this.sanitizarSvg(search),
      bag: this.sanitizarSvg(bag),
      menu: this.sanitizarSvg(menu),
>>>>>>> fd96447 (Primer commit: proyecto Lemon inicial)
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

}
