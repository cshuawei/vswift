<script lang="ts" setup>
import { ref, StyleValue } from 'vue'

const props = withDefaults(defineProps<{
  title?: string
  message: string
  backgroundColor?: string
}>(), {
  backgroundColor: '#E9EEFE'
})

const emit = defineEmits<{
  (e: 'on-close'): void
}>()

const styleObj = ref({
  '--background-color': props.backgroundColor
}) as StyleValue

const show = ref(true)

const onClose = () => {
  show.value = false
  emit('on-close')
}
</script>

<template>
  <div v-if="show" class="vs-alert" :style="styleObj">
    <h3 v-if="title">{{title}}</h3>
    <div>{{message}}</div>
    <a class="close-btn" @click="onClose"><van-icon name="cross" /></a>
  </div>
</template>

<style lang="scss" scoped>
.vs-alert {
  position: relative;
  color: #5082F6;
  padding: 15px 20px;
  background-color: var(--background-color);
  h3 {
    font-size: 12px;
    margin: 0 0 6px 0;
  }
  div {
    font-size: 11px;
  }
  .close-btn {
    position: absolute;
    right: 5px;
    top: 5px;
  }
}
</style>
