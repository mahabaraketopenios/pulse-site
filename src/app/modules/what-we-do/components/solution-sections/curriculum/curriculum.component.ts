import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss',
})
export class CurriculumComponent {
  mesured: string[] = [
    'evaluate curriculum strength',

    'identify improvement nests?',

    'bring graduate to the labour market expectations',

    'document your ?? and improvements for brighter future ',

    'drive your fowards leading your education domain?',
  ];

  curriculumInsights = [
    {
      title: 'Comprehensive Review',
      icon: 'images/icons/school.svg',
      text: {
        1: 'Gain a clear understanding of your curriculum’s overall performance',
        2: 'Highlight key areas where your courses excel',
      },
    },
    {
      title: 'Continuous Improvement',
      icon: 'images/icons/improvement.svg',
      text: {
        1: 'Spot gaps and opportunities for course enhancements',
        2: 'Implement targeted changes to optimize learning',
      },
    },
    {
      title: 'Graduate Readiness',
      icon: 'images/icons/workspace.svg',
      text: {
        1: 'Prepare students for success in the modern workforce',
        2: 'Ensure skills taught align with industry needs',
      },
    },
    {
      title: 'Documentation & Reporting',
      icon: 'images/icons/checkk.svg',
      text: {
        1: 'Maintain clear records of curriculum updates',
        2: 'Demonstrate progress and improvements effectively',
      },
    },
    {
      title: 'Strategic Advancement',
      icon: 'images/icons/trending-up.svg',
      text: {
        1: 'Use insights to plan forward-looking curriculum strategies',
        2: 'Align institutional goals with educational outcomes',
      },
    },
    {
      title: 'Impact Monitoring',
      icon: 'images/icons/presentation.svg',
      text: {
        1: 'Track how changes affect student learning over time',
        2: 'Measure effectiveness and guide future updates',
      },
    },
  ];
}
