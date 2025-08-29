import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [{ path: 'company', component: CompanyComponent },


    { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhoAreWeRoutingModule {}
