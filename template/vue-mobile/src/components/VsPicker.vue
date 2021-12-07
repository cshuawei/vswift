<script lang="ts" setup>
import { ref, Ref, watchEffect } from 'vue'
import { VsPicker } from '~/components'

const props = defineProps<{
  modelValue?: VsPicker.Value
  defaultIndex?: number | string
  name?: string
  label: string
  required?: boolean
  clearable?: boolean
  rules?: VsPicker.Rules
  columns: VsPicker.Columns
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', val: VsPicker.Value): void
}>()

const picker = ref(null) as Ref<any>
const showPicker = ref(false)
const pickerName = ref(undefined) as Ref<string | undefined>
const pickerValue = ref(undefined) as Ref<VsPicker.Value>
watchEffect(() => {
  if (props.modelValue) {
    const find = props.columns.find((item: VsPicker.Res) => item.value === props.modelValue) as VsPicker.Res
    pickerName.value = find.text
    pickerValue.value = props.modelValue
  }
})
const onSelect = () => {
  showPicker.value = true
}
const onConfirm = (res: VsPicker.Res) => {
  if (pickerValue.value !== res.value) {
    const find = props.columns.find((item: VsPicker.Res) => item.value === res.value) as VsPicker.Res
    pickerName.value = find.text
    pickerValue.value = res.value
    emit('update:modelValue', find.value)
  }
  showPicker.value = false
}
</script>

<template>
 <div class="vs-picker van-cell">
  <van-field
    v-model="pickerName"
    :name="`${name}__name`"
    readonly
    :required="required"
    :clearable="clearable"
    :label="label"
    :placeholder="`请选择${label}`"
    @click="onSelect"
    :rules="[{ required: true, message: `请选择${label}` }]"
  >
    <template #button>
      <!-- <van-icon name="clear" style="opacity: 0.65;"/> -->
      <van-button plain size="large" type="primary">选择</van-button>
    </template>
  </van-field>

  <van-popup v-model:show="showPicker" :lazy-render="false" round position="bottom">
    <van-picker
      ref="picker"
      :columns="columns"
      :default-index="defaultIndex"
      @cancel="showPicker = false"
      @confirm="onConfirm"
    />
  </van-popup>
 </div>
</template>

<style lang="scss" scoped>
.vs-picker {
  &.van-cell {
    padding: 0;
    overflow: visible;
  }
  .van-field {
    margin-bottom: 0 !important;
    .van-button {
      border: 0 none;
      height: auto;
      &::before {
        background-color: transparent;
      }
    }
  }
}
</style>
