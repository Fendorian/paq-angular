import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../../language-service.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  
  banner: any[] = [];

  constructor(private languageService: LanguageService) { }
  settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    arrows: true,
    fade: false,
    dots: false,
    swipe: true,
    adaptiveHeight: true,
    nextArrow: '<button class="slick-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
    prevArrow: '<button class="slick-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  };

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.setBannerContent(language);
    });
  }
  buttonText: string = 'Get Started Now';

  setBannerContent(language: string) {
    const enBanner = {
      img: "assets/img/banner/topslider.jpg",
      subtitle: "PAQ is one of the leading manufacturers of PS and PP cups for the food industry in the region.",
      title: "Visit the world of our products."
    };
    const hrBanner = {
      img: "assets/img/banner/topslider.jpg",
      subtitle: "PAQ je jedan od vodećih proizvođača PS i PP čaša za prehrambenu industriju u regiji.",
      title: "Posjetite naš svijet proizvoda."
    };
    const deBanner = {
      img: "assets/img/banner/topslider.jpg",
      subtitle: "PAQ ist regionweit einer der führenden Hersteller von PS-und PP-Bechern für die Lebensmittelindustrie.",
      title: "Besuchen Sie unsere Produktwelt."
    };

    switch (language) {
      case 'en':
        this.banner = [enBanner];
        this.buttonText = 'Products';
        break;
      case 'hr':
        this.banner = [hrBanner];
        this.buttonText = 'Proizvodi';
        break;
      case 'de':
        this.banner = [deBanner];
        this.buttonText = 'Produkte';
        break;
      default:
        this.banner = [enBanner];
        this.buttonText = 'Products';
        break;
    }
}
}