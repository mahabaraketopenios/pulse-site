import { Component } from '@angular/core';

@Component({
  selector: 'app-section-1',
  templateUrl: './section-1.component.html',
  styleUrl: './section-1.component.scss',
})
export class Section1Component {
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
}
