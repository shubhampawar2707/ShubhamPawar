import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio1';
  isMobileMenuOpen = false;
  currentRoute: string = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  isSpecialRoute(): boolean {
    return this.currentRoute.includes('/about') || 
           this.currentRoute.includes('/experience') || 
           this.currentRoute.includes('/projects');
  }
  
  isExtraSpacingRoute(): boolean {
    return this.currentRoute.includes('/experience') || 
           this.currentRoute.includes('/projects');
  }
}
