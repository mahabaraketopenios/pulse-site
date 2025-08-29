import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent {
  mesured: string[] = [
    'Increase student response rates with deep SIS ans LMS integration',

    'Automatic evaluation tracking process with 90% of stuf time saved ',

    'sychnonize results distribution  and analyse ?? over time ',

    '?? student learnings and surveys evaluation process',

    ' rich reporting to ? and record ?? and achivements without intensive timming',
  ];

  insightsList = [
    {
      title: 'Deep Integration',
      icon: 'images/icons/integration.svg',
      text: {
        1: 'Seamlessly connect SIS and LMS for better participation',
        2: 'Cut administrative workload with automated evaluation tracking',
      },
    },
    {
      title: 'Results & Analysis',
      icon: 'images/icons/analysis.svg',
      text: {
        1: 'Ensure consistent results sharing across platforms',
        2: 'Identify patterns in student learning through smart analytics',
      },
    },
    {
      title: 'Reporting',
      icon: 'images/icons/reporting.svg',
      text: {
        1: 'Generate clear progress reports without extra effort',
        2: 'Document achievements while saving staff time',
      },
    },
    {
      title: 'Student Engagement',
      icon: 'images/icons/engagement.svg',
      text: {
        1: 'Encourage higher participation with anonymous surveys',
        2: 'Foster trust by ensuring full data privacy',
      },
    },
    {
      title: 'Process Automation',
      icon: 'images/icons/automation.svg',
      text: {
        1: 'Reduce manual input with streamlined workflows',
        2: 'Save up to 90% of staff time in repetitive tasks',
      },
    },
    {
      title: 'Data Security',
      icon: 'images/icons/security.svg',
      text: {
        1: 'Keep sensitive information fully protected',
        2: 'Comply with institutional and regulatory standards',
      },
    },
  ];
}
