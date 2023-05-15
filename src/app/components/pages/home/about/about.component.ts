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
    this.paragraph = 'We produce high-quality products on state-of-the-art facilities. At the same time, PAQ develops attractive cup shapes for its customers and thus ensures the right effects in the premium area.';
    this.buttonText = "About us";
  } else if (language === 'hr') {
    this.paragraph = 'Proizvodimo proizvode visoke kvalitete u najsuvremenijim pogonima. U isto vrijeme, PAQ razvija atraktivne oblike šalica za svoje kupce i tako osigurava prave učinke u premium području.';
    this.buttonText = "O nama";
  } else if (language === 'de') {
    this.paragraph = 'Auf modernsten Anlagen produzieren wir hochwertige Produkte. Gleichzeitig entwickelt PAQ für seine Kunden ansprechende Becherformen und sorgt so für die richtigen Effekte im Premium-Bereich.';
    this.buttonText = "Über uns";
  } else {
    this.paragraph = '';
  }
}
}