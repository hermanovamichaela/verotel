import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IframeImageComponent } from './iframe-image.component';

describe('IframeImageComponent', () => {
  let component: IframeImageComponent;
  let fixture: ComponentFixture<IframeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IframeImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IframeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
