<script lang="ts" setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

// themeVars 内的值会被转换成对应 CSS 变量
// 比如 sliderBarHeight 会转换成 `--van-slider-bar-height`
const themeVars = {
  buttonPrimaryBackgroundColor: '#5082F6',
  buttonPrimaryBorderColor: '#5082F6',
  radioCheckedIconColor: '#5082F6'
}
</script>

<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view />
  </van-config-provider>
</template>

<style lang="scss">
:root {
  --van-black: #010A23;
  --van-cell-text-color: #010A23;
  --van-field-label-color: #010A23;
  --van-field-input-text-color: #010A23;
  --van-field-error-message-color: #EF5757;
  --van-checkbox-border-color: #2F66F3;
  --van-tabs-bottom-bar-color: #5082F6;
  --van-tabs-bottom-bar-width: 20px;
  --van-button-border-radius: 5px;
  --van-field-required-mark-color: #EF5757;
  --van-cell-right-icon-color: #c8c9cc;
  --van-cell-icon-size: 20px;
  --van-cell-vertical-padding: 12px;
  --van-cell-icon-size: 16px;
  --van-dialog-confirm-button-text-color: #323233;
  --van-dialog-border-radius: 10px;
}
a {
  color: #5082F6;
}
.buttons {
  padding: 30px 15px;
}
.border-top {
  position: relative;
  &::before {
    position: absolute;
    content: "";
    height: 1px;
    width: 100%;
    top: 0;
    background-color: #E1E1E1;
    transform: scaleY(0.5);
  }
}
.van-dialog__header {
  padding-bottom: 12px;
  font-size: 17px;
}
.van-tab--active {
  font-size: 15px;
}
.van-button__icon {
  line-height: 0;
  margin-right: 5px;
}
.van-cell__title {
  font-size: 16px;
}
.van-cell__left-icon {
  display: inline-flex;
  align-items: center;
  margin-right: 10px;
}
.van-dialog__message--has-title {
  color: var(--van-gray-6);
}
.van-field {
  flex-direction: column;
  overflow: visible;
  .van-field__label {
    position: relative;
    margin-bottom: 5px;
    padding: 0 8px;
    width: auto;
    font-size: 14px;
  }
  .van-field__label--required::before {
    position: absolute;
    left: 0;
  }
  .van-field__control {
    font-size: 16px;
  }
  .van-field__value {
    position: relative;
    padding: 0 8px;
  }
  .van-field__error-message {
    position: absolute;
    bottom: -35px;
  }
  .van-cell__right-icon {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }
  .van-field__button {
    display: inline-flex;
  }
  .van-button {
    border: 0 none;
    height: auto;
    &::before {
      background-color: transparent;
    }
  }
}
.van-form {
  .van-cell {
    &.vs-picker {
      margin-bottom: 18px;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  .van-field {
    margin-bottom: 18px;
  }
}
</style>
