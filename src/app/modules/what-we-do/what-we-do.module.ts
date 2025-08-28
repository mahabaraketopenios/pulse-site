import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './components/solution-sections/assessment/assessment.component';
import { CourseComponent } from './components/solution-sections/course/course.component';
import { WhatWeDoRoutingModule } from './what-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SolutionComponent } from './components/solution/solution.component';
import { CurriculumComponent } from './components/solution-sections/curriculum/curriculum.component';
import { SurveysMonitoringComponent } from './components/solution-sections/surveys-monitoring/surveys-monitoring.component';
import { FacultyPerformanceComponent } from './components/solution-sections/faculty-performance/faculty-performance.component';
import { AccreditationComponent } from './components/solution-sections/accreditation/accreditation.component';
import { StudentLearningComponent } from './components/solution-sections/student-learning/student-learning.component';
import { StudentExperienceComponent } from './components/solution-sections/student-experience/student-experience.component';
import { PlaningComponent } from './components/solution-sections/planing/planing.component';

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
