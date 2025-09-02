import { Component } from '@angular/core';

@Component({
  selector: 'app-planing',
  templateUrl: './planing.component.html',
  styleUrl: './planing.component.scss',
})
export class PlaningComponent {
  mesured: string[] = [
    'steamlined multi-level outcomes planning and assessmnets',
    'Boost ?? stakeholders engagement in assessment',

    'empower documented and traceable program improvement',

    'drive collaborative , highly ?? self study process ',

    'demonstrate progress towards your strategic goals ',

    'steamlined accreditation reporting',
    'efficient program review cycles',
    'simplified collaborative program review',
    'Integrated alumni ?? and labor market data',
    'centralized insight for leaders',
  ];
  insightsList = [
    {
      title: 'Stakeholder Engagement',
      icon: 'images/icons/group.svg',
      text: {
        1: 'Foster collaboration between faculty, students, and other stakeholders',
        2: 'Enhance participation in assessment and planning processes',
      },
    },
    {
      title: 'Program Improvement',
      icon: 'images/icons/magic-stick.svg',
      text: {
        1: 'Track and document improvements across programs',
        2: 'Ensure continuous enhancement of curriculum and outcomes',
      },
    },
    {
      title: 'Collaborative Self-Study',
      icon: 'images/icons/group-work.svg',
      text: {
        1: 'Drive a structured and collaborative self-study process',
        2: 'Enable teams to work efficiently towards shared goals',
      },
    },
    {
      title: 'Strategic Alignment',
      icon: 'images/icons/trending-up.svg',
      text: {
        1: 'Demonstrate progress toward institutional strategic objectives',
        2: 'Link assessment results to decision-making and planning',
      },
    },
    {
      title: 'Streamlined Reporting',
      icon: 'images/icons/analysis.svg',
      text: {
        1: 'Simplify accreditation and review reporting processes',
        2: 'Generate comprehensive reports with minimal effort',
      },
    },
    {
      title: 'Data-Driven Insights',
      icon: 'images/icons/insights.svg',
      text: {
        1: 'Centralize outcome and assessment data for leadership decisions',
        2: 'Integrate alumni and labor market information for informed planning',
      },
    },
  ];
}
