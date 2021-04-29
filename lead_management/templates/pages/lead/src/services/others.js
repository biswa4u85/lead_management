import request from '@/utils/request';
export async function erpAccountLogin(params) {
  return request('/api/method/login', {
    method: 'POST',
    data: params,
  });
}
export async function getLoggedUser() {
  return request(`/api/method/frappe.auth.get_logged_user`);
}
export async function queryCurrentUser(params) {
  return request(`/api/resource/User/${params.message}`);
}
export async function queryNotices() {
  return request('/api/resource/Notice Board');
}