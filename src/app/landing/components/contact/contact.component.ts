import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, NonNullableFormBuilder } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'landing-contact-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent { 
  
  fb = inject(NonNullableFormBuilder);
  contactService = inject(ContactService);
  
  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['']
  });

  formValues = toSignal(this.contactForm.valueChanges)
  formStatus = toSignal(this.contactForm.statusChanges)
  formErrors = toSignal(this.contactForm.statusChanges, { initialValue: 'INVALID' })

  onSubmit(): void {
    if (!this.contactForm.valid) { 
      // TODO: Act error loggers  
    }

    console.log(this.contactForm.value);
    this.resetForm();
  }

  resetForm(): void {
    this.contactForm.reset();
    this.contactForm.markAsPristine();
    this.contactForm.markAsUntouched();
  }
}
