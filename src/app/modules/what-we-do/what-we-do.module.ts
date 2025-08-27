import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { CourseComponent } from './components/course/course.component';
import { WhatWeDoRoutingModule } from './what-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SolutionComponent } from './components/solution/solution.component';



@NgModule({
  declarations: [
    AssessmentComponent,
    CourseComponent,
    SolutionComponent
  ],
  imports: [
    CommonModule,
    WhatWeDoRoutingModule,
    SharedModule
    
  ]
})
export class WhatWeDoModule { }
