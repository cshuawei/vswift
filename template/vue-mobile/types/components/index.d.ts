export namespace VsPicker {
  export type Value = string | number | undefined
  export interface Res {
    text: string
    value: Value
  }
  export interface Column {
    values: Array<Res>
    defaultIndex: number
  }
  export type Rules = Array<{ required: boolean, message: string }>
  export type Columns = Array<Res>
}
