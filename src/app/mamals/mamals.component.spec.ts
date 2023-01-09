import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MamalsComponent } from './mamals.component';

describe('MamalsComponent', () => {
  let component: MamalsComponent;
  let fixture: ComponentFixture<MamalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MamalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MamalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
