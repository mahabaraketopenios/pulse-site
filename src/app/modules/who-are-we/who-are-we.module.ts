import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CompanyComponent } from './components/company/company.component';
import { WhoAreWeRoutingModule } from './who-are-we-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ContactUsComponent,
    CompanyComponent
  ],
  imports: [
    CommonModule,
    WhoAreWeRoutingModule,
    SharedModule
  ]
})
export class WhoAreWeModule { }
