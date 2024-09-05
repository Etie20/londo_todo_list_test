import {Base} from "./Base";
import {User} from "./User";

export interface Task {
  _id: string
  name: string
  description: string
  state: Base
  category: Base,
  user: User | undefined,
  created_at: string
}
