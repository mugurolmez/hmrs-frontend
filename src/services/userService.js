import axios from "axios";

export default class UserService {
  constructor() {
    // Çevresel değişkenin doğru şekilde yüklendiğini kontrol edelim
    console.log(`API URL: ${process.env.REACT_APP_API_URL}`);
    
    // Axios için temel URL'yi ayarlayalım
    this.apiClient = axios.create({
      baseURL: process.env.REACT_APP_API_URL || "http://localhost:8080", // Varsayılan olarak localhost:8080 kullanılacak
    });
  }

  async getAllUsers() {
    try {
      // apiClient ile temel URL kullanılarak istek yapılıyor
      const result = await this.apiClient.get("/api/users/getall");
      return result.data; // Düzeltme yapıldı: result.response yerine result.data kullanıldı
    } catch (error) {
      console.error("Kullanıcılar alınırken bir hata oluştu:", error);
      throw error;
    }
  }

  async addUser(userData) {
    try {
      // apiClient ile temel URL kullanılarak istek yapılıyor
      const response = await this.apiClient.post("/api/users/add", userData);
      return response.data;
    } catch (error) {
      console.error("Kullanıcı eklenirken bir hata oluştu:", error);
      throw error;
    }
  }
}
