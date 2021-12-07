<script lang="ts" setup>
withDefaults(defineProps<{
  title?: string
}>(), {
  title: '请配置标题'
})
</script>

<template>
  <div class="vs-popup-box">
    <div class="title">{{title}}</div>
    <div class="cont">
      <slot name="cont">请编写正文</slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vs-popup-box {
  height: 100%;
  .title {
    font-size: 16px;
    font-weight: bold;
    padding: 20px;
  }
  .cont {
    padding: 0 20px;
    height: calc(100% - 62px);
    overflow: auto;
  }
}
</style>
