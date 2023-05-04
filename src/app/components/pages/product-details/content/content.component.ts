import { Component, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import shop from '../../../../data/shop/shop.json';
import authors from '../../../../data/team.json';
import { LanguageService } from '../../../../language-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements AfterContentInit {

  constructor(private router: ActivatedRoute,private languageService: LanguageService) { }
  public shopdetails = shop;
  public authors = authors;

  public getAuthor(items: string | any[]) {
    var elems = authors.filter((item: { id: string; }) => {
      return items.includes(item.id)
    });
    return elems;
  }
  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.setLanguageContent(language);
    });
  }
  updateLanguageContent(language: string) {
    this.shopdetails.forEach(item => {
      item.localizedTitle = item.title[language];
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
       this.updateLanguageContent(language);
       }

  public setPost(id: any) {
    this.shopdetails = shop.filter((item: { id: any; }) => { return item.id == id });
  }
  // Increment decrement
  public counter: number = 1
  increment() {
    this.counter += 1;
  }
  decrement() {
    this.counter -= 1;
  }
  // Settings
  settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    focusOnSelect: true,
    nextArrow: '<button class="slick-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
    prevArrow: '<button class="slick-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
    asNavFor: '.slick-thumbs'
  };
  settingsThumb = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    vertical: true,
    autoplay: true,
    autoplaySpeed: 6000,
    focusOnSelect: true,
    asNavFor: '.product-gallery-slider',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          vertical: false,
        }
      }
    ]
  };

  ngAfterContentInit(): void {
    this.setPost(this.router.snapshot.params.id);
  }

}
