/**
 * SignUp 頁面的視圖模型 (ViewModel)
 * 負責連接 Model 和 View，提供數據轉換和業務邏輯
 */
import { ref, reactive, onMounted, computed } from 'vue';
import SignUpModel from '@/models/SignUpModel';

export default function useSignUpViewModel() {
  // === 狀態與數據 (State) ===
  
  // 頁面內容數據
  const pageContent = ref({
    leftTitle: '歡迎回來~',
    leftDescription: '',
    rightTitle: '是否瞭解？'
  });

  // 載入狀態
  const loading = ref(false);
  const error = ref(null);
  
  // 互動狀態
  const showIntroduction = ref(false); // 控制是否顯示食法介紹
  const introSteps = reactive([
    { id: 1, title: '什麼是 4+2 代謝飲食法？', content: '4+2 代謝飲食法是一種無需琤量熱量，便於健康管理的飲食習慣。' },
    { id: 2, title: '如何實踐？', content: '透過每天 4 餐嘉肌蘋 + 2 餐茶涼奶茶，幫助你維持身體健康與理想體重。' },
    { id: 3, title: '適合哪些人？', content: '適合所有希望健康生活的人，特別是忙碌上班族、溝通工作者、家庭主婦等。' }
  ]);
  const currentStepIndex = ref(0);
  
  // === 計算屬性 (Computed Properties) ===
  
  // 當前介紹步驟
  const currentStep = computed(() => {
    return introSteps[currentStepIndex.value] || introSteps[0];
  });
  
  // 是否為第一步
  const isFirstStep = computed(() => {
    return currentStepIndex.value === 0;
  });
  
  // 是否為最後一步
  const isLastStep = computed(() => {
    return currentStepIndex.value === introSteps.length - 1;
  });

  // === 方法 (Methods) ===
  
  /**
   * 初始化時加載頁面內容
   */
  const loadPageContent = async () => {
    loading.value = true;
    error.value = null;
    
    try {
      console.log('正在獲取頁面內容...');
      console.log('裝置類型:', navigator.userAgent);
      
      // 從 Model 獲取數據
      const data = await SignUpModel.getPageContent();
      
      // 更新頁面內容
      pageContent.value = data;
      console.log('頁面內容更新為:', pageContent.value);
    } catch (err) {
      console.error('無法載入頁面內容:', err);
      error.value = '無法載入頁面內容，請刷新頁面重試';
    } finally {
      loading.value = false;
    }
  };

  /**
   * 處理移動端滾動優化
   */
  const setupMobileScrolling = () => {
    // 強制啟用移動端滾動
    if (window.innerWidth <= 768) {
      document.body.style.overflow = 'auto';
      document.body.style.webkitOverflowScrolling = 'touch';
    }
  };

  /**
   * 導航至基本信息頁面
   */
  const navigateToBasicInfo = () => {
    return '/basic-info';
  };
  
  /**
   * 開始瞭解 4+2 代謝飲食法
   */
  const handleUnderstand = () => {
    showIntroduction.value = true;
    currentStepIndex.value = 0;
  };
  
  /**
   * 切換到下一步
   */
  const nextStep = () => {
    if (currentStepIndex.value < introSteps.length - 1) {
      currentStepIndex.value++;
    }
  };
  
  /**
   * 切換到上一步
   */
  const prevStep = () => {
    if (currentStepIndex.value > 0) {
      currentStepIndex.value--;
    }
  };
  
  /**
   * 關閉介紹視窗
   */
  const closeIntroduction = () => {
    showIntroduction.value = false;
  };
  
  /**
   * 處理登入功能
   */
  const handleLogin = () => {
    // 導向登入頁面的邏輯後續可追加
    return '/login';
  };

  // 在組件掛載時執行初始化
  onMounted(() => {
    loadPageContent();
    setupMobileScrolling();
  });

  // 返回視圖需要的數據和方法
  return {
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
  };
}
