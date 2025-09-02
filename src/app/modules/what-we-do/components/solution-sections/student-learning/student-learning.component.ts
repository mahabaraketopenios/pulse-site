import { Component } from '@angular/core';

@Component({
  selector: 'app-student-learning',
  templateUrl: './student-learning.component.html',
  styleUrl: './student-learning.component.scss',
})
export class StudentLearningComponent {
  mesured: String[] = [
    /*     'realtime student performance insights ',
     */ 'boost student retentions through pr?? support ',

    'going beyond graduation rate to drive profesional sucess',
    'support student attributes progress toward stati?? achivements ',
  ];

  mesured2: String[] = [
    'Advanced automated smart reporting ',
    'guidedstudent pathways ',
    'confident Connectivity ',
    'student lifecyle support from anywhere ',
    'move student through a workflow',
    'personalized student support ',
  ];
  insightsList = [
    {
      title: 'Real-Time Monitoring',
      icon: 'images/icons/analysis.svg',
      text: {
        1: 'Track student performance across courses instantly',
        2: 'Identify at-risk students early for timely interventions',
      },
    },
    {
      title: 'Retention Strategies',
      icon: 'images/icons/trending-up.svg',
      text: {
        1: 'Implement strategies to boost retention and engagement',
        2: 'Go beyond graduation rates to measure professional success',
      },
    },
    {
      title: 'Personalized Support',
      icon: 'images/icons/support.svg',
      text: {
        1: 'Offer tailored guidance to students based on their progress',
        2: 'Support development of skills and professional attributes',
      },
    },
    {
      title: 'Smart Reporting',
      icon: 'images/icons/insights.svg',
      text: {
        1: 'Generate automated reports with actionable insights',
        2: 'Monitor trends and improve institutional decision-making',
      },
    },
    {
      title: 'Guided Pathways',
      icon: 'images/icons/directions.svg',
      text: {
        1: 'Provide clear pathways for students to achieve academic goals',
        2: 'Enable smooth progression through programs and milestones',
      },
    },
    {
      title: 'Anywhere Access',
      icon: 'images/icons/access.svg',
      text: {
        1: 'Support students and faculty with data accessible anywhere',
        2: 'Streamline workflow and communication across the lifecycle',
      },
    },
  ];
}
