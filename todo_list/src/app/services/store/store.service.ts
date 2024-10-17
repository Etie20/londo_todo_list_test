import {computed, Injectable, signal} from '@angular/core';
import {Task} from "../../core/models/Task";

interface ApplicationState {
  tasks: Task[];
  defaultTasks: Task[]
}

const initialState: ApplicationState = {
  tasks: [],
  defaultTasks: []
};

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private readonly _store = signal(initialState);
  readonly tasks = computed(() => this._store().tasks);

  initializeTask(task: Task[]) {
    this._store.update((s) => ({ ...s, tasks: task, defaultTasks: task }));
  }

  setTasks(task: Task[]) {
    this._store.update((s) => ({ ...s, tasks: task }));
  }

  addTask(task: Task) {
    this._store.update((s) => ({
      ...s,
      tasks: [...s.tasks, task],
      defaultTasks: [...s.defaultTasks, task]
    }));
  }

  updateTask(task: Task) {
    this._store.update((s) => ({
      ...s,
      tasks: s.tasks.map((t) => t),
      defaultTasks: s.defaultTasks.map((t) => (t._id === task._id ? task : t)),
    }));
  }

  removeTask(task: Task) {
    this._store.update((s) => ({
      ...s,
      tasks: s.tasks.filter((t) => t._id !== task._id),
      defaultTasks: s.defaultTasks.filter((t) => t._id !== task._id),
    }));
  }

  resetTask() {
    this._store.update((s) => ({ ...s, tasks: s.defaultTasks }));
  }
}
