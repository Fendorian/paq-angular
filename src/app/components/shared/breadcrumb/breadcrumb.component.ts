import { Component, OnInit, OnDestroy, Input  } from '@angular/core';
import { LanguageService } from '../../../language-service.service';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  
  @Input() bgImageUrl: string;

  translations = {
    about: {
      en: 'About Us',
      hr: 'O nama',
      de: 'Über uns'
    },
    contact: {
      en: 'Contact Us',
      hr: 'Kontaktirajte nas',
      de: 'Kontaktiere üns'
    },
    products: {
      en: 'Products',
      hr: 'Proizvodi',
      de: 'Produkte'
    },
    'product-details': {
      en: 'Products',
      hr: 'Proizvodi',
      de: 'Produkte'
    }
  }

  private destroyed$ = new Subject<void>();

  constructor(private languageService: LanguageService, private router: Router, activateRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.languageService.currentLanguage.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((language) => {
      this.setLanguageContent(language);
    });
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroyed$)
    ).subscribe(() => {
      this.setLanguageContent(this.languageService.getCurrentLanguage());
    });
  }
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
  titleTag: string = "test";
  setLanguageContent(language: string) {
    const url = this.router.url.split('?')[0]; // remove the query parameters
    const urlSegments = url.split('/');
    let routeName = '';
  
    // If we're on a 'shop' route, map to 'products'
    if(urlSegments.includes('shop')) {
      routeName = 'products';
    }
    // If we're on a 'product-details' route, map to 'product-details'
    else if(urlSegments.includes('product-details')) {
      routeName = 'product-details';
    }
    // Otherwise, use the last segment of the URL as the routeName
    else {
      routeName = urlSegments[urlSegments.length - 1];
    }
  
    this.titleTag = this.translations[routeName]?.[language] || 'Products';
  }
  
  
  
  
  
  


}
