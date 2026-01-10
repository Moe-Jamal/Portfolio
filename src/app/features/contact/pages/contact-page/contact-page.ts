import { Component, signal } from '@angular/core';
import { email, form, minLength, required, Field, submit } from '@angular/forms/signals';
import { IContact } from '@features/contact/models/contact.model';
import { PageTitle } from '@shared/components/page-title/page-title';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { toast } from 'ngx-sonner';
import { LucideAngularModule, Loader2 } from 'lucide-angular';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
  imports: [PageTitle, Field, LucideAngularModule],
})
export class ContactPageComponent {
  isSending = signal(false);
  readonly Loader2 = Loader2;

  contactModel = signal<IContact>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  contactForm = form(this.contactModel, (schema) => {
    required(schema.name, { message: 'Name is required' });
    required(schema.email, { message: 'Email is required' });
    required(schema.subject, { message: 'Subject is required' });
    required(schema.message, { message: 'Message is required' });

    email(schema.email, { message: 'Email is invalid' });
    minLength(schema.name, 3, { message: 'Name must be at least 3 characters long' });
    minLength(schema.subject, 10, { message: 'Subject must be at least 10 characters long' });
    minLength(schema.message, 20, { message: 'Message must be at least 20 characters long' });
  });

  onSubmit(event: Event) {
    event.preventDefault();
    submit(this.contactForm, async () => {
      this.isSending.set(true);
      emailjs
        .send(
          'service_oqy1elk',
          'template_5ptd5rt',
          { ...this.contactModel() },
          {
            publicKey: 'W9DDTd3_diUDGxma9',
          }
        )
        .then(
          () => {
            toast.success('Message sent successfully', {
              description: 'i will replay you as soon as possible',
              duration: 3000,
            });
            this.contactForm().reset();
            this.contactModel.set({
              name: '',
              email: '',
              subject: '',
              message: '',
            });
          },
          (error) => {
            console.log('FAILED...', (error as EmailJSResponseStatus).text);
            toast.error('Message failed to send', {
              description: 'Please try again',
              duration: 3000,
            });
          }
        )
        .finally(() => {
          this.isSending.set(false);
        });
    });
  }
}
