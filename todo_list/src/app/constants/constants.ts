import {Task} from "../core/models/Task";

export const stateDefaultId: string = '66d65d5626dfb735b9be6608';
export const doneStateId: string = '66d65d6126dfb735b9be660a';
export const TOKEN_KEY = 'token';
export const USER_DATA = 'user';
export const TOKEN_HEADER_KEY = 'Authorization';
export function rebuildTasks(tasks: Task[], task: Task) {
  return tasks.map(t => t._id === task._id ? task : t)
}

export function filterTasks(tasks: Task[], task: Task) {
  return tasks.filter(t => t._id !== task._id)
}


