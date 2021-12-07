<script lang="ts" setup>
import faviconSrc from '@/assets/logo.png'
</script>

<template>
  <div class="vs-footer">
    <div>
      <van-icon size="12" :name="faviconSrc" />
      <span>Vue-mobile项目模板</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vs-footer {
  position: absolute;
  bottom: -80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
  width: 100%;
  font-size: 12px;
  color: #999;
  div {
    display: inline-flex;
    align-items: center;
    .van-icon {
      margin-right: 10px;
    }
  }
}
</style>
