import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { data } from 'src/assets/data/profile';
import posthog from 'posthog-js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactDetails = data?.contactDetails;
  contactForm: any;
  isSubmit = false;
  isLoading = true;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      fullName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  submitContactDetails() {
    this.isSubmit = true;
    console.log(this.contactForm);

    if (this.contactForm.invalid) {
      return;
    } else {
      posthog.capture('send_message', {
        section: 'Contact_Send_Message',
        time: new Date().toISOString(),
        response: this.contactForm?.value
      });
    }
  }

  load() {
    setTimeout(() => {
      this.isLoading = false;
    }, 5000);
  }

}
