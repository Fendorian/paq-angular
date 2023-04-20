import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private defaultLanguage = 'en';
  private languageSource = new BehaviorSubject<string>(this.getStoredLanguage() || this.defaultLanguage);
  currentLanguage = this.languageSource.asObservable();

  constructor() {}

  changeLanguage(language: string) {
    this.languageSource.next(language);
    localStorage.setItem('language', language);
  }

  private getStoredLanguage(): string | null {
    return localStorage.getItem('language');
  }
}
