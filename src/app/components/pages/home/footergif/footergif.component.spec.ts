import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootergifComponent } from './footergif.component';

describe('FootergifComponent', () => {
  let component: FootergifComponent;
  let fixture: ComponentFixture<FootergifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootergifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FootergifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
