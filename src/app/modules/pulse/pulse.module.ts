import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PulseRoutingModule } from './pulse-routing.module';

import { HomeSectionComponent } from './components/home-section/home-section.component';

import { SharedModule } from '../shared/shared.module';
import { A11yModule } from '@angular/cdk/a11y';

@NgModule({
  declarations: [HomeComponent, HomeSectionComponent],
  imports: [CommonModule, PulseRoutingModule, SharedModule, A11yModule],
})
export class PulseModule {}
