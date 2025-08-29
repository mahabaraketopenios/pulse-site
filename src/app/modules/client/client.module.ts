import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpCenterComponent } from './components/help-center/help-center.component';
import { ProfessionalServiceComponent } from './components/professional-service/professional-service.component';
import { ClientRoutingModule } from './client-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HelpCenterComponent,
    ProfessionalServiceComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
