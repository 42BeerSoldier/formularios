import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DynamicSchema } from '../form-builder-service/form-builder';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SchemaLoaderService {
  constructor(private http: HttpClient) {}

  loadSchema(name: string): Observable<DynamicSchema> {
    const url = `assets/templates-schemas/${name}.json`;
    return this.http.get<DynamicSchema>(url);
  }
}