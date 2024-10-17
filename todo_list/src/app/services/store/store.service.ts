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
  readonly defaultTasks = computed(() => this._store().defaultTasks);

  initializeTask(task: Task[]) {
    this._store.update((s) => ({ ...s, tasks: task, defaultTasks: task }));
  }

  setTasks(task: Task[]) {
    this._store.update((s) => ({ ...s, tasks: task }));
  }

  updateTask(task: Task) {
    this._store.update((s) => ({
      ...s,
      tasks: s.tasks.map((t) => t),
      defaultTasks: s.defaultTasks.map((t) => (t._id === task._id ? task : t)),
    }));
  }

  updateTasks(task: Task[], defaultTasks: Task[]) {
    this._store.update((s) => ({
      ...s,
      tasks: task,
      defaultTasks: defaultTasks
    }));
  }

  resetTask() {
    this._store.update((s) => ({ ...s, tasks: s.defaultTasks }));
  }
}
