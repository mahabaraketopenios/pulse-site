import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { CourseComponent } from './components/course/course.component';
import { WhatWeDoRoutingModule } from './what-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SolutionComponent } from './components/solution/solution.component';
import { CurriculumComponent } from './components/curriculum/curriculum.component';
import { SurveysMonitoringComponent } from './components/surveys-monitoring/surveys-monitoring.component';
import { FacultyPerformanceComponent } from './components/faculty-performance/faculty-performance.component';
import { AccreditationComponent } from './components/accreditation/accreditation.component';
import { StudentLearningComponent } from './components/student-learning/student-learning.component';
import { StudentExperienceComponent } from './components/student-experience/student-experience.component';
import { PlaningComponent } from './components/planing/planing.component';

@NgModule({
  declarations: [
    AssessmentComponent,
    CourseComponent,
    SolutionComponent,
    CurriculumComponent,
    SurveysMonitoringComponent,
    FacultyPerformanceComponent,
    AccreditationComponent,
    StudentLearningComponent,
    StudentExperienceComponent,
    PlaningComponent,
  ],
  imports: [CommonModule, WhatWeDoRoutingModule, SharedModule],
})
export class WhatWeDoModule {}
