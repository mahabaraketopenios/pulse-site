import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PulseRoutingModule } from './pulse-routing.module';

import { HomeSectionComponent } from './components/home-section/home-section.component';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, HomeSectionComponent],
  imports: [CommonModule, PulseRoutingModule, SharedModule],
})
export class PulseModule {}
