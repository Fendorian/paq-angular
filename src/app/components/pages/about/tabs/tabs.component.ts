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
  mainTitle1: string = "Company";
  mainTitle2: string = "OUR VISION";
  mainTitle3: string = "Company";
  mainTitle4: string = "SOCIAL RESPONSIBILITY";
  description1: string = "Uni-Ves-Plast d.o.o. ist ein Unternehmen, dass im Jahr 2013, auf Grund der langjährigen Erfahrung seiner Gründer in der Produktion verschiedener Produkte aus Kunststoff, gegründet würde. Die Marke PAQ umfasst Einweg- und Mehrwegprodukte. Die Produktion erfolgt durch die modernsten Maschinen großer Kapazitäten.";
  description2: string = "Whether at home or on a picnic, PAQ is the only thing that shouldn't be missing.";
  description3: string = "We employ responsible staff who produce high-quality and safe products with the best machines and materials.";
  description4: string = "Uni-Ves-Plast d.o.o. promotes environmental awareness in the community with its activities. Another aspect of social responsibility is reflected in the sponsorship of the local community's cultural and sporting activities to promote the general development of the community, especially youth.";
  setLanguageContent(language: string){
    switch (language) {
         case 'en':
           this.mainTitle1 = "COMPANY";
           this.mainTitle2 = "OUR VISION";
           this.mainTitle3 = "OUR MISSION";
           this.mainTitle4 = "SOCIAL RESPONSIBILITY";
           this.description1 = "Uni-Ves-Plast d.o.o. is a company established in 2013 based on the long-term experience of its founders in the production of various plastic products. The PAQ brand includes disposable and reusable products. The production is carried out by the most modern machines of large capacities.";
           this.description2 = "Whether at home or on a picnic, PAQ is the only thing that shouldn't be missing.";
           this.description3 = "We employ responsible staff who produce high-quality and safe products with the best machines and materials.";
           this.description4 = "Uni-Ves-Plast d.o.o. promotes environmental awareness in the community with its activities. Another aspect of social responsibility is reflected in the sponsorship of the local community's cultural and sporting activities to promote the general development of the community, especially youth.";
           break;
         case 'hr':
           this.mainTitle1 = "FIRMA";
           this.mainTitle2 = "NASA VIZIJA";
           this.mainTitle3 = "NASA MISIJA";
           this.mainTitle4 = "SOCIJALNA ODGOVORNOST";
           this.description1 = "Uni-Ves-Plast d.o.o. je tvrtka osnovana 2013. godine na temelju dugogodišnjeg iskustva osnivača u proizvodnji raznih proizvoda od plastike. Marka PAQ uključuje proizvode za jednokratnu i višekratnu upotrebu. Proizvodnja se odvija na najsuvremenijim strojevima velikih kapaciteta.";
           this.description2 = "Bilo kod kuće ili na pikniku, PAQ je jedina stvar koja ne smije nedostajati.";
           this.description3 = "Zapošljavamo odgovorno osoblje koje proizvodi visokokvalitetne i sigurne proizvode s najboljim strojevima i materijalima."
           this.description4 = "Uni-Ves-Plast d.o.o. svojim aktivnostima promiče ekološku svijest u zajednici. Drugi aspekt društvene odgovornosti ogleda se u pokroviteljstvu kulturnih i sportskih aktivnosti lokalne zajednice radi promicanja općeg razvoja zajednice, a posebice mladih.";
           break;
         case 'de':
           this.mainTitle1 = "UNTERNEHMEN"
           this.mainTitle2 = "UNSERE VISION"
           this.mainTitle3 = "UNSERE MISSION"
           this.mainTitle4 = "GESELLSCHAFTLICHE VERANTWORTUN"
           this.description1 = "Uni-Ves-Plast d.o.o. ist ein Unternehmen, dass im Jahr 2013, auf Grund der langjährigen Erfahrung seiner Gründer in der Produktion verschiedener Produkte aus Kunststoff, gegründet würde. Die Marke PAQ umfasst Einweg- und Mehrwegprodukte. Die Produktion erfolgt durch die modernsten Maschinen großer Kapazitäten."
           this.description2 = "Egal ob zuhause oder im Picknick, PAQ ist das einzige was nicht fehlen darf."
           this.description3 = "„Wir beschäftigen verantwortliches Personal, dass mit den besten Maschinen und Materialien hochwertige und sichere Produkte produziert.“"
           this.description4 = "Uni-Ves-Plast d.o.o. fördert mit seinen Aktivitäten das Umweltbewusstsein der Gemeinde. Ein weiterer Aspekt der gesellschaftlichen Verantwortung wird durch das Sponsoring der kulturellen und sportlichen Aktivitäten der lokalen Gemeinde reflektiert, um die allgemeine Entwicklung der Gemeinde zu fördern, insbesondere die Jugend."
           break;
         default:
           this.mainTitle1 = "COMPANY";
           this.mainTitle2 = "OUR VISION";
           this.mainTitle3 = "OUR MISSION";
           this.mainTitle4 = "SOCIAL RESPONSIBILITY";
           this.description1 = "Uni-Ves-Plast d.o.o. is a company established in 2013 based on the long-term experience of its founders in the production of various plastic products. The PAQ brand includes disposable and reusable products. The production is carried out by the most modern machines of large capacities.";
           this.description2 = "Whether at home or on a picnic, PAQ is the only thing that shouldn't be missing.";
           this.description3 = "We employ responsible staff who produce high-quality and safe products with the best machines and materials.";
           this.description4 = "Uni-Ves-Plast d.o.o. promotes environmental awareness in the community with its activities. Another aspect of social responsibility is reflected in the sponsorship of the local community's cultural and sporting activities to promote the general development of the community, especially youth.";
           break;
       }
       }
      }
