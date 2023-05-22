import { Component, OnInit } from '@angular/core';
import shop from '../../../data/shop/shop.json';
import { LanguageService } from '../../../language-service.service';

@Component({
  selector: 'app-relatedshop',
  templateUrl: './relatedshop.component.html',
  styleUrls: ['./relatedshop.component.css']
})
export class RelatedshopComponent implements OnInit {
  public currentLanguage: string;

   constructor(private languageService: LanguageService) { 
  }
  relatedText: string;
  public shopblock = shop;
  settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    dots: false,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    ]
  };

    ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.setParagraphText(language);
      this.currentLanguage = language;
    });  
  }
  setParagraphText(language: string): void {
  if (language === 'en') {
    this.relatedText = 'Related Products';
  } else if (language === 'hr') {
    this.relatedText = 'Slicni Proizvodi.';
  } else if (language === 'de') {
    this.relatedText = 'Verwandte Produkte.';
  } else {
    this.relatedText = '';
  }
}

}
