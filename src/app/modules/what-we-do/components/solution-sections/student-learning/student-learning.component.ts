import { Component } from '@angular/core';

@Component({
  selector: 'app-student-learning',
  templateUrl: './student-learning.component.html',
  styleUrl: './student-learning.component.scss',
})
export class StudentLearningComponent {
  mesured: String[] = [
    'realtime student performance insights ',
    'boost student retentions',
    'through pr?? support ',
    'going beyond graduation rate to drive profesional sucess',
    'support student attributes progress toward stati?? achivements ',
  ];

  mesured2: String[] = [
    'Advanced automated smart reporting ',
    'guidedstudent pathways ',
    'confident Connectivity ',
    'student lifecyle support from anywhere ',
    'move student through a workflow',
    /*     'personalized student support ', */
  ];
}
