import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page-renderer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="pageData as data">
      <pre class="text-xs bg-slate-100 p-4 rounded">{{ data | json }}</pre>
    </ng-container>
  `
})
export class PageRendererComponent implements OnInit {
  pageData: any;
  route = inject(ActivatedRoute);
  http = inject(HttpClient);

  ngOnInit(): void {
    const page = this.route.snapshot.paramMap.get('page');
    this.http.get(`/assets/pages/${page}.json`).subscribe(data => {
      this.pageData = data;
    });
  }
}

