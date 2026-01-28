import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-report-download',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatDialogModule,
  ],
  templateUrl: './report-download.component.html',
  styleUrl: './report-download.component.scss',
})
export class ReportDownloadComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
    email: ['', [Validators.required, Validators.email]],
    whatsapp: [true],
  });

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ReportDownloadComponent>
  ) {}
  submit() {}
}
