
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Adatmodell interfészek
export interface Patient {
  name: string;
  email: string;
  ultrasoundDate: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  registrationForm: FormGroup;
  
  // EventEmitter az adatátadáshoz
  @Output() formSubmitted: EventEmitter<Patient> = new EventEmitter<Patient>();

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      ultrasoundDate: ['', [Validators.required]]
    });
  }

  // Form adatküldés
  onSubmit() {
    if (this.registrationForm.valid) {
      const patient: Patient = this.registrationForm.value;
      this.formSubmitted.emit(patient); // Adat küldése
    }
  }
}