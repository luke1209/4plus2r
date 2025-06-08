/**
 * SignUp 頁面的數據模型
 * 負責定義數據結構及與 API 的交互
 */
import api from '@/services/api';

class SignUpModel {
  /**
   * 從 API 獲取註冊頁面內容
   * @returns {Promise} 包含頁面內容的 Promise
   */
  static async getPageContent() {
    try {
      const response = await api.getSignupPageContent();
      
      // 檢查並處理 API 數據
      if (response.data && response.data.data && response.data.data.length > 0) {
        // 從 API 返回的數組中獲取第一項
        const firstItem = response.data.data[0];
        
        // 處理並返回頁面數據
        return {
          leftTitle: firstItem.leftTitle || '歡迎回來~',
          leftDescription: firstItem.leftDescription || '',
          rightTitle: firstItem.rightTitle || '是否瞭解？'
        };
      }
      
      // 如果沒有有效數據，返回預設值
      return {
        leftTitle: '歡迎回來~',
        leftDescription: '',
        rightTitle: '是否瞭解？'
      };
    } catch (error) {
      console.error('無法獲取頁面內容:', error);
      
      // 發生錯誤時返回預設值
      return {
        leftTitle: '歡迎回來~',
        leftDescription: '',
        rightTitle: '是否瞭解？'
      };
    }
  }
}

export default SignUpModel;
