import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { CourseComponent } from './components/course/course.component';
import { SolutionComponent } from './components/solution/solution.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { SurveysMonitoringComponent } from './components/surveys-monitoring/surveys-monitoring.component';
import { FacultyPerformanceComponent } from './components/faculty-performance/faculty-performance.component';
import { AccreditationComponent } from './components/accreditation/accreditation.component';
import { StudentLearningComponent } from './components/student-learning/student-learning.component';
import { StudentExperienceComponent } from './components/student-experience/student-experience.component';
import { PlaningComponent } from './components/planing/planing.component';

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
  {
    path: 'solution/curriculum-evaluation',
    component: CurriculumComponent,
  },
  {
    path: 'solution/student-sucess-and-engagement',
    component: StudentExperienceComponent,
  },
  {
    path: 'solution/planing-self-study',
    component: PlaningComponent,
  },
  {
    path: 'solution/accredition',
    component: AccreditationComponent,
  },
  {
    path: 'solution/student-learning-experience',
    component: StudentLearningComponent,
  },
  {
    path: 'solution/faculty-perfomance',
    component: FacultyPerformanceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhatWeDoRoutingModule {}
