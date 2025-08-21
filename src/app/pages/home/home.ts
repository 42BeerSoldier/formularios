import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageRendererComponent } from '../page-renderer-component/page-renderer-component';
import { RenderBlock } from '../../render-block/render-block';

@Component({
  selector: 'app-home',
  standalone:true,
  imports: [RouterModule,JsonPipe,CommonModule,PageRendererComponent,RenderBlock],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  pageData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  
    this.http.get('assets/pages/home.json').subscribe({
      next: (res) => {
        console.log('res : ',res);
        this.pageData = res;
        console.log('this.pageData : ',this.pageData);
      },
      error: (err) => console.error('Error al cargar JSON:', err)
    });
  }
}
