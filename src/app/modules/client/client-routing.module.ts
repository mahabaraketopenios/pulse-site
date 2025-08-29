import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpCenterComponent } from './components/help-center/help-center.component';
import { ProfessionalServiceComponent } from './components/professional-service/professional-service.component';

const routes: Routes = [{ path: 'help', component: HelpCenterComponent },


    { path: 'professional-service', component: ProfessionalServiceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRoutingModule {}
