import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PulseRoutingModule } from './pulse-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HomeSectionComponent } from './components/home-section/home-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component'; // <-- import here

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    HomeSectionComponent,
    FooterComponent,
    WhatWeDoComponent,
  ],
  imports: [
    CommonModule,
    PulseRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
  ],
})
export class PulseModule {}
