import { Component } from '@angular/core';

@Component({
  selector: 'app-student-experience',
  templateUrl: './student-experience.component.html',
  styleUrl: './student-experience.component.scss',
})
export class StudentExperienceComponent {
  mesured: String[] = [
    'Robust assesssment and student managmanet',
    'assessment class and field work for full picture ',
    'coordinate student Professional performance',
    'manage portfolios to showcase entire student Learning Journey',
    'dashboard student progress',
    'date reporting and ?? showcase ',
    'track progrress and compute ?? for accreditation using integrated automated ???????',
  ];
  insightsList = [
    {
      title: 'Comprehensive Assessment',
      icon: 'images/icons/analysis.svg',

      text: {
        1: 'Track academic performance across all courses and activities',
        2: 'Gain a full understanding of student achievements and learning outcomes',
      },
    },
    {
      title: 'Practical Experience',
      icon: 'images/icons/school.svg',
      text: {
        1: 'Include field work and practical assessments for real-world readiness',
        2: 'Ensure students apply knowledge in professional contexts',
      },
    },
    {
      title: 'Professional Development',
      icon: 'images/icons/workspace.svg',
      text: {
        1: 'Coordinate and monitor student professional performance',
        2: 'Support career readiness and skill-building initiatives',
      },
    },
    {
      title: 'Portfolio Management',
      icon: 'images/icons/badge.svg',
      text: {
        1: 'Maintain digital portfolios to showcase the full learning journey',
        2: 'Highlight achievements, projects, and competencies in one place',
      },
    },
    {
      title: 'Progress Dashboard',
      icon: 'images/icons/dash.svg',
      text: {
        1: 'Visualize student progress with interactive dashboards',
        2: 'Enable teachers and administrators to act on insights quickly',
      },
    },
    {
      title: 'Automated Reporting',
      icon: 'images/icons/magic-stick.svg',
      text: {
        1: 'Generate integrated reports for accreditation and decision-making',
        2: 'Track learning outcomes automatically across programs',
      },
    },
  ];
}
