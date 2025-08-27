import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { CourseComponent } from './components/course/course.component';

const routes: Routes = [
  {
   path:'assessment-projects',
   component:AssessmentComponent
  },
    {
   path:'course-evaluation',
   component:CourseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatWeDoRoutingModule {}
