import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-free-test-drive',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, MatDividerModule, MatDialogModule, NgIf],
  templateUrl: './free-test-drive.component.html',
  styleUrl: './free-test-drive.component.scss'
})
export class FreeTestDriveComponent {
   form = this.fb.group({
    name: ['', Validators.required],
    mobile: [
      '',
      [Validators.required, Validators.pattern(/^[0-9]{10}$/)]
    ],
    car: ['', Validators.required],
    whatsapp: [true],
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<FreeTestDriveComponent>
  ) {}

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.dialogRef.close(this.form.value);
    }
  }
}
