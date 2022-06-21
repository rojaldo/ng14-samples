import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  profileForm = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    
  });

  handleKey(event: any) {
    console.log(event.target.value);
    console.log(this.profileForm.controls.name.valid);
    console.log(this.profileForm.controls.description.valid);
    
  }


  updateProfile() {
    this.profileForm.patchValue({
      name: 'Nancy',
      description: ''
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
    this.profileForm.reset();
  }
}
