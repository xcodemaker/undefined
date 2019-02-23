import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSectionComponent } from './vote-section.component';

describe('VoteSectionComponent', () => {
  let component: VoteSectionComponent;
  let fixture: ComponentFixture<VoteSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
