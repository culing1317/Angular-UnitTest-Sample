import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlDirective } from '@angular/forms';
import { from } from 'rxjs';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {
    this.createForm();
   }

  ngOnInit() {
  }




  createForm(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(this.contact.name,[
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl(this.contact.email,[
        Validators.required,
        Validators.email
      ]),
      text: new FormControl(this.contact.text)
    });
    console.log('contactForm:' + this.contactForm.value);
  }
  onSubmit(): void {
    this.submitted = true;
  }

  text = 'Contacy page';
  contactForm: FormGroup;
  contact = {
    name: '',
    email: '',
    text: ''
  };
  submitted = false;

}
