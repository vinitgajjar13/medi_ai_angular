import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  standalone: false,
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
  ) {
    this.signupForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+ ]+$/)]],
      country: ['', Validators.required],
      state: ['', Validators.required],
      city: ['', Validators.required],
      bloodGroup: ['', Validators.required],
      birthDate: ['', Validators.required],
    });
  }

  ngOnInit() {}

  goToLogin() {
    this.router.navigate(['/patient']);
  }

  signUp() {
    if (this.signupForm.invalid) {
      this.signupForm.markAllAsTouched();
      return;
    }
    // Implement sign up logic
    console.log('Sign up clicked', this.signupForm.value);
    this.router.navigate(['/patient/profile']);
  }

  onlyNumbers(event: any) {
    const pattern = /[0-9+ ]/;
    const inputChar = String.fromCharCode(event.charCode);
    if (event.charCode !== 0 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onPhoneInput(event: any) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9+ ]/g, '');
    this.signupForm.patchValue({ phone: input.value });
  }
}
