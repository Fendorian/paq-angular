// import { Component, OnInit, HostListener, Inject, LOCALE_ID, ViewChild } from '@angular/core';
// import { DOCUMENT } from '@angular/common';
// import navigation from '../../../data/navigation.json';
// import { FooterComponent } from '../../shared/footer/footer.component';
// import { LanguageService } from '../../../language-service.service';

// @Component({
//   selector: 'app-header-one',
//   templateUrl: './header-one.component.html',
//   styleUrls: ['./header-one.component.css']
// })
// export class HeaderOneComponent implements OnInit {

//   constructor(@Inject(DOCUMENT) private document: Document,
//   @Inject(LOCALE_ID) private locale: string,
//   private languageService: LanguageService
//   ) { }

//   selectedLanguage$ = this.languageService.currentLanguage;

//   @ViewChild(FooterComponent, { static: false }) footerComponent: FooterComponent;


//   selectedLanguage = localStorage.getItem('language') || 'en';

//   changeLanguage(lang: string) {
//     this.selectedLanguage = lang;
//     localStorage.setItem('language', lang);
//     location.reload(); // Reload the application to apply the new language
//   }

//   translateNavigation(): void {
//     this.navigation = navigation.map(item => {
//       if (item.child) {
//         item.submenu = item.submenu.map(subitem => {
//           if (subitem.translations && subitem.translations[this.selectedLanguage]) {
//             subitem.linkText = subitem.translations[this.selectedLanguage].linkText;
//           }
//           return subitem;
//         });
//       }
//       if (item.translations && item.translations[this.selectedLanguage]) {
//         item.linkText = item.translations[this.selectedLanguage].linkText;
//       }
//       return item;
//     });
//   }
  
  

//   // Sticky Nav
//   @HostListener('window:scroll', ['$event'])
//   onWindowScroll(event: Event) {
//     if (document.body.scrollTop > 100 ||
//       document.documentElement.scrollTop > 100) {
//       document.getElementById('can-sticky').classList.add('sticky-on');
//     }
//     else {
//       document.getElementById('can-sticky').classList.remove('sticky-on');
//     }
//   }

//   public navigation = navigation.map(item => {
//     if (item.child) {
//       item.submenu = item.submenu.map(subitem => {
//         if (subitem.translations && subitem.translations[this.selectedLanguage]) {
//           subitem.linkText = subitem.translations[this.selectedLanguage].linkText;
//         }
//         return subitem;
//       });
//     }
//     if (item.translations && item.translations[this.selectedLanguage]) {
//       item.linkText = item.translations[this.selectedLanguage].linkText;
//     }
//     return item;
//   });

//   // Navigation
//   navmethod: boolean = true;
//   toggleNav() {
//     this.navmethod = !this.navmethod;
//   }
//   // Mobile 
//   open: boolean = false;
//   trigger(item: { open: boolean; }) {
//     item.open = !item.open;
//   }
//   // Add class on resize and onload window
//   visible: boolean = false;
//   breakpoint: number = 991;
//   public innerWidth: any;
//   detectHeader() {
//     this.innerWidth = window.innerWidth;
//     this.visible = this.innerWidth >= this.breakpoint;
//   }
//   ngOnInit(): void {
//     this.detectHeader();
//     this.translateNavigation();
    
//   }
// }
import { Component, OnInit, HostListener, Inject, LOCALE_ID, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import navigation from '../../../data/navigation.json';
import { FooterComponent } from '../../shared/footer/footer.component';
import { LanguageService } from '../../../language-service.service';

@Component({
  selector: 'app-header-one',
  templateUrl: './header-one.component.html',
  styleUrls: ['./header-one.component.css']
})
export class HeaderOneComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document,
    @Inject(LOCALE_ID) private locale: string,
    private languageService: LanguageService
  ) { }

  selectedLanguage$ = this.languageService.currentLanguage;

  @ViewChild(FooterComponent, { static: false }) footerComponent: FooterComponent;

  ngOnInit(): void {
    this.detectHeader();
    this.translateNavigation();

    this.languageService.currentLanguage.subscribe(lang => {
      this.selectedLanguage = lang;
      this.translateNavigation();
    });
  }

  selectedLanguage = localStorage.getItem('language') || 'en';

  changeLanguage(lang: string) {
    this.languageService.changeLanguage(lang);
    localStorage.setItem('language', lang);
    location.reload(); // Reload the application to apply the new language
  }

  translateNavigation(): void {
    this.navigation = navigation.map(item => {
      if (item.child) {
        item.submenu = item.submenu.map(subitem => {
          if (subitem.translations && subitem.translations[this.selectedLanguage]) {
            subitem.linkText = subitem.translations[this.selectedLanguage].linkText;
          }
          return subitem;
        });
      }
      if (item.translations && item.translations[this.selectedLanguage]) {
        item.linkText = item.translations[this.selectedLanguage].linkText;
      }
      return item;
    });
  }

  // Sticky Nav
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    if (document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100) {
      document.getElementById('can-sticky').classList.add('sticky-on');
    }
    else {
      document.getElementById('can-sticky').classList.remove('sticky-on');
    }
  }

  public navigation = navigation;

  // Navigation
  navmethod: boolean = true;
  toggleNav() {
    this.navmethod = !this.navmethod;
  }
  // Mobile 
  open: boolean = false;
  trigger(item: { open: boolean; }) {
    item.open = !item.open;
  }
  // Add class on resize and onload window
  visible: boolean = false;
  breakpoint: number = 991;
  public innerWidth: any;
  detectHeader() {
    this.innerWidth = window.innerWidth;
    this.visible = this.innerWidth >= this.breakpoint;
  }
}
