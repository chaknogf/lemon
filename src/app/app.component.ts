import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedCollectionComponent } from './components/featured-collection/featured-collection.component';
import { CategoryShowcaseComponent } from './components/category-showcase/category-showcase.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from "./components/landing/landing.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    LandingComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
