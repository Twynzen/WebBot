import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformMenuComponent } from './platform-menu.component';

describe('PlatformMenuComponent', () => {
  let component: PlatformMenuComponent;
  let fixture: ComponentFixture<PlatformMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
