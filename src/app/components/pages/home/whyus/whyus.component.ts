import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../../../language-service.service';

@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
  styleUrls: ['./whyus.component.css']
})
export class WhyusComponent implements OnInit {

  constructor(private languageService: LanguageService) { }
  list = [
    {title:"Specialist Company Advisor Team"},
    {title:"Understanding Machines Open Standard"},
    {title:"Can Data Visualization Improve Mobile"},
  ];

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.setLanguageContent(language);
    });
  }
  titleTag: string = "What We Do";
  description: string = "Uni-Ves-Plast d.o.o. ist ein Unternehmen, dass im Jahr 2013, auf Grund der langjährigen Erfahrung seiner Gründer in der Produktion verschiedener Produkte aus Kunststoff, gegründet würde. Die Marke PAQ umfasst Einweg- und Mehrwegprodukte. Die Produktion erfolgt durch die modernsten Maschinen großer Kapazitäten.";
  setLanguageContent(language: string){
    switch (language) {
         case 'en':
           this.titleTag = "What We Do";
           this.description = "Uni-Ves-Plast d.o.o. is a company established in 2013 based on the long-term experience of its founders in the production of various plastic products. The PAQ brand includes disposable and reusable products. The production is carried out by the most modern machines of large capacities.";
           break;
         case 'hr':
           this.titleTag = "Sta Mi Radimo";
           this.description = "Uni-Ves-Plast d.o.o. je tvrtka osnovana 2013. godine na temelju dugogodišnjeg iskustva osnivača u proizvodnji raznih proizvoda od plastike. Marka PAQ uključuje proizvode za jednokratnu i višekratnu upotrebu. Proizvodnja se odvija na najsuvremenijim strojevima velikih kapaciteta.";
           break;
         case 'de':
           this.titleTag = "Wer sind Wir?"
           this.description = "Uni-Ves-Plast d.o.o. ist ein Unternehmen, dass im Jahr 2013, auf Grund der langjährigen Erfahrung seiner Gründer in der Produktion verschiedener Produkte aus Kunststoff, gegründet würde. Die Marke PAQ umfasst Einweg- und Mehrwegprodukte. Die Produktion erfolgt durch die modernsten Maschinen großer Kapazitäten."
           break;
         default:
           this.titleTag = "What We Do";
           this.description = "Uni-Ves-Plast d.o.o. is a company established in 2013 based on the long-term experience of its founders in the production of various plastic products. The PAQ brand includes disposable and reusable products. The production is carried out by the most modern machines of large capacities.";
           break;
       }
       }
}
