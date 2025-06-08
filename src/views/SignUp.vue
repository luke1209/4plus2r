<script setup>
// 註冊註冊頁面所需組件
</script>

<template>
  <!-- 使用三列模式的組合布局 -->
  <div class="app-layout">
    <!-- 左側紫色區域 -->
    <div class="left-section">
      <div class="welcome-container">
        <h1 class="welcome-title">歡迎回來～</h1>
        <div class="divider"></div>
        <p class="welcome-text">最新消息內容或公告大綱等，最新消息內容或公告大綱等，最新消息內容或公告大綱等，最新消息內容或公告大綱等，最新消息內容或公告大綱等，最新消息內容或公告大綱等，</p>
        <div class="login-button-container">
          <div class="login-button">
            <span>會員登入</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- 中間過渡曲線區域 SVG -->
    <div class="curve-section">
      <svg viewBox="0 0 218 866" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M64.6479 221.458C58.6154 92.77 80.8098 48.4784 98.3871 -4.30064e-06L0 0L3.78541e-05 866L163.021 866C168.288 844.699 175.661 772.789 163.021 655.56C147.222 509.023 72.1885 382.318 64.6479 221.458Z" fill="#9491C0"/>
        <path opacity="0.6" d="M90.7553 217.359C85.3416 88.6711 136.521 48.4784 152.295 -3.8595e-06L64 0L64 866L187.83 866C192.556 844.699 227.068 774.462 215.725 657.232C201.228 507.412 97.5225 378.219 90.7553 217.359Z" fill="#9491C0"/>
      </svg>
    </div>
    
    <!-- 右側白色區域 -->
    <div class="right-section">
      <div class="understand-content">
        <h1 class="title">是否瞭解？</h1>
        
        <div class="info-icon-container">
          <!-- 4+2 食法介紹圖示 -->
          <img src="@/assets/4+2logo-with-text.svg" alt="4+2 代譚飲食法" width="225" />
        </div>
        
        <div class="buttons-container">
          <button class="understand-btn">瞭解看看</button>
          <button @click="$router.push('/basic-info')" class="signup-btn">開始註冊</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 主要應用佈局 */
.app-layout {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

/* 左側紫色區域 */
.left-section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 45; /* 使用flex比例確保左側區域約作45% */
  height: 100%;
  background-color: #9491C0; /* 紫色背景 */
  padding: 32px;
}

.welcome-container {
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
}

.welcome-title {
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  line-height: 1.2;
  width: 100%;
}

.divider {
  width: 80px;
  height: 2px;
  background-color: #E9E9E9;
}

.welcome-text {
  font-size: 14px;
  color: #f9f9f9;
  text-align: center;
  line-height: 1.8;
  width: 100%;
}

.login-button-container {
  width: 100%;
  margin-top: 12px;
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
}

.understand-content {
  width: 100%;
  max-width: 500px;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 36px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #9491C0;
}

.info-icon-container {
  margin: 0 0 40px;
  display: flex;
  justify-content: center;
}

.buttons-container {
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 329px;
}

.understand-btn {
  flex: 1;
  padding: 14px 10px;
  background-color: #9491C0;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.understand-btn:hover {
  background-color: #8380B0;
}

.signup-btn {
  flex: 1;
  padding: 14px 10px;
  background-color: white;
  color: #9491C0;
  border: 2px solid #9491C0;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.signup-btn:hover {
  background-color: #F6F6F6;
}

.form-section {
  margin-bottom: 20px;
}

.field-label {
  display: block;
  font-weight: 500;
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
}

.input-field {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #ECECEC;
  padding: 12px 15px;
}

.input-icon {
  margin-right: 10px;
  flex-shrink: 0;
}

.text-input {
  border: none;
  background: none;
  width: 100%;
  font-size: 16px;
  color: #333;
  outline: none;
}

.text-input::placeholder {
  color: #9C9C9C;
}

.next-button {
  width: 100%;
  padding: 15px 0;
  border: none;
  border-radius: 10px;
  background-color: #9491C0;
  color: white;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 30px;
}

.next-button:hover {
  background-color: #8380B0;
}

.login-link {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
  color: #666;
}

.login-link a {
  color: #9491C0;
  text-decoration: none;
  font-weight: 500;
}

.login-link a:hover {
  text-decoration: underline;
}
</style>
