import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentComponent } from './components/assessment/assessment.component';
import { CourseComponent } from './components/course/course.component';
import { WhatWeDoRoutingModule } from './what-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AssessmentComponent,
    CourseComponent
  ],
  imports: [
    CommonModule,
    WhatWeDoRoutingModule,
    SharedModule
    
  ]
})
export class WhatWeDoModule { }
