import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Injector, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PromoUno } from '../components/promo-uno/promo-uno';

@Component({
  selector: 'app-render-block',
  imports: [CommonModule,PromoUno],
  templateUrl: './render-block.html',
  styleUrl: './render-block.css'
})
export class RenderBlock {
  @Input() block: any;

  constructor(private injector: Injector) {}

}
