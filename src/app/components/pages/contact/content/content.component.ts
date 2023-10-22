import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { LanguageService } from '../../../../language-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private languageService: LanguageService) { }
  public sendEmail(e: Event) {
    e.preventDefault();
    // emailjs.sendForm('smtp_server', 'template_8uQnFG6N_clone', e.target as HTMLFormElement, 'user_XWPdjpTv0DgrQb9FN3tWr')
    emailjs.sendForm('service_p4nebhq', 'template_3zuw5ut', e.target as HTMLFormElement, 'FkRjUasXyIK8rdAHz')
      .then((result: EmailJSResponseStatus) => {
        alert("Mail je uspešno prosleđen.");
        // location.href = '#';
        console.log(result.text);
      }, (error) => {
        alert("Mail nije uspešno prosleđen.");
        location.href = '#';
        console.log(error.text);
      });
  }
  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe((language) => {
      this.setLanguageContent(language);
    });
  }
  titleTag: string = "Get In Touch";
  description: string = "Uni-Ves-Plast d.o.o. ist ein Unternehmen, dass im Jahr 2013, auf Grund der langjährigen Erfahrung seiner Gründer in der Produktion verschiedener Produkte aus Kunststoff, gegründet würde. Die Marke PAQ umfasst Einweg- und Mehrwegprodukte. Die Produktion erfolgt durch die modernsten Maschinen großer Kapazitäten.";
  buttonText: string = "Send message";
  setLanguageContent(language: string){
    switch (language) {
         case 'en':
           this.titleTag = "Get In Touch";
           this.description = "Contact us";
           this.buttonText = "Send message";
           break;
         case 'hr':
           this.titleTag = "Javite nam se";
           this.description = "Kontaktirajte nas";
           this.buttonText = "Pošalji poruku";
           break;
         case 'de':
           this.titleTag = "In Kontakt kommen"
           this.description = "Kontaktiere üns"
           this.buttonText = "Nachricht senden";
           break;
         default:
           this.titleTag = "Get In Touch";
           this.description = "Contact us";
           this.buttonText = "Send message";
           break;
       }
       }
}
