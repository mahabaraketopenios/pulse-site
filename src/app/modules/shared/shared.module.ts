import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { BreadcrumComponent } from './components/breadcrum/breadcrum.component';
import { PulseRoutingModule } from '../pulse/pulse-routing.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadcrumComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    PulseRoutingModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumComponent,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
  ],
})
export class SharedModule {}
