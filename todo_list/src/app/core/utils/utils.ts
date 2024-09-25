import {doneStateId, stateDefaultId} from "../../constants/constants";

export function findStateInverse(id: string): string {
  return id === doneStateId ? stateDefaultId : doneStateId
}
