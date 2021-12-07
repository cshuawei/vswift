/**
 * 常用交互方法
 *
 */
import { Toast } from 'vant'
import { Ux } from '~/common'

const $ux = {
  toast (msg: Ux.Msg) {
    Toast(msg)
  },
  toastSuccess (msg: Ux.Msg) {
    Toast.success(msg)
  },
  toastFail (msg: Ux.Msg) {
    Toast.fail(msg)
  },
  loading (msg?: Ux.Msg) {
    return Toast.loading({
      duration: 0,
      forbidClick: true,
      message: msg || '加载中...'
    })
  },
  loadend () {
    Toast.clear()
  }
}
export default $ux
