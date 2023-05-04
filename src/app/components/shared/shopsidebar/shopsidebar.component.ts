import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../language-service.service'
import category from '../../../data/shop/shopcategory.json';
import tags from '../../../data/tags.json';

@Component({
  selector: 'app-shopsidebar',
  templateUrl: './shopsidebar.component.html',
  styleUrls: ['./shopsidebar.component.css']
})
export class ShopsidebarComponent implements OnInit {

  constructor(private languageService: LanguageService) {}
  public category = category;
  public tags = tags;
  public currentLanguage: string;
  public widgetTitle: string;

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.currentLanguage = language;
      this.setWidgetTitle(language);
    });
  }
  getCategoryTitle(item: any): string {
    return item.title[this.currentLanguage] || item.title['en'];
  }
  setWidgetTitle(language: string) {
    switch (language) {
      case 'en':
        this.widgetTitle = 'Category';
        break;
      case 'hr':
        this.widgetTitle = 'Kategorija';
        break;
      case 'de':
        this.widgetTitle = 'Kategorie';
        break;
      default:
        this.widgetTitle = 'Category';
        break;
    }
  }

}
