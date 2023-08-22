import { Component, OnInit } from '@angular/core';
import service from '../../../../data/service.json';
import { LanguageService } from '../../../../language-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public languageService: LanguageService) { }
  public service = service;
  paragraph: string;
  buttonText: string;
  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.setParagraphText(language);
    });  
}
setParagraphText(language: string): void {
  if (language === 'en') {
    this.paragraph = 'We produce high-quality products on state-of-the-art facilities. At the same time, PAQ develops attractive products for its customers and thus ensures the right effects in the premium area.';
    this.buttonText = "About us";
  } else if (language === 'hr') {
    this.paragraph = 'Proizvodimo proizvode visoke kvalitete u najsuvremenijim pogonima. U isto vrijeme, PAQ razvija atraktivne proizvode za svoje kupce i tako osigurava prave učinke u premium području.';
    this.buttonText = "O nama";
  } else if (language === 'de') {
    this.paragraph = 'Wir produzieren hochwertige Produkte auf modernsten Anlagen. Gleichzeitig entwickelt PAQ attraktive Produkte für seine Kunden und sorgt so für die richtigen Effekte im Premiumbereich.';
    this.buttonText = "Über uns";
  } else {
    this.paragraph = '';
  }
}
}