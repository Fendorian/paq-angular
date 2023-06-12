import { Component, OnInit } from '@angular/core';
import service from '../../../../data/service.json';
import { LanguageService } from '../../../../language-service.service';


@Component({
  selector: 'app-abouttext',
  templateUrl: './abouttext.component.html',
  styleUrls: ['./abouttext.component.css']
})
export class AbouttextComponent implements OnInit {

  constructor(public languageService: LanguageService) { }
  public service = service;
  paragraph: string;
  titleText: string;
  buttonText: string;

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.setParagraphText(language);
  });
}
  setParagraphText(language: string): void {
    if (language === 'en') {
      this.paragraph = 'We produce high-quality products on state-of-the-art facilities. At the same time, PAQ develops attractive cup shapes for its customers and thus ensures the right effects in the premium area.';
      this.titleText = 'About us';
      this.buttonText = "Contact us";
    } else if (language === 'hr') {
      this.paragraph = 'Proizvodimo proizvode visoke kvalitete u najsuvremenijim pogonima. U isto vrijeme, PAQ razvija atraktivne oblike šalica za svoje kupce i tako osigurava prave učinke u premium području.';
      this.titleText = 'O nama';
      this.buttonText = "Kontaktirajte nas";
    } else if (language === 'de') {
      this.paragraph = 'Auf modernsten Anlagen produzieren wir hochwertige Produkte. Gleichzeitig entwickelt PAQ für seine Kunden ansprechende Becherformen und sorgt so für die richtigen Effekte im Premium-Bereich.';
      this.titleText = 'Über uns';
      this.buttonText = "Kontaktiere üns";
    } else {
      this.paragraph = '';
      this.titleText = '';
    }
  }
}
