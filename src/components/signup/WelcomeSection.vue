<template>
  <div class="welcome-section">
    <div class="mobile-content-wrapper">
      <div class="welcome-container">
        <h1 class="welcome-title">{{ title }}</h1>
        <div class="divider"></div>
        <p class="welcome-text">{{ description }}</p>
        <div class="login-button-container">
          <div class="login-button" @click="$emit('login')">
            <span>會員登入</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 定義組件屬性
defineProps({
  title: {
    type: String,
    default: '歡迎回來~'
  },
  description: {
    type: String,
    default: ''
  }
});

// 定義事件
defineEmits(['login']);
</script>

<style scoped>
.welcome-section {
  /* flex 排版相關 */
  flex: 35; /* 使用flex比例確保左側區域約作35% */
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative; /* 確保絕對定位的 logo 相對於此元素定位 */
  
  /* 尺寸、顏色相關 */
  height: 100%;
  background-color: #9491C0;
  color: white;
  padding: 20px;
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    flex: none;
    padding: 150px 0 80px; /* 增加頂部內邊距，為 logo 留出空間 */
    height: auto;
    min-height: 40vh;
    justify-content: flex-start;
  }
}

.mobile-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative; /* 確保子元素可以使用絕對定位 */
  
  @media (max-width: 768px) {
    padding-top: 0px;
  }
}

/* 左上角 logo 容器 */
.logo-container {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 10;
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
  }
}

.logo {
  width: 120px;
  height: auto;
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    width: 100px;
    height: auto;
    display: block;
  }
}

.welcome-container {
  max-width: 300px;
  margin: 0 auto;
  text-align: center;
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    margin-top: 0;
    max-width: 280px;
  }
}

.welcome-title {
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  color: white;
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0;
  }
}

.divider {
  width: 33px;
  height: 3px;
  background-color: white;
  margin: 20px auto;
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    margin: 15px auto;
  }
}

.welcome-text {
  font-size: 14px;
  color: #f9f9f9;
  text-align: center;
  line-height: 1.8;
  width: 100%;
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    font-size: 13px;
    padding: 0 20px;
  }
}

.login-button-container {
  width: 100%;
  margin-top: 12px;
  
  /* 移動端樣式 */
  @media (max-width: 768px) {
    margin-top: 10px;
  }
}

.login-button {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.login-button:hover {
  background-color: #f0f0f0;
}

.login-button span {
  font-size: 20px;
  font-weight: 700;
  color: #9491C0;
  transform: rotate(-0.6deg);
}
</style>
