import {Token} from "../../models/Token";

export interface Response<T> {
  data: T
  message: string
  token: Token | undefined
}
