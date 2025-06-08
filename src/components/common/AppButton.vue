<template>
  <button 
    class="app-button" 
    :class="[`type-${type}`, { 'full-width': fullWidth }]"
    @click="handleClick"
    :disabled="disabled"
  >
    <slot>{{ text }}</slot>
  </button>
</template>

<script setup>
// 定義元件屬性
const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'primary', // primary, secondary, outline
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

// 定義元件事件
const emit = defineEmits(['click']);

// 點擊事件處理
const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<style scoped>
.app-button {
  padding: 14px 10px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  flex: 1;
}

.full-width {
  width: 100%;
}

.type-primary {
  background-color: #9491C0;
  color: white;
  border: none;
}

.type-primary:hover:not(:disabled) {
  background-color: #8380B0;
}

.type-secondary {
  background-color: white;
  color: #9491C0;
  border: 2px solid #9491C0;
}

.type-secondary:hover:not(:disabled) {
  background-color: #F6F6F6;
}

.type-outline {
  background-color: transparent;
  color: #9491C0;
  border: 1px solid #9491C0;
}

.type-outline:hover:not(:disabled) {
  background-color: rgba(148, 145, 192, 0.05);
}

.app-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* 移動端樣式 */
@media (max-width: 768px) {
  .app-button {
    font-size: 15px;
  }
}
</style>
