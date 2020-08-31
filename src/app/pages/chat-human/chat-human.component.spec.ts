import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHumanComponent } from './chat-human.component';

describe('ChatHumanComponent', () => {
  let component: ChatHumanComponent;
  let fixture: ComponentFixture<ChatHumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatHumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
