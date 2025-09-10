import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  mesured: any[] = [
    {
      id: 1,
      title: 'Provost',
      desc: {
        1: 'Understand what is happening in your institution',
        2: 'user insights to prioritize policies and raise awareness',
        3: 'bring together all stakeholders within a single, aggregated, and powerful suite',
      },
      path: '/who-we-serve/provost',
    },
    {
      id: 2,
      title: 'Institutional leaders',
      desc: {
        1: 'Get reliable and realistic insights into complex and correlated indicators to drive positive transformation',
        2: 'lead the evaluation and development of the strategic plan',
        3: 'Alignment with outcomes and accreditation standards',
        4: 'enhance the attractiveness of institutional rankings',
      },
      path: '/who-we-serve/institutional-effectiveness-leaders',
    },
    {
      id: 3,
      title: 'student success',
      desc: {
        1: 'Monitor and improve student retention and completion rates',
        2: 'empower lea!?? through their curriculum Journey ',
        3: '?? creativity and empower student lifelong Learning',
        4: 'bridge the gap between academic and Professional worlds and switch it to an effective complementarity',
      },
      path: '/who-we-serve/student-success',
    },
  ];
}
