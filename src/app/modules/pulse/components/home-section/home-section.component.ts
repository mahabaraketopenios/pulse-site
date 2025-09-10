import { Component } from '@angular/core';
import { RequestDemoComponent } from '../../../shared/components/request-demo/request-demo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.scss',
})
export class HomeSectionComponent {
  constructor(private dialog: MatDialog) {}
  faqs: any[] = [
    {
      question: 'D1. Specification Layer',
      answer:
        'Quis nostrud cillum consectetur incididunt tempor irure pariatur ea culpa. Duis officia ad sunt anim duis velit enim minim velit velit ad. Elit id culpa aliqua sit occaecat sit laboris consectetur laboris sunt consequat reprehenderit. Elit fugiat consectetur exercitation ullamco deserunt nisi nostrud aute nisi excepteur.',
      open: false,
    },
    {
      question: 'D2. Assessment Layer',
      answer:
        'Nisi incididunt adipisicing reprehenderit tempor cillum laboris. Anim veniam duis tempor duis ut sint qui nisi eu cupidatat. Pariatur commodo dolor tempor veniam incididunt exercitation ad elit aliquip eu in. Quis dolore elit nostrud culpa laborum nulla. Adipisicing incididunt eiusmod laboris in irure qui minim excepteur voluptate eu dolore ex ullamco officia. In nisi dolore mollit in veniam et occaecat. Cupidatat occaecat velit laborum voluptate dolor.',
      open: false,
    },
    {
      question: 'D3. Reporting Layer',
      answer:
        'Exercitation sit sit reprehenderit nostrud ad Lorem deserunt laborum enim eu sunt cupidatat. Laborum veniam sint dolore deserunt pariatur dolore. Deserunt incididunt ea anim proident. Esse anim fugiat occaecat nisi aliquip voluptate. Voluptate in commodo aliqua sint dolor quis reprehenderit. Non et mollit ullamco commodo officia ullamco laboris laborum minim ex eiusmod. Consequat esse Lorem non ex esse laborum sunt.',
      open: false,
    },
    {
      question: 'D4. Faculty Progress Monitoring',
      answer:
        'Ut id sunt qui aliqua. Sunt et id adipisicing sunt sunt id fugiat voluptate dolore aliquip. In excepteur ea elit labore fugiat velit laborum nulla magna cupidatat. Non labore ad non elit Lorem veniam adipisicing.',
      open: false,
    },
  ];

  toggleFaq(index: number): void {
    this.faqs.forEach((faq, i) => {
      faq.open = i === index ? !faq.open : false;
    });
  }
  click() {
    this.dialog.open(RequestDemoComponent, {
      width: '90%', // adjust size
      height: '87%',
    });
  }
}
