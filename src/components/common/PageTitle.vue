<template>
  <h1 class="page-title" :class="{ [colorClass]: true }">
    <slot>{{ title }}</slot>
  </h1>
</template>

<script setup>
import { computed } from 'vue';

// 組件屬性定義
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  color: {
    type: String,
    default: 'primary' // 預設使用主要顏色
  }
});

// 動態計算顏色類
const colorClass = computed(() => {
  const validColors = ['primary', 'secondary', 'dark'];
  return validColors.includes(props.color) ? `color-${props.color}` : 'color-primary';
});
</script>

<style scoped>
.page-title {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 30px;
}

.color-primary {
  color: #9491C0; /* 主要顏色 */
}

.color-secondary {
  color: #333333; /* 次要顏色 */
}

.color-dark {
  color: #111111; /* 深色 */
}

/* 移動端樣式 */
@media (max-width: 768px) {
  .page-title {
    font-size: 30px;
    margin-bottom: 20px;
  }
}
</style>
