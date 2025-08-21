import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { DynamicFieldComponent } from '../dynamic-field/dynamic-field';
import { DynamicSchema, FormBuilderService } from '../services/form-builder-service/form-builder';
import { ActivatedRoute } from '@angular/router';
import { SchemaLoaderService } from '../services/schema-loader-service/schema-loader.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.html',
  imports: [CommonModule, ReactiveFormsModule, DynamicFieldComponent],
  styleUrl: './dynamic-form.css'
})
export class DynamicFormComponent implements OnInit{

  @Input() schema!: DynamicSchema;
  form!: FormGroup;
  stepIndex = 0;

  constructor(
    private builder: FormBuilderService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    console.log('this.schema : ',this.schema)
    if (!this.schema) {
      console.warn('DynamicFormComponent: schema is required');
      return;
    }
    this.form = this.builder.buildForm(this.schema);
  }

  next(): void {
    if (this.stepIndex < this.schema.steps.length - 1) {
      this.stepIndex++;
    }
  }

  previous(): void {
    if (this.stepIndex > 0) {
      this.stepIndex--;
    }
  }

  submit(): void {
    if (!this.form) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const payload = this.form.getRawValue();
    console.log('Formulario enviado', payload);
    // Aquí podrías emitir un evento o llamar a un servicio HTTP
    alert('Formulario OK (revisa la consola)');
  }
}


