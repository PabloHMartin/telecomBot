import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatWindowModalComponent } from './chat-window-modal.component';

describe('ChatWindowModalComponent', () => {
  let component: ChatWindowModalComponent;
  let fixture: ComponentFixture<ChatWindowModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatWindowModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatWindowModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
