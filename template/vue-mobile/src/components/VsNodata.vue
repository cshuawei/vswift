<script lang="ts" setup>
import { $util } from '@/common'
withDefaults(defineProps<{
  icon?: string
  description?: string
}>(), {
  icon: $util.getImageUrl('@/assets/nodata-icon.png'),
  description: '暂无数据'
})
</script>

<template>
  <div class="vs-nodata">
    <div class="cont">
      <van-icon :name="icon" size="100px" />
      <div class="des" v-html="description"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.vs-nodata {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 50px 0;
  .cont {
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    .des {
      font-size: 12px;
      color: #999999;
      text-align: center;
      line-height: 20px;
    }
  }
}
</style>
