import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantToHelpComponent } from './want-to-help.component';

describe('WantToHelpComponent', () => {
  let component: WantToHelpComponent;
  let fixture: ComponentFixture<WantToHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantToHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantToHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
