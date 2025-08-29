
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { ProvostComponent } from './components/provost/provost.component';
import { FacultyAffaireComponent } from './components/faculty-affaire/faculty-affaire.component';
import { IntitutionalLeadersComponent } from './components/intitutional-leaders/intitutional-leaders.component';
import { DeansComponent } from './components/deans/deans.component';
import { StudentSuccessComponent } from './components/student-success/student-success.component';


const routes: Routes = [
 {
    path: 'overview',
    component: OverviewComponent,
  },
  {
    path: 'provost',
    component: ProvostComponent,
  },
  {
    path: 'faculty-affaires-leaders',
    component: FacultyAffaireComponent,
  },
  {
    path: 'institutional-effectiveness-leaders',
    component: IntitutionalLeadersComponent,
  },
  {
    path: 'deans',
    component: DeansComponent,
  },
  {
    path: 'student-success',
    component: StudentSuccessComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhoWeServeRoutingModule {}
