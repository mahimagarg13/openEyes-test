import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrantListComponent } from './registrant-list.component';

describe('RegistrantListComponent', () => {
  let component: RegistrantListComponent;
  let fixture: ComponentFixture<RegistrantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrantListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
