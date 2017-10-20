import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TranslationsService {

  currentLanguage: String; 
  defaultLanguage: String = "swedish";
  onLanguageChange: EventEmitter<any> = new EventEmitter();
  
  constructor() { 
    this.currentLanguage = this.defaultLanguage; 
  }

  getCurrentLanguare(){
    return this.currentLanguage; 
  }

  setCurrentLanguare(newLanguage:String){
    this.currentLanguage = newLanguage; 
  }

  getTexts(): JSON {
    let translation;
    for (let lang in allTexts) {
      if (lang === this.currentLanguage) {
        translation = allTexts[lang];
      }
    }
    return translation;
  }

  getTextsFor(component): any{
    let text = this.getTexts();
    return text[component];
  }

  getPossibleLanguages(): Array<Object> {
    return possibleLanguage;
  }
}

const possibleLanguage: Array<Object> = [
  {
    "name": "swedish",
    "displayName": "Svenska",
    "flag": "../../assets/swedish-flag.png",
    "altText": "Bild av svenska flaggan",
    "ariaLable" : "Sätt sidans språk till svenska",
    "langAttr" : "sv",
    "hrefLangAttr" : "sv"
  },
  {
    "name": "english",
    "displayName": "English",
    "flag": "../../assets/english-flag.svg",
    "altText": "Image of the english flag",
    "ariaLable" : "Set page language to english",
    "langAttr" : "en",
    "hrefLangAttr" : "en-US"
  }
]

const allTexts = {
  "swedish": {
    "navigation": [
      {
        "displayName": "Hem",
        "route": ""
      },
      {
        "displayName": "Formulär",
        "route": "forms"
      }
    ],
    "frontpage" : {
      "heading" : "Heading på Svenska",
      "ingress" : "Ingress på Svenska",
      "paragraph" : "Paragraf på Svenska"
    }
  },
  "english": {
    "navigation": [
      {
        "displayName": "Home",
        "route": ""
      },
      {
        "displayName": "Forms",
        "route": "forms"
      }
    ],
    "frontpage" : {
      "heading" : "Heading på Engelska",
      "ingress" : "Ingress på Engelska",
      "paragraph" : "Paragraf på Engelska"
    }
  }
}