import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSheetComponent } from './todo-sheet.component';

describe('TodoSheetComponent', () => {
  let component: TodoSheetComponent;
  let fixture: ComponentFixture<TodoSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoSheetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
