import { Component } from '@angular/core';

@Component({
  selector: 'app-assessment-use',
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.scss',
})
export class AssessmentComponent {
  mesured: string[] = [
    'Get on-time insights in student outcomes achievements.',
    'faster reliability and assessment accuracy.',

    'keep focus on progress with accurate analysis.',

    'automated and interactive single click reports.',

    'save faculty time with intuitive workflows tracking and implementations.',

    'keep control and ex?? with strong workflow setup and automation.',
  ];
  expect: any[] = [
    {
      title: 'Quick start, immediate effectiveness',
      icon: 'images/icons/dash.svg',
      text: {
        1: 'Get started anytime with PulseOne while maintaining high performance.',
        2: 'Create reusable outcomes to power your assessment over time.',
        3: 'Easily connect with external systems such as LMS, SIS, ERP...',
      },
    },

    {
      title: 'Drive consistency with relevant mappings.',
      icon: 'images/icons/presentation.svg',
      text: {
        1: 'Use built-in mappings or add your own.',
        2: 'Reliable and measurable KPIs to avoid subjectivity.',
        3: 'Coach evaluation on score and ?? ',
        4: 'Build in a recommended actions guide for effective progress.',
      },
    },
    {
      title: 'Mitigate bias, foster integrity.',
      icon: 'images/icons/honor.svg',
      text: {
        1: 'Reliable simultaneous evaluations at multiple levels.',
        2: 'Data and evidence collection based on user profile.',
        3: 'Multi-level approval of contributions. ',
        4: 'Automated tracking for policy-based validationPolicies.',
      },
    },
    {
      title: 'Rebost Monitoring and reporting.',
      icon: 'images/icons/office.svg',
      text: {
        1: 'analyse results and surface insights instantly.',
        2: 'track evaluations activities and detect mismatch early. ',
        3: 'support users when reg??.',
        4: 'integrated ?? hub for efficient synchronization assessments.',
      },
    },
    {
      title: '??',
      icon: 'images/icons/dash.svg',
      text: {
        1: 'view student work evaluation.',
        2: 'Fluid multi-level indicator assessment.',
        3: 'track progress dashboards to make timely, intuitive decisions',
      },
    },
    {
      title: 'Support from day one ',
      icon: 'images/icons/support.svg',
      text: {
        1: 'Qualified team to  ?? you to success.',
        2: 'Proven consultancy and methodologies prepare you and enable you to focus on your target.',
        3: 'accompany you to provide a seamless experience from start to the next cycle',
      },
    },
  ];

  objectKeys = Object.keys;
}
