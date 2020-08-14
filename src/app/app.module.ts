import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { ServiceSectionComponent } from './components/service-section/service-section.component';
import { StepsSectionComponent } from './components/steps-section/steps-section.component';
import { InnovateBussinessComponent } from './components/innovate-bussiness/innovate-bussiness.component';
import { ContactSectionComponent } from './components/contact-section/contact-section.component';
import { PricingSectionComponent } from './components/pricing-section/pricing-section.component';
import { ClientSectionComponent } from './components/client-section/client-section.component';
import { FlipDirective } from './directives/flip.directive';
import { Flip2Directive } from './directives/flip2.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainSectionComponent,
    ServiceSectionComponent,
    StepsSectionComponent,
    InnovateBussinessComponent,
    ContactSectionComponent,
    PricingSectionComponent,
    ClientSectionComponent,
    FlipDirective,
    Flip2Directive,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
