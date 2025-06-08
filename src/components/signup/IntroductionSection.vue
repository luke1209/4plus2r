<template>
  <div class="introduction-section">
    <div class="understand-content">
      <slot name="title">
        <PageTitle :title="title" />
      </slot>
      
      <div class="info-icon-container">
        <!-- 4+2 食法介紹圖示 -->
        <img src="@/assets/4+2logo-with-text.svg" alt="4+2 代謝飲食法" width="225" />
      </div>
      
      <div class="buttons-container">
        <slot name="buttons">
          <AppButton type="primary" :text="understandText" @click="$emit('understand')" />
          <AppButton type="secondary" :text="signupText" @click="$emit('signup')" />
        </slot>
      </div>
    </div>
    
    <!-- 食法介紹對話框 -->
    <div v-if="showIntroduction" class="intro-modal">
      <div class="intro-modal-content">
        <div class="intro-modal-header">
          <h3>{{ currentStep.title }}</h3>
          <button class="close-btn" @click="$emit('closeIntroduction')">&times;</button>
        </div>
        
        <div class="intro-modal-body">
          <p>{{ currentStep.content }}</p>
          
          <div class="step-indicator">
            <span 
              v-for="(step, index) in introSteps" 
              :key="step.id"
              :class="['step-dot', { active: currentStepIndex === index }]"
            ></span>
          </div>
        </div>
        
        <div class="intro-modal-footer">
          <AppButton 
            v-if="!isFirstStep" 
            type="text" 
            text="上一步" 
            @click="$emit('prevStep')" 
          />
          <AppButton 
            v-if="!isLastStep" 
            type="primary" 
            text="下一步" 
            @click="$emit('nextStep')" 
          />
          <AppButton 
            v-else 
            type="primary" 
            text="開始註冊" 
            @click="$emit('signup')" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageTitle from '@/components/common/PageTitle.vue';
import AppButton from '@/components/common/AppButton.vue';

// 定義組件屬性
defineProps({
  title: {
    type: String,
    default: '是否瞭解？'
  },
  understandText: {
    type: String,
    default: '瞭解看看'
  },
  signupText: {
    type: String,
    default: '開始註冊'
  },
  // 新增屬性，用於控制對話框顯示
  showIntroduction: {
    type: Boolean,
    default: false
  },
  // 增加介紹步驟相關屬性
  currentStep: {
    type: Object,
    default: () => ({
      id: 1,
      title: '什麼是 4+2 代謝飲食法？',
      content: '4+2 代謝飲食法是一種無需琤量熱量，便於健康管理的飲食習慣。'
    })
  },
  introSteps: {
    type: Array,
    default: () => []
  },
  currentStepIndex: {
    type: Number,
    default: 0
  },
  isFirstStep: {
    type: Boolean,
    default: true
  },
  isLastStep: {
    type: Boolean,
    default: false
  }
});

// 定義事件
defineEmits(['understand', 'signup', 'nextStep', 'prevStep', 'closeIntroduction']);
</script>

<style scoped>
.introduction-section {
  /* flex 排版相關 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 45; /* 使用flex比例確保右側區域約作45% */
  position: relative; /* 用於定位模態框 */

  /* 尺寸、背景相關 */
  height: 100%;
  background-color: #F6F6F6;
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    flex: none;
    padding: 40px 0 60px 0; /* 增加底部間距 */
    height: auto;
    min-height: 60vh; /* 確保有足夠高度 */
  }
}

.understand-content {
  width: 100%;
  max-width: 500px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 24px;
  }
}

.info-icon-container {
  margin: 0 0 40px;
  display: flex;
  justify-content: center;
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    margin: 0 0 30px;
  }
}

.buttons-container {
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 329px;
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
}

/* 介紹對話框樣式 */
.intro-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.intro-modal-content {
  background-color: white;
  width: 90%;
  max-width: 480px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.intro-modal-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
}

.intro-modal-header h3 {
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
}

.close-btn:hover {
  color: #333;
}

.intro-modal-body {
  padding: 24px;
}

.intro-modal-body p {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
  margin: 0 0 24px;
}

.step-indicator {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 20px 0 10px;
}

.step-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ddd;
  display: inline-block;
}

.step-dot.active {
  background-color: #9491C0;
}

.intro-modal-footer {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #f0f0f0;
}

/* 移動端樣式調整 */
@media (max-width: 768px) {
  .intro-modal-content {
    width: 95%;
    max-height: 90vh;
    display: flex;
    flex-direction: column;
  }
  
  .intro-modal-body {
    overflow-y: auto;
    flex-grow: 1;
  }
}
</style>
