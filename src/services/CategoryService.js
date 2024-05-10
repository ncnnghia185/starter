import ApiService from "./ApiService";

export async function apiGetCate(data) {
  return ApiService.fetchData({
      url: '/reset-password',
      method: 'get',
      data,
      headers: {
        "Content-Type": "multipart/form-data"
      }
  })
}
