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
  setLanguageContent(language: string){
    switch (language) {
         case 'en':
           this.titleTag = "What We Do";
           break;
         case 'hr':
           this.titleTag = "Sta Mi Radimo";
           break;
         case 'de':
           this.titleTag = "Wer sind Wir?"
           break;
         default:
           this.titleTag = "What We Do";
           break;
       }
       }
}
