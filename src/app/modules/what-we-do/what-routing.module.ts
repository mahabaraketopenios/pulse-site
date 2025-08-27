import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { CourseComponent } from './components/course/course.component';
import { SolutionComponent } from './components/solution/solution.component';

const routes: Routes = [
  {
    path: 'solution/assessment-projects',
    component: AssessmentComponent,
  },
  {
    path: 'solution/course-evaluation',
    component: CourseComponent,
  },
  {
    path: 'solution',
    component: SolutionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatWeDoRoutingModule {}
