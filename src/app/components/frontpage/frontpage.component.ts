import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.scss']
})
export class FrontpageComponent implements OnInit {

  heading: String;
  ingress: String;  
  paragraph: String;

  constructor(private translationsService:TranslationsService) {
    this.translationsService.changedLanguage.subscribe(
      ()=>{ this.setLaguage() });
   }

  ngOnInit() {
    this.setLaguage();
  }

  setLaguage(): void {
    let allTexts = this.translationsService.getTextsFor("frontpage");
    this.heading = allTexts.heading; 
    this.ingress = allTexts.ingress; 
    this.paragraph = allTexts.paragraph; 
  }
}
