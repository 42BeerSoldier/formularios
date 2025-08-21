import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  pageData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('/assets/pages/home.json').subscribe(data => {
      this.pageData = data;
    });
  }
}
