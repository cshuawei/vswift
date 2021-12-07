<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { $pattern, $ux, $util } from '@/common'
import { VsPopupBox } from '@/components'
import { Params } from '~/Login'

const router = useRouter()
const params = reactive({}) as Params
const checked = ref(false)
const showPopup = ref(false)
const popupTitle = ref('')
const popupValue = ref('')
const onSubmit = (values: Params) => {
  if (!checked.value) {
    $ux.toast('请勾选同意用户服务协议和隐私政策')
    return
  }
  console.log(values)
  router.replace({
    path: '/myLicense'
  })
}
const onProtocol = () => {
  console.log('onProtocol')
  popupValue.value = 'Protocol'
  popupTitle.value = '用户服务协议'
  showPopup.value = true
}
const onPrivacy = () => {
  console.log('onPrivacy')
  popupValue.value = 'Privacy'
  popupTitle.value = '隐私政策'
  showPopup.value = true
}
console.log($util.desen(420983, 1, 1))
</script>

<template>
  <div class="login">
    <div class="title">
      <h2>欢迎登录</h2>
      <h3>请进行<a>实名信息验证</a></h3>
    </div>
    <van-form @submit="onSubmit">
      <van-cell-group>
        <van-field
          v-model="params.userName"
          name="userName"
          label="姓名"
          placeholder="请输入姓名"
          :rules="[{ required: true, message: '请输入姓名' }]"
        />
        <van-field
          v-model="params.idCard"
          name="idCard"
          label="身份证号"
          placeholder="请输入身份证号"
          :rules="[
            { required: true, message: '请输入身份证号' },
            { pattern: $pattern.idCard, message: '身份证号输入不正确' }
          ]"
        />
      </van-cell-group>
      <div class="privacy">
        <van-checkbox v-model="checked" icon-size="16px" shape="square">我同意xxx统一身份认证平台使用我所提交的信息用于快捷登录。查看<a @click.stop="onProtocol">《用户服务协议》</a>和<a @click.stop="onPrivacy">《隐私政策》</a></van-checkbox>
      </div>
      <div class="buttons">
        <van-button round block type="primary" native-type="submit">人脸识别</van-button>
      </div>
    </van-form>
  </div>
  <van-popup
    v-model:show="showPopup"
    closeable
    round
    :style="{ height: '90%', width: '85%' }"
  >
    <VsPopupBox :title="popupTitle">
      <template #cont>
        <template v-if="popupValue === 'Protocol'">
          <div style="height: 800px;">
          用户服务协议内容
          </div>
        </template>
        <template v-if="popupValue === 'Privacy'">
          隐私政策内容
        </template>
      </template>
    </VsPopupBox>
  </van-popup>
</template>

<style lang="scss" scoped>
.login {
  padding: 27px;
  .title {
    margin-bottom: 60px;
    h2 {
      font-weight: normal;
      font-size: 23px;
      margin: 0 0 14px 0;
    }
    h3 {
      font-weight: normal;
      font-size: 16px;
      margin: 0;
    }
  }
  .van-cell-group {
    margin-bottom: 43px;
  }
  .van-cell {
    margin-left: -10px;
    margin-right: -10px;
  }
  .van-checkbox {
    align-items: flex-start;
  }
  :deep {
    .van-checkbox__icon {
      margin-top: 3px;
    }
    .van-hairline--top-bottom::after {
      border-top-width: 0;
    }
  }
  .privacy {
    font-size: 14px;
    margin-bottom: 20px;
  }
  .buttons {
    margin-left: -15px;
    margin-right: -15px;
  }
}
</style>
