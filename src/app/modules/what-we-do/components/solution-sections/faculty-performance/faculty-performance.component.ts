import { Component } from '@angular/core';

@Component({
  selector: 'app-faculty-performance',
  templateUrl: './faculty-performance.component.html',
  styleUrl: './faculty-performance.component.scss',
})
export class FacultyPerformanceComponent {
  mesured: string[] = [
    'records and review  faculty activity ',

    'Narrow duplicated effort',

    'keep focus on student achievements',

    'Manage faculty portfolios',

    'All faculty activity in one single place',
    'Cv tech and ?? on your website',
    'Automates ?? faculty activities Reporting',
    'Boost faculty research work and ?? through time optimization and clean visibility ??',
  ];
  mesured2: String[] = [
    'share achivements with cvs and public web profiles',
    'efficiently report faculty crendials for accreditation pa??',
    'Track faculty career growth and ?? insight accress institution',
    'confirm faculty credentilas ',
    'support faculty performance review and advancement',
  ];

  insightsList = [
    {
      title: 'Centralized Activity',
      icon: 'images/icons/assignment.svg',
      text: {
        1: 'View all faculty activities in one unified dashboard',
        2: 'Quickly access records for teaching, research, and service',
      },
    },
    {
      title: 'Time Optimization',
      icon: 'images/icons/schedule.svg',
      text: {
        1: 'Reduce duplicated tasks across departments',
        2: 'Focus on impactful teaching and research activities',
      },
    },
    {
      title: 'Faculty Portfolios',
      icon: 'images/icons/badge.svg',
      text: {
        1: 'Manage faculty profiles and portfolios efficiently',
        2: 'Track achievements and professional milestones',
      },
    },
    {
      title: 'Reporting Automation',
      icon: 'images/icons/presentation.svg',
      text: {
        1: 'Automatically generate activity reports for accreditation',
        2: 'Save time on faculty performance documentation',
      },
    },
    {
      title: 'Career Growth',
      icon: 'images/icons/trending-up.svg',
      text: {
        1: 'Monitor career progression across the institution',
        2: 'Identify opportunities for faculty development',
      },
    },
    {
      title: 'Research & Visibility',
      icon: 'images/icons/research.svg',
      text: {
        1: 'Boost research output through optimized workflows',
        2: 'Enhance visibility of faculty achievements online',
      },
    },
  ];
}
