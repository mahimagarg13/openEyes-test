import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  registrationForm!: FormGroup;
  attendanceOptions = [
    { label: 'Yes', value: 'Yes' },
    { label: 'Yet to Decide', value: 'Yet to Decide' },
    { label: 'Maybe', value: 'Maybe' },
    { label: 'No', value: 'No' }
  ];
  adultOptions = [0, 1, 2, 3, 4, 5];
  kidOptions = [0, 1, 2, 3, 4, 5];
  ageOptions = Array.from({ length: 18 }, (_, i) => i);
  kidControls: { index: number }[] = [];



  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      attendance: ['', Validators.required],
      accompanyingAdults: [''],
      accompanyingKids: [''],
      noteToHost: ['']
    });
  }

  submitForm(): void {
    if (this.registrationForm.valid) {
      
      console.log(this.registrationForm.value);
      let finalArray = []
      let temparr = localStorage.getItem('registration');
      console.log(temparr);
      if(temparr) finalArray = JSON.parse(temparr)
      else finalArray = []
      finalArray.push(this.registrationForm.value)
      localStorage.setItem('registration', JSON.stringify(finalArray));
      window.alert("form submitted")
      window.location.reload()
    } else {
   
      console.log('Form is invalid. Please check the fields.');
    }
  }

  addKidControl(): void {
    const index = this.kidControls.length + 1;
    this.kidControls.push({ index });
    this.registrationForm.addControl(`ageOfKid${index}`, this.formBuilder.control(''));
  }

  removeKidControl(index: number): void {
    this.kidControls.splice(index, 1);
    this.registrationForm.removeControl(`ageOfKid${index}`);
  }
}
