import { Component } from '@angular/core';
import { RequestDemoComponent } from '../../../shared/components/request-demo/request-demo.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  constructor(private dialog: MatDialog, private fb: FormBuilder) {}
  contactForm!: FormGroup;
  submitted = false;
  successMessage = '';

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.contactForm.controls;
  }
  loading = false;

  alertMessage: string | null = null;
  alertType: 'success' | 'error' = 'success';

  onSubmit() {
    this.submitted = true;
    if (this.contactForm.invalid) return;

    this.loading = true;
    const { name, email, subject, message } = this.contactForm.value;

    emailjs
      .send(
        'service_f5mhb28',
        'template_hd1ea6r',
        { name, email, subject, message },
        'qDu8xUFjWa0wSg3fN'
      )
      .then(
        () => {
          this.showAlert('Message sent successfully!', 'success');
          this.contactForm.reset();
          this.submitted = false;
        },
        (error) => {
          console.error('FAILED...', error);
          this.showAlert('Something went wrong, try again later.', 'error');
        }
      )
      .finally(() => {
        this.loading = false;
      });
  }

  showAlert(message: string, type: 'success' | 'error') {
    this.alertMessage = message;
    this.alertType = type;

    // Auto-close after 4s
    setTimeout(() => {
      this.alertMessage = null;
    }, 4000);
  }

  closeAlert() {
    this.alertMessage = null;
  }

  click() {
    this.dialog.open(RequestDemoComponent, {
      width: '90%', // adjust size
      height: '87%',
    });
  }
}
