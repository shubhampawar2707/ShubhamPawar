import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmitting = false;
  submitStatus = {
    success: false,
    error: false,
    message: ''
  };

  constructor(
    private fb: FormBuilder,
    private emailService: EmailService
  ) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      this.submitStatus = {
        success: false,
        error: false,
        message: ''
      };

      this.emailService.sendEmail(this.contactForm.value).subscribe({
        next: (response) => {
          this.isSubmitting = false;
          this.submitStatus = {
            success: true,
            error: false,
            message: 'Message sent successfully! I will get back to you soon.'
          };
          this.contactForm.reset();
        },
        error: (error) => {
          this.isSubmitting = false;
          this.submitStatus = {
            success: false,
            error: true,
            message: 'Failed to send message. Please try again later.'
          };
        }
      });
    } else {
      this.markFormGroupTouched(this.contactForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  getErrorMessage(controlName: string): string {
    const control = this.contactForm.get(controlName);
    if (control?.hasError('required')) {
      return 'This field is required';
    }
    if (control?.hasError('email')) {
      return 'Please enter a valid email address';
    }
    if (control?.hasError('minlength')) {
      const requiredLength = control.errors?.['minlength'].requiredLength;
      return `Minimum length is ${requiredLength} characters`;
    }
    return '';
  }
} 