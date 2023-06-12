import { Component, OnInit } from '@angular/core';
import list from '../../../../data/aboutlist.json';
import { LanguageService } from '../../../../language-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  constructor(public languageService: LanguageService) { }
  public list = list;

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.setLanguageContent(language);
  });
}
  mainTitle1: string = "Company & Brand";
  mainTitle3: string = "OUT MISSION";
  mainTitle4: string = "SOCIAL RESPONSIBILITY";
  description1: string = "Uni-Ves-Plast d.o.o. ist ein Unternehmen, dass im Jahr 2013, auf Grund der langjährigen Erfahrung seiner Gründer in der Produktion verschiedener Produkte aus Kunststoff, gegründet würde. Die Marke PAQ umfasst Einweg- und Mehrwegprodukte. Die Produktion erfolgt durch die modernsten Maschinen großer Kapazitäten.";
  description3: string = "We employ responsible staff who produce high-quality and safe products with the best machines and materials.";
  description4: string = "Uni-Ves-Plast d.o.o. promotes environmental awareness in the community with its activities. Another aspect of social responsibility is reflected in the sponsorship of the local community's cultural and sporting activities to promote the general development of the community, especially youth.";
  setLanguageContent(language: string){
    switch (language) {
         case 'en':
           this.mainTitle1 = "Company & Brand";
           this.mainTitle3 = "Our Mission";
           this.mainTitle4 = "Social responsibility";
           this.description1 = "The PAQ brand includes the production of plastic cups, paper cups and cutlery. These include disposable and reusable products.";
           this.description3 = "We employ responsible staff who produce high-quality and safe products with the best machines and materials.";
           this.description4 = "Uni-Ves-Plast d.o.o. promotes environmental awareness in the community with its activities. Another aspect of social responsibility is reflected in the sponsorship of the local community's cultural and sporting activities to promote the general development of the community, especially youth.";
           break;
         case 'hr':
           this.mainTitle1 = "Firma i brand";
           this.mainTitle3 = "Naša Misija";
           this.mainTitle4 = "Društvena odgovornost";
           this.description1 = " PAQ brand obuhhvata proizvodnju plastičnih čaša, papirnih čaša i pribora za jelo. Tu spadaju proizvodi za jednokratnu i višekratnu upotrebu.";
           this.description3 = "Zapošljavamo odgovorno osoblje koje proizvodi visokokvalitetne i sigurne proizvode s najboljim strojevima i materijalima."
           this.description4 = "Uni-Ves-Plast d.o.o. svojim aktivnostima promiče ekološku svijest u zajednici. Drugi aspekt društvene odgovornosti ogleda se u pokroviteljstvu kulturnih i sportskih aktivnosti lokalne zajednice radi promicanja općeg razvoja zajednice, a posebice mladih.";
           break;
         case 'de':
           this.mainTitle1 = "Unternehmen & Marke"
           this.mainTitle3 = "Unsere Mission"
           this.mainTitle4 = "Gesellschaftliche Verantwortung"
           this.description1 = "Die Marke PAQ umfasst die Produktion von Plastikbechern, Pappbechern und Besteck. Hierzu zählen Einweg- und Mehrwegprodukte."
           this.description3 = "„Wir beschäftigen verantwortliches Personal, dass mit den besten Maschinen und Materialien hochwertige und sichere Produkte produziert.“"
           this.description4 = "Uni-Ves-Plast d.o.o. fördert mit seinen Aktivitäten das Umweltbewusstsein der Gemeinde. Ein weiterer Aspekt der gesellschaftlichen Verantwortung wird durch das Sponsoring der kulturellen und sportlichen Aktivitäten der lokalen Gemeinde reflektiert, um die allgemeine Entwicklung der Gemeinde zu fördern, insbesondere die Jugend."
           break;
         default:
           this.mainTitle1 = "Company & Brand";
           this.mainTitle3 = "Our Mission";
           this.mainTitle4 = "Social responsibility";
           this.description1 = "The PAQ brand includes the production of plastic cups, paper cups and cutlery. These include disposable and reusable products.";
           this.description3 = "We employ responsible staff who produce high-quality and safe products with the best machines and materials.";
           this.description4 = "Uni-Ves-Plast d.o.o. promotes environmental awareness in the community with its activities. Another aspect of social responsibility is reflected in the sponsorship of the local community's cultural and sporting activities to promote the general development of the community, especially youth.";
           break;
       }
       }
      }
