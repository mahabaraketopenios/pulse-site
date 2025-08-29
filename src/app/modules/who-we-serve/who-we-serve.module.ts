import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './components/overview/overview.component';
import { ProvostComponent } from './components/provost/provost.component';
import { FacultyAffaireComponent } from './components/faculty-affaire/faculty-affaire.component';
import { IntitutionalLeadersComponent } from './components/intitutional-leaders/intitutional-leaders.component';
import { DeansComponent } from './components/deans/deans.component';
import { StudentSuccessComponent } from './components/student-success/student-success.component';
import { SharedModule } from '../shared/shared.module';
import { WhoWeServeRoutingModule } from './who-we-serve-routing.module';



@NgModule({
  declarations: [
    OverviewComponent,
    ProvostComponent,
    FacultyAffaireComponent,
    IntitutionalLeadersComponent,
    DeansComponent,
    StudentSuccessComponent
  ],
  imports: [
    CommonModule,
    WhoWeServeRoutingModule,
    SharedModule
  ]
})
export class WhoWeServeModule { }
