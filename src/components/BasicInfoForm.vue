<script setup>
import { ref } from 'vue';

// 設置表單資料
const realName = ref('');
const gender = ref('男性'); // 預設選擇男性
const birthDate = ref('');
const height = ref('');
</script>

<template>
  <div class="form-container">
    <div class="form-header">
      <button class="back-button" @click="$router.push('/')">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 18L9 12L15 6" stroke="#7F7CB7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <h1 class="form-title">基本資料</h1>
    </div>
    
    <div class="form-section">
      <label class="field-label">真實姓名</label>
      <div class="input-field">
        <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.6668 17.5V15.8333C16.6668 14.9493 16.3156 14.1014 15.6905 13.4763C15.0654 12.8512 14.2176 12.5 13.3335 12.5H6.66683C5.78277 12.5 4.93493 12.8512 4.30981 13.4763C3.68469 14.1014 3.3335 14.9493 3.3335 15.8333V17.5" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.0002 9.16667C11.841 9.16667 13.3335 7.67428 13.3335 5.83333C13.3335 3.99238 11.841 2.5 10.0002 2.5C8.15921 2.5 6.66683 3.99238 6.66683 5.83333C6.66683 7.67428 8.15921 9.16667 10.0002 9.16667Z" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input
          type="text"
          v-model="realName"
          placeholder="輸入您的真實姓名"
          class="text-input"
        />
      </div>
    </div>
    
    <div class="form-section">
      <label class="field-label">會員性別</label>
      <div class="gender-buttons">
        <button 
          :class="['gender-button', gender === '男性' ? 'active' : '']"
          @click="gender = '男性'"
        >
          男性
        </button>
        <button 
          :class="['gender-button', gender === '女性' ? 'active' : '']"
          @click="gender = '女性'"
        >
          女性
        </button>
      </div>
    </div>
    
    <div class="form-section">
      <label class="field-label">會員生日</label>
      <div class="input-field">
        <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.8333 3.33334H4.16667C3.24619 3.33334 2.5 4.07954 2.5 5.00001V16.6667C2.5 17.5872 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5872 17.5 16.6667V5.00001C17.5 4.07954 16.7538 3.33334 15.8333 3.33334Z" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M13.3335 1.66666V4.99999" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6.6665 1.66666V4.99999" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.5 8.33334H17.5" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input
          type="text"
          v-model="birthDate"
          placeholder="選擇您的生日"
          class="text-input"
        />
      </div>
      <div class="hint-text">
        <svg class="hint-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0002 18.3333C14.6025 18.3333 18.3335 14.6024 18.3335 10C18.3335 5.39763 14.6025 1.66667 10.0002 1.66667C5.39783 1.66667 1.66687 5.39763 1.66687 10C1.66687 14.6024 5.39783 18.3333 10.0002 18.3333Z" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 13.3333V10" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 6.66667H10.0083" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>換算會員年紀及生日相關活動公告</span>
      </div>
    </div>
    
    <div class="form-section">
      <label class="field-label">會員身高</label>
      <div class="input-field">
        <svg class="input-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.16675 1.66666L4.16675 18.3333" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M15.8333 1.66666L15.8333 18.3333" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.16675 10L15.8334 10" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.16675 5L7.50008 5" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M4.16675 15L7.50008 15" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.5 5L15.8333 5" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M12.5 15L15.8333 15" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <input
          type="text"
          v-model="height"
          placeholder="選擇您的身高"
          class="text-input"
        />
        <span class="unit-label">cm</span>
      </div>
      <div class="hint-text">
        <svg class="hint-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.0002 18.3333C14.6025 18.3333 18.3335 14.6024 18.3335 10C18.3335 5.39763 14.6025 1.66667 10.0002 1.66667C5.39783 1.66667 1.66687 5.39763 1.66687 10C1.66687 14.6024 5.39783 18.3333 10.0002 18.3333Z" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 13.3333V10" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 6.66667H10.0083" stroke="#9C9C9C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>了解會員基本身體數值</span>
      </div>
    </div>
    
    <div class="pagination-dots">
      <div class="dot active"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    
    <button class="next-button">下一步</button>
  </div>
</template>

<style scoped>
.form-container {
  width: 100%;
  max-width: 500px;
  background-color: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.form-header {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.back-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-title {
  font-size: 24px;
  font-weight: 600;
  color: #333;
  text-align: center;
  flex-grow: 1;
  margin-right: 39px; /* 補償返回按鈕的寬度，讓標題居中 */
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

.unit-label {
  margin-left: 5px;
  color: #333;
  font-size: 16px;
}

.gender-buttons {
  display: flex;
  gap: 10px;
}

.gender-button {
  flex: 1;
  padding: 12px 0;
  border: 1px solid #ECECEC;
  border-radius: 10px;
  background-color: white;
  font-size: 16px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;
}

.gender-button.active {
  background-color: #9491C0;
  color: white;
  border-color: #9491C0;
}

.hint-text {
  display: flex;
  align-items: center;
  margin-top: 10px;
  font-size: 14px;
  color: #9C9C9C;
}

.hint-icon {
  margin-right: 5px;
  flex-shrink: 0;
}

.pagination-dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin: 30px 0;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #E0E0E0;
}

.dot.active {
  background-color: #9491C0;
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
}

.next-button:hover {
  background-color: #8380B0;
}
</style>
