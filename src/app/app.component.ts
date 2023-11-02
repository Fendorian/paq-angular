import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BreadcrumbService, Breadcrumb } from 'angular-crumbs';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { LanguageService } from './language-service.service';
import { Subscription } from 'rxjs';
import translations from './data/translations.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  private languageSubscription: Subscription;
  private breadcrumbSubscription: Subscription;
  private currentCrumbs: Breadcrumb[];

  constructor(
    private titleService: Title,
    private breadcrumbService: BreadcrumbService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languageSubscription = this.languageService.currentLanguage.subscribe(() => {
      if (this.currentCrumbs) {
        // If there are already breadcrumbs, update the title
        this.titleService.setTitle(this.createTitle(this.currentCrumbs));
      }
    });

    this.breadcrumbSubscription = this.breadcrumbService.breadcrumbChanged.subscribe(crumbs => {
      this.currentCrumbs = crumbs;
      this.titleService.setTitle(this.createTitle(crumbs));
    });
  }

  private createTitle(routesCollection: Breadcrumb[]): string {
    const title = 'Paq';
    const titles = routesCollection.filter((route) => route.displayName);

    if (!titles.length) { return title; }

    const routeTitle = this.titlesToString(titles);
    return `${title}${routeTitle}`;
  }

  private titlesToString(titles: Breadcrumb[]): string {
    const currentLanguage = this.languageService.getCurrentLanguage();

    return titles.reduce((prev, curr) => {
      const translation = translations[curr.displayName][currentLanguage];
      return `${prev} | ${translation}`;
    }, '');
  }

  ngOnDestroy() {
    // Don't forget to unsubscribe when the component is destroyed
    if (this.languageSubscription) {
      this.languageSubscription.unsubscribe();
    }
    
    if (this.breadcrumbSubscription) {
      this.breadcrumbSubscription.unsubscribe();
    }
  }

  onActivate(event){
    window.scroll(0,0);
  }
}
