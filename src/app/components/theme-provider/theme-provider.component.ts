import { Component, Input, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Theme = 'light' | 'dark';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  setTheme(theme: Theme) {
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', theme);
      }
    } catch {
      // noop in non-browser environments
    }
  }
}

@Component({
  selector: 'app-theme-provider',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
})
export class ThemeProviderComponent {
  @Input() defaultTheme: Theme = 'light';

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.setTheme(this.defaultTheme);
  }
}
