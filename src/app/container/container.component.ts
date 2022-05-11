import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ENTER_PHONE_NUMBER, INVALID_PHONE_NUMBER } from '../constants/app.constants';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  phoneForm: FormGroup;
  isValid = true;
  invalidNumber = INVALID_PHONE_NUMBER;
  enterPhoneNumber = ENTER_PHONE_NUMBER;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * Form initalization.
   * Phone validators.
   */
  createForm(): void {
    this.phoneForm = this.fb.group({
      phone: ['', [Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/), Validators.required]]
    });
  }

  /**
   * This method is used to unmask the phone number.
   * This will also validate phone number.
   */
  onBlurMethod(): void {
    this.phoneForm.value.phone = this.phoneForm.value.phone.replace(/\D+/g, '');
    if (this.phoneForm.value.phone.length < 10) {
      this.isValid = false;
      this.phoneForm.value.phone = null;
    } else {
      this.isValid = true;
    }
  }
}
