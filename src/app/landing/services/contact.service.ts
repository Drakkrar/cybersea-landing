import { Injectable } from '@angular/core';


export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  submitContactForm(data: ContactFormData): void {
    // Simulate form submission
    console.log('Contact form submitted:', data);
  }

}
