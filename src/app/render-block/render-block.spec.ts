import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderBlock } from './render-block';

describe('RenderBlock', () => {
  let component: RenderBlock;
  let fixture: ComponentFixture<RenderBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
