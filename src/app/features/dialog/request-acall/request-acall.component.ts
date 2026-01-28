import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import {MatInputModule} from '@angular/material/input';

import {MatDividerModule} from '@angular/material/divider';
import { MatOption } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-request-acall',
  standalone: true,
  imports: [MatInputModule, ReactiveFormsModule, MatDividerModule, MatDialogModule],
  templateUrl: './request-acall.component.html',
  styleUrl: './request-acall.component.scss'
})
export class RequestACallComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    description: [''],
    whatsapp: [true],
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RequestACallComponent>
  ) {}

  submit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
