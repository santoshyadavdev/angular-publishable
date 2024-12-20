import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgPublishableComponent } from './ng-publishable.component';

describe('NgPublishableComponent', () => {
  let component: NgPublishableComponent;
  let fixture: ComponentFixture<NgPublishableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgPublishableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgPublishableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
