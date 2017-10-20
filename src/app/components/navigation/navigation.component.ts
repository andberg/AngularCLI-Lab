import { Component, OnInit } from '@angular/core';
import { TranslationsService } from '../../services/translations.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})

export class NavigationComponent implements OnInit {
  
  navigationItems: Array<Object> = [];
  possibleLanguages: Array<Object> = [];

  constructor(private translationsService:TranslationsService) {}
  
  ngOnInit() {
    this.setLanguage();
  }

  setLanguage() {
    this.possibleLanguages = this.translationsService.getPossibleLanguages();
    this.navigationItems = this.translationsService.getTextsFor("navigation");
  }

  changeLanguage(newLanguage: String) {
    this.translationsService.setCurrentLanguare(newLanguage);
    this.setLanguage();
  }
}
