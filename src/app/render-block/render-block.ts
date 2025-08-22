import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Injector, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { PromoUno } from '../components/promo-uno/promo-uno';

@Component({
standalone:true,
  selector: 'app-render-block',
  imports: [CommonModule],
  templateUrl: './render-block.html',
  styleUrl: './render-block.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RenderBlock {
  @Input() block: any;

  constructor(private injector: Injector) {}

}
