import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MYSkillsComponent } from './my-skills.component';

describe('MYSkillsComponent', () => {
  let component: MYSkillsComponent;
  let fixture: ComponentFixture<MYSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MYSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MYSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
