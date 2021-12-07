<script lang="ts" setup>
import { ref } from 'vue'
import { $util, $ux, $http } from '@/common'

const data = ref({
  name: '默认页面模板'
})
</script>

<template>
  <div class="page-name">
    {{data.name}}
  </div>
</template>

<style lang="scss" scoped>
.page-name {
  font-size: 16px;
}
</style>
