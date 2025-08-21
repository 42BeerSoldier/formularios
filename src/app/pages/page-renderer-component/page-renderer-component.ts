import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RenderBlock } from '../../render-block/render-block';
import { PromoUno } from '../../components/promo-uno/promo-uno';
@Component({
  selector: 'app-page-renderer',
  standalone: true,
  imports: [CommonModule,RenderBlock,PromoUno],
  templateUrl: './page-renderer-component.html',
})
export class PageRendererComponent implements OnInit {

  type!: string;
  pageData: any;
  route = inject(ActivatedRoute);
  http = inject(HttpClient);

  ngOnInit(): void {
    
    this.type = this.route.snapshot.paramMap.get('type') || '';
    this.http.get(`/assets/pages/${this.type}.json`).subscribe(data => {
      this.pageData = data;
      console.log('PageRendererComponent this.pageData : ',this.pageData)
    });
  }

  objectKeys(obj: any): string[] {
    return obj ? Object.keys(obj) : [];
  }

  isObject(value: any): boolean {
    return typeof value === 'object' && !Array.isArray(value);
  }

  isString(value: any): boolean {
    return typeof value === 'string';
  }
}

