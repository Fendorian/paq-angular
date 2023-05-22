import { Component, OnInit } from '@angular/core';
import blogpost from '../../../data/blog/blog.json';
import productData from '../../../data/product/product.json';
import { LanguageService } from '../../../language-service.service';  // adjust this import path as necessary


@Component({
  selector: 'app-relatedpost',
  templateUrl: './relatedpost.component.html',
  styleUrls: ['./relatedpost.component.css']
})
export class RelatedpostComponent implements OnInit {
  public blogpost = blogpost;
  public products = productData;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.updateLanguageContent(language);
    });
  }
  updateLanguageContent(language: string) {
    this.products.forEach(item => {
      if (typeof item.title === 'object') {
        item.localizedTitle = item.title[language];
      }
      // similar logic for other fields
    });
  }

}
