<script lang="ts" setup>
import { ref, Ref, watchEffect } from 'vue'
import { VsPicker } from '~/components'

const props = defineProps<{
  modelValue?: string | undefined
  name?: string
  label: string
  required?: boolean
  minDate?: Date
  maxDate?: Date
  rules?: VsPicker.Rules
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', val: string): void
}>()

const showPicker = ref(false)
const pickerName = ref(undefined) as Ref<string | undefined>
const pickerValue = ref(new Date())
const onSelect = () => {
  showPicker.value = true
}
watchEffect(() => {
  if (props.modelValue) {
    pickerValue.value = new Date(props.modelValue)
    pickerName.value = props.modelValue
  }
})
const zeroFill = (num: number) => {
  const transNum = num.toString()
  return transNum[1] ? transNum : '0' + transNum
}
const onConfirm = (res: Date) => {
  const date = new Date(res)
  const yyyy = date.getFullYear()
  const mm = date.getMonth() + 1
  const dd = date.getDate()
  emit('update:modelValue', `${yyyy}-${zeroFill(mm)}-${zeroFill(dd)}`)
  showPicker.value = false
}
</script>

<template>
 <div class="vs-datetime-picker van-cell">
  <van-field
    v-model="pickerName"
    :name="name"
    readonly
    :required="required"
    :label="label"
    :placeholder="`请选择${label}`"
    @click="onSelect"
    :rules="[{ required: true, message: `请选择${label}` }]"
  >
    <template #button>
      <van-button plain size="large" type="primary">选择</van-button>
    </template>
  </van-field>

  <van-popup v-model:show="showPicker" round position="bottom">
    <van-datetime-picker
      v-model="pickerValue"
      type="date"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="onConfirm"
      @cancel="showPicker = false"
    />
  </van-popup>
 </div>
</template>

<style lang="scss" scoped>
.vs-datetime-picker {
  &.van-cell {
    padding: 0;
    margin-bottom: 18px;
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
