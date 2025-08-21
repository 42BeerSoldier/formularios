import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export type FieldType = 'text' | 'number' | 'select' | 'date' | 'checkbox' | 'password';

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  required?: boolean;
  readOnly?: boolean;
  readOnlyIf?: string;
  showIf?: string;
  compute?: string;
  min?: number;
  max?: number;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  placeholder?: string;
  options?: { label: string; value: any; [key: string]: any }[];
}

export interface FormStep {
  id: string;
  title: string;
  fields: FormField[];
}

export interface DynamicSchema {
  title: string;
  steps: FormStep[];
}

@Injectable({
  providedIn: 'root'
})


/**
  *
 */
export class FormBuilderService {

  buildForm(schema: DynamicSchema): FormGroup {
    const group: { [key: string]: FormControl } = {};

    schema.steps.forEach(step => {
      step.fields.forEach(field => {
        const control = new FormControl(this.makeValidators(field));
        group[field.id] = control;
      });
    });

    const form = new FormGroup(group);

    // Apply conditional states and compute after form is created
    this.applyConditionalStates(schema, form);
    this.applyCompute(schema, form);

    // Subscribe to valueChanges to re-evaluate conditions and computations
    form.valueChanges.subscribe(() => {
      this.applyConditionalStates(schema, form);
      this.applyCompute(schema, form);
    });

    return form;
  }

  private makeValidators(field: FormField) {
    const validators = [];

    if (field.required) {
      validators.push(Validators.required);
    }
    if (field.min !== undefined) {
      validators.push(Validators.min(field.min));
    }
    if (field.max !== undefined) {
      validators.push(Validators.max(field.max));
    }
    if (field.minLength !== undefined) {
      validators.push(Validators.minLength(field.minLength));
    }
    if (field.maxLength !== undefined) {
      validators.push(Validators.maxLength(field.maxLength));
    }
    if (field.pattern !== undefined) {
      validators.push(Validators.pattern(field.pattern));
    }

    return validators;
  }

  private evalExpr(expr: string, form: FormGroup): any {
    if (!expr) {
      return true;
    }
    try {
      // Create a function with form values as variables
      const values = form.getRawValue();
      const func = new Function(...Object.keys(values), `return (${expr});`);
      return func(...Object.values(values));
    } catch {
      return false;
    }
  }

  private applyConditionalStates(schema: DynamicSchema, form: FormGroup): void {
    schema.steps.forEach(step => {
      step.fields.forEach(field => {
        const control = form.get(field.id);
        if (!control) return;

        const visible = this.isVisible(field, form);
        if (visible) {
          control.enable({ emitEvent: false });
        } else {
          control.disable({ emitEvent: false });
        }

        if (field.readOnlyIf) {
          const readOnly = this.evalExpr(field.readOnlyIf, form);
          if (readOnly) {
            control.disable({ emitEvent: false });
          } else if (visible) {
            control.enable({ emitEvent: false });
          }
        }
      });
    });
  }

  private applyCompute(schema: DynamicSchema, form: FormGroup): void {
    schema.steps.forEach(step => {
      step.fields.forEach(field => {
        if (field.compute) {
          const control = form.get(field.id);
          if (!control) return;

          const computedValue = this.evalExpr(field.compute, form);
          if (computedValue !== control.value) {
            control.setValue(computedValue, { emitEvent: false });
          }
        }
      });
    });
  }

  isVisible(field: FormField, form: FormGroup): boolean {
    if (!field.showIf) {
      return true;
    }
    return this.evalExpr(field.showIf, form);
  }
}
