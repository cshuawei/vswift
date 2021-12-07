
export namespace Ux {
  export type Msg = string
}

export namespace Http {
  export type Url = string
  export interface Data {
    [prop: string]: any
  }
  export interface Options {
    method?: 'post' | 'get';
    url: string;
    withCredentials?: boolean,
    baseURL?: string,
    timeout?: number,
    isErrorHint?: boolean,
    headers?: { [prop: string]: any },
    data?: { [prop: string]: any },
    params?: { [prop: string]: any }
  }
}

export namespace Util {
  export type StorageType = 'local' | 'session'
  export type StorageAction = 'set' | 'get' | 'del'
  interface StorageOptions {
    expire: number
  }
  export type StorageArgs = [string?, StorageOptions?]
}

export interface Pattern {
  sum: RegExp,
  discount: RegExp,
  num: RegExp,
  numNoZero: RegExp,
  stock: RegExp,
  hour: RegExp,
  minute: RegExp,
  postCode: RegExp,
  email: RegExp,
  phone: RegExp,
  telephone: RegExp,
  nohanzi: RegExp,
  numbydot: RegExp,
  numEnbydot: RegExp,
  idCard: RegExp,
  bankCard: RegExp,
  noSpace: RegExp,
  password: RegExp,
}

export interface AfterReadFile {
  content: string
  message: string
  status: string
  file: File
}

export type AfterReadFileList = Array<AfterReadFile>
