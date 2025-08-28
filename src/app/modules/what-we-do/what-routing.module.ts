import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssessmentComponent } from './components/solution-sections/assessment/assessment.component';
import { CourseComponent } from './components/solution-sections/course/course.component';
import { SolutionComponent } from './components/solution/solution.component';
import { CurriculumComponent } from './components/solution-sections/curriculum/curriculum.component';
import { SurveysMonitoringComponent } from './components/solution-sections/surveys-monitoring/surveys-monitoring.component';
import { FacultyPerformanceComponent } from './components/solution-sections/faculty-performance/faculty-performance.component';
import { AccreditationComponent } from './components/solution-sections/accreditation/accreditation.component';
import { StudentLearningComponent } from './components/solution-sections/student-learning/student-learning.component';
import { StudentExperienceComponent } from './components/solution-sections/student-experience/student-experience.component';
import { PlaningComponent } from './components/solution-sections/planing/planing.component';

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
    component: StudentLearningComponent,
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
    component: StudentExperienceComponent,
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
