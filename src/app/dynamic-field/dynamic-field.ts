import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormField } from '../services/form-builder-service/form-builder';
import { CommonModule, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-dynamic-field',
  standalone:true,
    imports: [CommonModule, ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './dynamic-field.html',
  styleUrl: './dynamic-field.css'
})
export class DynamicFieldComponent {
@Input({ required: true }) field!: FormField;
  @Input({ required: true }) form!: FormGroup;

  isInvalid(): boolean {
    const control = this.form.controls[this.field.id];
    return control && control.touched && control.invalid;
  }

  isVisible() {
    const control = this.form.get(this.field.id);
    return control && !control.disabled;
  }
}
