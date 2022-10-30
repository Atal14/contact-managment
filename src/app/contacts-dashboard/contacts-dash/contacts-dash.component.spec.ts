import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsDashComponent } from './contacts-dash.component';

describe('ContactsDashComponent', () => {
  let component: ContactsDashComponent;
  let fixture: ComponentFixture<ContactsDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactsDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
