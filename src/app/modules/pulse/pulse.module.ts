import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { PulseRoutingModule } from './pulse-routing.module';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Section1Component } from './components/section-1/section-1.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [HeaderComponent, HomeComponent, Section1Component, FooterComponent],
  imports: [CommonModule, PulseRoutingModule ,MatIconModule,MatButtonModule,MatToolbarModule],
})
export class PulseModule {}
