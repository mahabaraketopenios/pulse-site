import { Component } from '@angular/core';

@Component({
  selector: 'app-assessment-use',
  templateUrl: './assessment-use.component.html',
  styleUrl: './assessment-use.component.scss',
})
export class AssessmentUseComponent {
  title = 'Streamline and strengthen assessment practices.';

  subtitle =
    'A toolset for measuring and communicating institutional effectiveness <br>identify opportunities for evolution and stimulate growth';

  mesured: String[] = [
    'Analyze, design, and monitor the progress of your outcomes and key performance indicators (KPIs) in one place. ',
    'Achieve the mission, goals, and objectives ',
    'Gain a clear understanding of learning outcomes achieved through appropriate assessment methods',
    'improve the quality of education and mobilize the right people around improvement actions',
    'meet accreditation requirements with evidence',
  ];

  mesured2 = [
    'Unlock the potential of your data and avoid redundancies',
    'Track learning outcomes and provide awareness and visibility to your staff.',
    'Centralize and automate a multi-level, asynchronous evaluation process in order to implement improvement actions.',
    'Enhance consistency and clarity by gathering evidence for all data provided.',
    'Automated collection of survey responses and analysis of results',
    'focused on the data that fueled continuous improvement',
  ];
  insightsList = [
    {
      title: 'Outcome Tracking',
      icon: 'images/icons/analysis.svg',
      text: {
        1: 'Monitor the progress of learning outcomes and KPIs in real time',
        2: 'Identify trends and gaps for targeted improvements',
      },
    },
    {
      title: 'Goal Alignment',
      icon: 'images/icons/track-changes.svg',
      text: {
        1: 'Ensure all assessment activities support institutional mission and objectives',
        2: 'Align courses and programs with strategic priorities',
      },
    },
    {
      title: 'Data-Driven Insights',
      icon: 'images/icons/insights.svg',
      text: {
        1: 'Use assessment data to understand student performance clearly',
        2: 'Make informed decisions to enhance educational quality',
      },
    },
    {
      title: 'Quality Improvement',
      icon: 'images/icons/magic-stick.svg',
      text: {
        1: 'Mobilize faculty and staff around actionable improvement plans',
        2: 'Boost overall teaching and learning effectiveness',
      },
    },
    {
      title: 'Accreditation Readiness',
      icon: 'images/icons/checkk.svg',
      text: {
        1: 'Maintain proper documentation to meet accreditation standards',
        2: 'Simplify evidence collection and reporting processes',
      },
    },
    {
      title: 'Institutional Growth',
      icon: 'images/icons/trending-up.svg',
      text: {
        1: 'Identify opportunities for curriculum and program evolution',
        2: 'Drive long-term growth through systematic assessment',
      },
    },
  ];
}
