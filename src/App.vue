<script setup>
// 不需要額外組件
</script>

<template>
  <!-- 使用三列模式的組合布局 -->
  <div class="app-layout">
    <!-- 左側紫色區域 -->
    <div class="left-section">
      <img src="@/assets/sign-up-left.svg" alt="Left Image" />
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
      <img src="@/assets/sign-up-right.svg" alt="Right Image" />
    </div>
  </div>
</template>

<style>
/* 重設所有邊距和填充 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 特意設置全局樣式，確保整個頁面的背景色與高度 */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100vw;
  overflow: hidden;
  background-color: #F6F6F6; /* 確保整個頁面背景為淺灰色，避免黑色區塊 */
}

/* 覆蓋 main.css 的設定，使用更高的權重性 */
#app {
  max-width: 100vw !important; /* 確保應用佔滿整個視窗寬度 */
  padding: 0 !important; /* 移除所有填充 */
  margin: 0 !important; /* 移除自動居中 */
  height: 100vh;
  width: 100vw;
}

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
</style>