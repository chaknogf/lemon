import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>('light');
  theme$ = this.themeSubject.asObservable();

  constructor() {
    // Detectar preferencia del sistema
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.themeSubject.next(prefersDark ? 'dark' : 'light');
    this.updateBodyClass(prefersDark ? 'dark' : 'light');
  }

  setTheme(theme: Theme) {
    this.themeSubject.next(theme);
    this.updateBodyClass(theme);
  }

  toggleTheme() {
    const newTheme = this.themeSubject.value === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  private updateBodyClass(theme: Theme) {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
  }
}
