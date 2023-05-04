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
  ngOnInit(): void {
    };  
}