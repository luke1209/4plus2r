<script setup>
import BasicInfoForm from '@/components/BasicInfoForm.vue';
</script>

<template>
  <div class="basic-info-page">
    <!-- 頂部導航欄 -->
    <header class="header">
      <div class="logo-container">
        <img src="@/assets/4+2logo-wiet-text-vertical.svg" alt="4+2代謝飲食法" class="logo" />
      </div>
    </header>
    
    <!-- 主要內容區域 -->
    <main class="main-content">
      <div class="form-container">
        <BasicInfoForm />
      </div>
      
      <!-- 右側綠色卡通形象 -->
      <div class="character-container">
        <img src="@/assets/green-character.svg" alt="Green Character" class="character-image" />
      </div>
    </main>
  </div>
</template>

<style scoped>
/* 頁面主要容器 */
.basic-info-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  background-color: #F6F6F6;
}

/* 頂部導航欄 */
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 100%;
  background-color: #9491C0;
  color: white;
}

/* Logo 容器 */
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Logo 文字 */
.logo {
  font-size: 20px;
  font-weight: bold;
}

/* Logo 副標題 */
.logo-text {
  font-size: 14px;
}

/* 主要內容區域 */
.main-content {
  display: flex;
  justify-content: center;
  position: relative;
  flex: 1;
  padding: 40px 20px;
}

/* 表單容器 */
.form-container {
  width: 100%;
  max-width: 540px;
  position: relative;
  z-index: 1;
}

/* 卡通形象容器 */
.character-container {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 50%;
  z-index: 0;
}

/* 卡通形象圖片 */
.character-image {
  height: 100%;
  max-height: 400px;
}
</style>
