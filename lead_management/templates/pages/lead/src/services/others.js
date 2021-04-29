import request from '@/utils/request';
export async function erpAccountLogin(params) {
  return request('/api/method/login', {
    method: 'POST',
    data: params,
  });
}
export async function queryCurrentUser(params) {
  return request(`/api/resource/User/${params.full_name}`);
}
export async function queryNotices() {
  return request('/api/resource/Notice Board');
}