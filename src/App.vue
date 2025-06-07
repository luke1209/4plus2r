<script setup>
// 不需要額外組件
</script>

<template>
  <div class="background-container">
    <!-- 左側紫色區域 -->
    <div class="left-section"></div>
    
    <!-- 中間過渡曲線區域，直接嵌入 SVG -->
    <div class="curve-section">
      <svg viewBox="0 0 218 866" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M64.6479 221.458C58.6154 92.77 80.8098 48.4784 98.3871 -4.30064e-06L0 0L3.78541e-05 866L163.021 866C168.288 844.699 175.661 772.789 163.021 655.56C147.222 509.023 72.1885 382.318 64.6479 221.458Z" fill="#9491C0"/>
        <path opacity="0.6" d="M90.7553 217.359C85.3416 88.6711 136.521 48.4784 152.295 -3.8595e-06L64 0L64 866L187.83 866C192.556 844.699 227.068 774.462 215.725 657.232C201.228 507.412 97.5225 378.219 90.7553 217.359Z" fill="#9491C0"/>
      </svg>
    </div>
    
    <!-- 右側白色區域 -->
    <div class="right-section"></div>
  </div>
</template>

<style>
/* 重設所有邊距和填充 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  width: 100%;
  overflow: hidden;
}

/* 確保 Vue 應用佔滿整個視窗 */
#app {
  height: 100vh;
  width: 100vw;
}

/* 背景容器 - 使用 grid 而非 flex 來更精確控制區域 */
.background-container {
  display: grid;
  grid-template-columns: 45% 10% 45%; /* 區分為左、中、右三個區域 */
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

/* 左側紫色區域 */
.left-section {
  width: 100%; /* 使用全寬 */
  height: 100%;
  background-color: #9491C0; /* 紫色背景 */
  grid-column: 1;
}

/* 中間曲線區域 - 作為獨立區塊 */
.curve-section {
  width: 100%;
  height: 100%;
  grid-column: 2;
  overflow: hidden;
  display: flex;
  align-items: stretch;
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
  width: 100%;
  height: 100%;
  background-color: #F6F6F6;
  grid-column: 3;
}
</style>
