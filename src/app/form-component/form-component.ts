import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchemaLoaderService } from '../services/schema-loader-service/schema-loader.service';
import { DynamicSchema } from '../services/form-builder-service/form-builder';
import { DynamicFormComponent } from '../dynamic-form/dynamic-form';

@Component({
  selector: 'app-form-component',
  imports: [DynamicFormComponent],
  templateUrl: './form-component.html',
  styleUrl: './form-component.css'
})
export class FormComponent {
  schema!: DynamicSchema;

  constructor(
    private route: ActivatedRoute,
    private schemaLoader: SchemaLoaderService
  ) {}

  ngOnInit() {
    const tipo = 'login-schema';
    this.schemaLoader.loadSchema(tipo).subscribe(schema => {
      this.schema = schema;
    });

    console.log('this.schema : ', this.schema)
  }


}
