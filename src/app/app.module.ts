import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FormComponent } from './components/form/form.component';
import { FrontpageComponent } from './components/frontpage/frontpage.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TranslationsService } from './services/translations.service'; 

const appRoutes: Routes = [
  { path: 'forms', component: FormComponent},
  { path: '', component: FrontpageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FrontpageComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [TranslationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
