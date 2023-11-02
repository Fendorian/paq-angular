import { Component, OnInit } from '@angular/core';
import service from '../../../../data/service.json';
import { LanguageService } from '../../../../language-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(public languageService: LanguageService) { }
  public service = service;
  titleText: string;
  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.setText(language);
    });  
  } 
    setText(language: string): void {
      if (language === 'en') {
        this.titleText = "What We Do";
      } else if (language === 'hr') {
        this.titleText = 'Što Mi Radimo';
      } else if (language === 'de') {
        this.titleText = 'Was Wir Tun';
      } else {
        this.titleText = '';
      }
    }
    getLink(index: number): string[] {
      if (index < 2) {
          return ['/shop'];
      } else {
          return ['/contact'];
      }
  }
  
  
  
  }
