<script lang="ts" setup>
import { ref, Ref } from 'vue'
import { $util, $ux, $http } from '@/common'
import { VsPicker, VsDatetimePicker } from '@/components'

const data = ref({
  name: '表单页面模板'
})
const params = ref({}) as Ref<any>
const columns = ref([
  { text: '选项1', value: '1' },
  { text: '选项2', value: '2' }
])

const onSubmit = (res: any) => {
  console.log(res)
}
</script>

<template>
  <div class="page-name">
    <header>{{data.name}}</header>
    <van-form @submit="onSubmit">
      <van-cell-group :border="false">
        <VsPicker
          v-model="params.picker"
          name="picker"
          label="单选"
          :default-index="0"
          :columns="columns"
          :rules="[{ required: true, message: '请选择单选' }]"
        />
        <VsDatetimePicker
          v-model="params.dateTime"
          name="dateTime"
          label="日期"
          :rules="[{ required: true, message: '请选择日期' }]"
        />
        <van-field
          v-model="params.field"
          name="field"
          label="文本"
          required
          placeholder="请输入文本"
          :rules="[{ required: true, message: '请输入文本' }]"
        />
      </van-cell-group>
    </van-form>
  </div>
</template>

<style lang="scss" scoped>
.page-name {
  font-size: 16px;
}
</style>
