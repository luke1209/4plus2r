import axios from 'axios';

const strapiBaseURL = 'http://localhost:1337/api';
const token = '38d0bfb1df98a6cc61673a696e1094ead49076abacc5b6312f8e8a0bfe450e34608836ae580197043f90bab142cd414ae4cad56f366492b1d9875a7c10e391a5e093ec0a33befbeb5aed53320cb3aaab3b0ffe3f41bfea0ab16093a6cbe7b16324c5c0fa9386b9224d5a04a84fe50c718af4de3f14369525f253f1102b045615'; // 將此替換為實際的 Token

// 創建 axios 實例 (建議方式)
const apiClient = axios.create({
  baseURL: strapiBaseURL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
});

export default {
  // 獲取 SignUp 頁面內容
  getSignupPageContent() {
    return apiClient.get('/sign-ups');
  },
  
  // 提交 BasicInfo 表單資料
  submitBasicInfo(formData) {
    return apiClient.post('/basic-info-submissions', {
      data: formData
    });
  }
};