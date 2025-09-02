import { Component } from '@angular/core';

@Component({
  selector: 'app-accreditation-use',
  templateUrl: './accreditation-use.component.html',
  styleUrl: './accreditation-use.component.scss',
})
export class AccreditationUseComponent {
  mesured: String[] = [
    'Stress-free accreditation preparation',
    'Always ready to demonstrate your progress',
    'achieve data readiness',
    'Involving the entire institution in continuous development',
    'efficiently produce accurate and centralized evidence',
    'optimize student learning',
    'traceable improvement and versioning',
    'turn feedback into success',
    'demonstrate faculty engagement',
    'curriculum innovation drive',
    'improve students qualities and their professional integration',
  ];
  title1 = "Pulsone Accreditation's";
  subtitle =
    'comprehensive verification solution for simplified data-driven accreditation assessment and reporting.';
  insightsList = [
    {
      title: 'Stress-Free Preparation',
      icon: 'images/icons/checkk.svg',
      text: {
        1: 'Simplify the accreditation process with structured guidance',
        2: 'Stay prepared for evaluations at any time',
      },
    },
    {
      title: 'Centralized Evidence',
      icon: 'images/icons/folder.svg',
      text: {
        1: 'Gather and store accurate, traceable evidence in one place',
        2: 'Ensure data is always up-to-date and accessible',
      },
    },
    {
      title: 'Institutional Engagement',
      icon: 'images/icons/engagement.svg',
      text: {
        1: 'Involve all departments in continuous improvement efforts',
        2: 'Encourage collaborative data collection and reporting',
      },
    },
    {
      title: 'Outcome Optimization',
      icon: 'images/icons/trending-up.svg',
      text: {
        1: 'Turn feedback into actionable improvements',
        2: 'Enhance student learning outcomes and professional readiness',
      },
    },
    {
      title: 'Curriculum Innovation',
      icon: 'images/icons/magic-stick.svg',
      text: {
        1: 'Drive curriculum enhancements aligned with accreditation standards',
        2: 'Integrate innovative teaching strategies across programs',
      },
    },
    {
      title: 'Faculty Performance',
      icon: 'images/icons/badge.svg',
      text: {
        1: 'Demonstrate faculty engagement and achievements',
        2: 'Track contributions and improvements across departments',
      },
    },
  ];
}  
