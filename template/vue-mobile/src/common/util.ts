/**
 * 常用公共方法
 */
import { Util } from '~/common'
const $util = {
  /**
   * storage方法简写
   * @param type 存储类型
   * @param action 执行动作
   * @param key 键名称
   * @param value 键值
   */
  storage (type: Util.StorageType, action: Util.StorageAction, key: string, ...args: Util.StorageArgs): void {
    const [value] = args
    if (type === 'local') {
      if (action === 'set') {
        window.localStorage.setItem(key, value || '')
      } else if (action === 'del') {
        window.localStorage.removeItem(key)
      } else if (action === 'get') {
        window.localStorage.getItem(key)
      }
    } else if (type === 'session') {
      if (action === 'set') {
        window.sessionStorage.setItem(key, value || '')
      } else if (action === 'del') {
        window.sessionStorage.removeItem(key)
      } else if (action === 'get') {
        window.sessionStorage.getItem(key)
      }
    }
  },
  /**
   * 简易倒计时
   * @param sec 倒计时总秒数
   * @param changeFun 每秒变化时的回调
   * @param doneFun 倒计时完成时的回调
   */
  countDown (sec: number, changeFun: (sec: number) => void, doneFun?: () => void) {
    const timer = setInterval(() => {
      sec--
      if (sec) {
        changeFun(sec)
      } else {
        clearInterval(timer)
        if (doneFun) {
          doneFun()
        }
      }
    }, 1000)
  },
  /**
   * 信息脱敏处理
   * @param str 需要脱敏的源数据，如果是number类型则会被转为string类型
   * @param startLen 起始长度
   * @param endLen 结束长度
   */
  desen (str: string | number, startLen: number, endLen: number) {
    const toStr = str + ''
    let len = toStr.length - startLen - endLen
    let xin = ''
    while (len > 0) {
      xin += '*'
      len--
    }
    return `${toStr.substring(0, startLen)}${xin}${toStr.substring(toStr.length - endLen)}`
  },
  /**
   * 相对路径图片资源解析为完整URL
   * @param path 图片相对路径
   */
  getImageUrl (path: string) {
    const url = import.meta.url
    const endLen = url.indexOf('/src/')
    const toPath = path.replace(/@\//, 'src/')
    return new URL(toPath, url.substring(0, endLen)).href
  }
}

export default $util
