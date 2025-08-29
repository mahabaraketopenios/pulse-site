import { AfterViewInit, Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
declare global {
  interface Window {
    Calendly: any;
  }
}
@Component({
  selector: 'app-request-demo',
  templateUrl: './request-demo.component.html',
  styleUrl: './request-demo.component.scss'
})
export class RequestDemoComponent implements AfterViewInit{



  constructor(private dialogRef: MatDialogRef<RequestDemoComponent>) {}



  ngAfterViewInit() {
    window.Calendly.initInlineWidget({
  url: 'https://calendly.com/pulse-one/30min?primary_color=077A7D&text_color=06202B&background_color=ffff',
      parentElement: document.querySelector('.calendly-inline-widget'),
      prefill: {},
      onEventScheduled: () => {
        // Close the dialog after scheduling
        this.dialogRef.close();
      },
    });
  }
}
