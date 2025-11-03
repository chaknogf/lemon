import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturedCollectionComponent } from './components/featured-collection/featured-collection.component';
import { CategoryShowcaseComponent } from './components/category-showcase/category-showcase.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
<<<<<<< HEAD
import { LandingComponent } from "./components/landing/landing.component";
=======
>>>>>>> fd96447 (Primer commit: proyecto Lemon inicial)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
<<<<<<< HEAD

    LandingComponent
=======
    HeaderComponent,
    HeroComponent,
    FeaturedCollectionComponent,
    CategoryShowcaseComponent,
    NewsletterComponent,
    FooterComponent
>>>>>>> fd96447 (Primer commit: proyecto Lemon inicial)
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
