<script setup>
// 使用 MVVM 架構，導入 ViewModel 取代直接操作數據
import { useRouter } from 'vue-router';
import useSignUpViewModel from './SignUpViewModel';

// 導入組件
import WelcomeSection from '@/components/signup/WelcomeSection.vue';
import IntroductionSection from '@/components/signup/IntroductionSection.vue';

// 獲取路由實例
const router = useRouter();

// 使用 ViewModel 取得所有數據和方法
const { 
  // 狀態
  pageContent, 
  loading, 
  error, 
  showIntroduction,
  introSteps,
  currentStepIndex,
  
  // 計算屬性
  currentStep,
  isFirstStep,
  isLastStep,
  
  // 方法
  navigateToBasicInfo,
  handleUnderstand,
  nextStep,
  prevStep,
  closeIntroduction,
  handleLogin
} = useSignUpViewModel();

// 導航到基本信息頁面
const goToBasicInfo = () => {
  router.push(navigateToBasicInfo());
};

// 瞭解功能按鈕點擊處理
const handleUnderstandClick = () => {
  console.log('用戶點擊了瞭解看看按鈕');
  handleUnderstand(); // 調用 ViewModel 中的方法顯示介紹對話框
};

// 登入按鈕點擊處理
const handleLoginClick = () => {
  console.log('用戶點擊了會員登入按鈕');
  router.push(handleLogin());
};
</script>

<template>
  <!-- 使用三列模式的組合布局 -->
  <div class="app-layout">
    <!-- Logo 容器 -->
    <div class="logo-container">
      <img src="@/assets/4+2logo-wiet-text-vertical.svg" alt="4+2代謝飲食法" class="logo" />
    </div>
    
    <!-- 左側紫色歡迎區域 -->
    <WelcomeSection 
      :title="pageContent.leftTitle" 
      :description="pageContent.leftDescription" 
      @login="handleLoginClick"
    />
    
    <!-- 中間過渡曲線區域 SVG -->
    <div class="curve-section">
      <svg viewBox="0 0 218 866" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M64.6479 221.458C58.6154 92.77 80.8098 48.4784 98.3871 -4.30064e-06L0 0L3.78541e-05 866L163.021 866C168.288 844.699 175.661 772.789 163.021 655.56C147.222 509.023 72.1885 382.318 64.6479 221.458Z" fill="#9491C0"/>
        <path opacity="0.6" d="M90.7553 217.359C85.3416 88.6711 136.521 48.4784 152.295 -3.8595e-06L64 0L64 866L187.83 866C192.556 844.699 227.068 774.462 215.725 657.232C201.228 507.412 97.5225 378.219 90.7553 217.359Z" fill="#9491C0"/>
      </svg>
    </div>
    
    <!-- 右側介紹區域 -->
    <IntroductionSection 
      :title="pageContent.rightTitle"
      :showIntroduction="showIntroduction"
      :introSteps="introSteps"
      :currentStep="currentStep"
      :currentStepIndex="currentStepIndex"
      :isFirstStep="isFirstStep"
      :isLastStep="isLastStep"
      @understand="handleUnderstandClick"
      @signup="goToBasicInfo"
      @nextStep="nextStep"
      @prevStep="prevStep"
      @closeIntroduction="closeIntroduction"
    />
  </div>
</template>

<style scoped>
/* 基本布局容器 */
.app-layout {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative; /* 讓絕對定位的 logo 相對於此元素定位 */
  
  /* 移動設備切換為埠直布局 */
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch; /* 增強移動端滾動體驗 */
  }
}

/* Logo 容器 */
.logo-container {
  position: absolute;
  top: 52px;
  left: 52px;
  z-index: 100; /* 確保 logo 顯示在其他元素上方 */
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
  }
}

.logo {
  width: 120px;
  height: auto;
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    width: 100px;
  }
}

/* 左側紫色區域 */
.left-section {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 45; /* 使用flex比例確保左側區域約作45% */
  height: 100%;
  background-color: #9491C0; /* 紫色背景 */
  padding: 32px;
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    padding: 24px;
    flex: none;
    height: auto;
  }
}

/* 中間曲線區域 - 作為獨立區塊 */
.curve-section {
  /* flex 排版相關 */
  display: flex;
  align-items: stretch;
  flex: none; /* 移除彈性比例，確保固定寬度 */

  /* 尺寸相關 */
  width: 218px; /* 固定寬度218px，符合SVG的寬度 */
  height: 100%;

  /* 其他 */
  overflow: hidden;
  background-color: #F6F6F6; /* 設置中間區域背景色 */
  
  /* 移動端樣式 - 隱藏中間曲線 */
  @media (max-width: 768px) {
    display: none;
  }
}

/* 確保 SVG 完全填滿容器 */
.curve-section svg {
  width: 100%;
  height: 100%;
  display: block; /* 移除內部空隙 */
}

/* 右側白色區域 */
.right-section {
  /* flex 排版相關 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 45; /* 使用flex比例確保右側區域約作45% */

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

.title {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #9491C0;
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    font-size: 30px;
    margin-bottom: 20px;
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

/* 按鈕樣式已經移動到專用組件中 */

/* 這些樣式已經移動到相應的組件中 */
</style>
