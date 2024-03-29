import { Component, AfterContentInit, OnInit, OnDestroy } from '@angular/core';
import { LanguageService } from '../../../../language-service.service';
import { ActivatedRoute, Router } from '@angular/router'; 
import shop from '../../../../data/shop/shop.json';

import shopcategory from '../../../../data/shop/shopcategory.json'
import shoptags from '../../../../data/tags.json'
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  private destroyed$ = new Subject<void>();
  // pagination
  page: number = 1; 
  constructor(private router: Router,private route: ActivatedRoute,private languageService: LanguageService) { }
  public shopblock = shop;
  public shopcategory = shopcategory;
  public shoptags = shoptags;

  onPageChange(newPage: number) {
    this.page = newPage;
    
    // Update URL to reflect the current page
    this.router.navigate([], { 
      relativeTo: this.route, 
      queryParams: { page: this.page }, 
      queryParamsHandling: 'merge'
    });
  }

  // Category Filter
  public setCategory(id: any) {
    this.shopcategory = id;
  }
  public getCategory() {
    return this.shopcategory;
  }
  public getPostsByCategory(catId) {
    return this.shopblock = shop.filter(item => { return item.category.includes(parseInt(catId)) });
  }
  // Tag Filter
  public setTag(id: any) {
    this.shoptags = id;
  }
  public getTag() {
    return this.shoptags;
  }
  public getPostsByTags(tagId) {
    return this.shopblock = shop.filter(item => { return item.tags.includes(parseInt(tagId)) });
  }

  // Fetch All filter
  public setPosts() {
    var postsByCategory = this.getCategory() != undefined ? this.getPostsByCategory(this.getCategory()) : '',
      postsByTags = this.getTag() != undefined ? this.getPostsByTags(this.getTag()) : '';

    if ((postsByCategory != '' || postsByCategory != undefined || postsByCategory != null) && postsByCategory.length > 0) {
      this.shopblock = postsByCategory;
    } else if ((postsByTags != '' || postsByTags != undefined || postsByTags != null) && postsByTags.length > 0) {
      this.shopblock = postsByTags;
    } 
  }
  ngOnInit(): void {
    // this.languageService.currentLanguage.subscribe((language) => {
    //   this.setLanguageContent(language);
    // });
    this.languageService.currentLanguage.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((language) => {
      this.setLanguageContent(language);
    });

    this.route.paramMap.pipe(
      takeUntil(this.destroyed$)
    ).subscribe((paramMap) => {
      const catId = paramMap.get('catId');
      const tagId = paramMap.get('tagId');

      this.setCategory(catId);
      this.setTag(tagId);
      this.setPosts();
    });
     // Handle page query parameter
     this.route.queryParams.pipe(
      takeUntil(this.destroyed$)
    ).subscribe(params => {
      if (params.page) {
        this.page = +params.page;
      } else {
        this.page = 1;
      }
    });
  }
  updateLanguageContent(language: string) {
    this.shopblock.forEach(item => {
      if (typeof item.title === 'object') {
        item.localizedTitle = item.title[language];
      }
      if (typeof item.shortdescription === 'object') {
        item.localizedShortDescription = item.shortdescription[language];
      }
    });
  }
  
  
  
  

  sorting: string = "Sorting";
  default: string = "Default";
  byName: string = "By Name";

  setLanguageContent(language: string){
    switch (language) {
         case 'en':
           this.sorting = "Sorting";
           this.default = "Default";
           this.byName = "By Name";
           break;
         case 'hr':
           this.sorting = "Sortiranje";
           this.default = "Obicne vrednosti";
           this.byName = "Po nazivu";
           break;
         case 'de':
           this.sorting = "Sortierung"
           this.default = "Standard"
           this.byName = "Namentlich"
           break;
         default:
           this.sorting = "Sorting";
           this.default = "Default";
           this.byName = "By Name";
           break;
       }
       this.route.queryParams.subscribe(params => {
        const queryParams = { ...params };
        queryParams.lang = language;
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: queryParams,
          queryParamsHandling: 'merge',
        });
      });
       }
  ngAfterContentInit(): void {
    this.setCategory(this.route.snapshot.params.catId);
    this.setTag(this.route.snapshot.params.tagId);
    this.setPosts();
    this.updateLanguageContent(this.languageService.getCurrentLanguage());
  }

  
  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
