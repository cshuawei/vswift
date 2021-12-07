<script lang="ts" setup>
import { ref } from 'vue'
import { $util, $ux, $http } from '@/common'
import router from '@/router'

const active = ref('all')
const items = ref([
  { id: '1', title: '范德萨发', icon: $util.getImageUrl('@/assets/jmsfz-icon.png') },
  { id: '2', title: '割发代首改的是', icon: $util.getImageUrl('@/assets/bdcqzs-icon.png') },
  { id: '3', title: '个答复撒范德萨', icon: $util.getImageUrl('@/assets/bdcdjzm-icon.png') },
])

const loading = ref(false)
const finished = ref(true)
const onLoad = () => {
  console.log('onLoad')
}
const onAction = (id: string) => {
  router.push({
    path: `/detail/${id}`
  })
}
</script>

<template>
  <div class="page-name">
    <van-tabs v-model:active="active">
      <van-tab name="all" title="全部(3)">
        <van-list v-model:loading="loading" :finished="finished" @load="onLoad">
          <van-cell-group>
            <van-cell
              v-for="item in items"
              :key="item.id"
              :title="item.title"
              :icon="item.icon"
            >
              <template #value>
                <van-button plain type="primary" size="small" @click="onAction(item.id)">按钮</van-button>
              </template>
              <template #label>
                <div>
                  <p>授权期限：2021/01/22~2021/01/25</p>
                  <p>允许使用次数：3次</p>
                </div>
              </template>
            </van-cell>
          </van-cell-group>
        </van-list>
      </van-tab>
      <van-tab name="notActive" title="未生效(3)">
        <van-list v-model:loading="loading" :finished="finished" @load="onLoad">
          <van-cell-group>
            <van-cell
              v-for="item in items"
              :key="item.id"
              :title="item.title"
              :icon="item.icon"
            >
              <template #value>
                <van-button plain type="primary" size="small" @click="onAction(item.id)">按钮</van-button>
              </template>
              <template #label>
                <div>
                  <p>授权期限：2021/01/22~2021/01/25</p>
                  <p>允许使用次数：3次</p>
                </div>
              </template>
            </van-cell>
          </van-cell-group>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>

<style lang="scss" scoped>
.page-name {
  .van-cell {
    align-items: center;
  }
  :deep .van-cell__left-icon {
    align-self: flex-start;
  }
  :deep .van-cell__title > span {
    display: block;
    margin-bottom: 10px;
  }
  .van-cell__label {
    p {
      margin: 0 0 5px 0;
    }
  }
  :deep .van-cell__value {
    flex: unset;
    .van-button--small {
      height: 28px;
      line-height: 28px;
    }
    .van-button--plain {
      background-color: rgba(#5082F6, 0.2);
    }
  }
}
</style>
