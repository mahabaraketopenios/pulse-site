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
        'CodePen is an online community for testing and showcasing HTML, CSS, and JavaScript code snippets.',
      open: false,
    },
    {
      question: 'D2. Assessment Layer',
      answer:
        'Yes, CodePen has a free plan with many features, and a Pro plan with advanced capabilities.',
      open: false,
    },
    {
      question: 'D3. Reporting Layer',
      answer:
        'Absolutely! You can share your pens with a unique URL or embed them into your website.',
      open: false,
    },
    {
      question: 'D4. Faculty Progress Monitoring',
      answer:
        'Responsive design ensures your website looks and functions well on all devices, improving user experience and SEO rankings.',
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
