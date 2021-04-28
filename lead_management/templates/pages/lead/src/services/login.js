import request from '@/utils/request';
export async function erpAccountLogin(params) {
  return request('/api/method/login', {
    method: 'POST',
    data: params,
  });
}
export async function queryCurrentUser(fullName) {
  return request(`/api/resource/User/${fullName}`);
}