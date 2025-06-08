/**
 * SignUp 頁面的狀態管理 (State)
 * 負責管理頁面相關的所有狀態
 */
import { ref, reactive } from 'vue';

export default function useSignUpState() {
  // === 頁面內容數據 ===
  const pageContent = ref({
    leftTitle: '歡迎回來~',
    leftDescription: '',
    rightTitle: '是否瞭解？'
  });

  // === 載入狀態 ===
  const loading = ref(false);
  const error = ref(null);
  
  // === 互動狀態 ===
  // 控制是否顯示食法介紹
  const showIntroduction = ref(false); 
  
  // 介紹步驟內容
  const introSteps = reactive([
    { id: 1, title: '什麼是 4+2 代謝飲食法？', content: '4+2 代謝飲食法是一種無需琤量熱量，便於健康管理的飲食習慣。' },
    { id: 2, title: '如何實踐？', content: '透過每天 4 餐嘉肌蘋 + 2 餐茶涼奶茶，幫助你維持身體健康與理想體重。' },
    { id: 3, title: '適合哪些人？', content: '適合所有希望健康生活的人，特別是忙碌上班族、溝通工作者、家庭主婦等。' }
  ]);
  
  // 當前步驟索引
  const currentStepIndex = ref(0);
  
  // 返回狀態
  return {
    pageContent,
    loading,
    error,
    showIntroduction,
    introSteps,
    currentStepIndex
  };
}
