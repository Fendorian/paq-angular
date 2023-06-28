import { Component, OnInit } from '@angular/core';
import service from '../../../../data/service.json';
import { LanguageService } from '../../../../language-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(public languageService: LanguageService, private router: Router) { }

  public service = service;
  titleText: string;
  languageSwitch: string;
  private categoryNumbers = [1, 5, 6]; 

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.setText(language);
    });  
  } 
    setText(language: string): void {
      if (language === 'en') {
        this.titleText = "What We Do";
        this.languageSwitch = "en";
      } else if (language === 'hr') {
        this.titleText = 'Što Mi Radimo';
        this.languageSwitch = "hr";
      } else if (language === 'de') {
        this.titleText = 'Was Wir Tun';
        this.languageSwitch = "de";
      } else {
        this.titleText = '';
        this.languageSwitch = "en";
      }
    }

    getRouteLink(index: number): any[] {
      if (index < this.categoryNumbers.length) {
        return ['/shop', 'cat', this.categoryNumbers[index]];
      } else {
        return ['']; // return default or error route here
      }
    }
      
  
  }
