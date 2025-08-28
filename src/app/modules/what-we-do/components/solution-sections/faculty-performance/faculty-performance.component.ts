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
}
