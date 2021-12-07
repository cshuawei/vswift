<script lang="ts" setup>
import { ref } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { VsFooter } from '@/components'

const route = useRoute()
const showFooter = ref(true)
const footerExclude = [
  'ApplyReissue',
  'LicenseAuthorization',
  'Feedback'
]
const specialForBodyColor = [
  { name: 'AuthorizeCode', color: '#F7F7F7' },
  { name: 'LicenseCode', color: '#F7F7F7' },
  { name: 'LicensePublicity', color: '#F7F7F7' },
  { name: 'LicenseSearchResult', color: '#F7F7F7' }
]
const showFooterHandler = (name: string) => {
  if (footerExclude.includes(name)) showFooter.value = false
  else showFooter.value = true
}
const specialForBodyColorHandler = (name: string) => {
  const find = specialForBodyColor.find((e) => e.name === name)
  if (find) document.body.style.backgroundColor = find.color
  else document.body.style.backgroundColor = ''
}
const name = route.name as string

// 初始化页面背景色特殊设置
specialForBodyColorHandler(name)

// 初始化footer显示逻辑
showFooterHandler(name)

// 监听路由变化
onBeforeRouteUpdate((to) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
  const name = to.name as string

  // 给每个页面单独设置title
  document.title = to.meta.title as string

  // 给某些页面设置单独背景色
  specialForBodyColorHandler(name)

  // 是否显示footer逻辑
  showFooterHandler(name)
})
</script>

<template>
  <div class="wrap">
    <router-view></router-view>
    <VsFooter v-if="showFooter" />
  </div>
</template>

<style lang="scss" scoped>
.wrap {
  position: relative;
  min-height: calc(100vh - 80px);
}
</style>
