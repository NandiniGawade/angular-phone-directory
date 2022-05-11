import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  phoneForm: FormGroup;
  isValid = true;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.phoneForm = this.fb.group({
      phone: ['', [Validators.pattern(/^\(\d{3}\)\s\d{3}-\d{4}$/), Validators.required]]
    });
  }


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
