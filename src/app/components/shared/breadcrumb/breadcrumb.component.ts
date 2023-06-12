import { Component, OnInit, Input  } from '@angular/core';
import { LanguageService } from '../../../language-service.service';
import { Router } from '@angular/router';

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
      en: 'Shop',
      hr: 'Proizvodi',
      de: 'Produkte'
    }
  }

  constructor(private languageService: LanguageService, private router: Router) { }


  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.setLanguageContent(language);
    });
  }
  titleTag: string = "test";
  setLanguageContent(language: string) {
    const routeName = this.router.url.substring(1); // remove the leading '/'
    this.titleTag = this.translations[routeName]?.[language] || 'Products';
  }


}
