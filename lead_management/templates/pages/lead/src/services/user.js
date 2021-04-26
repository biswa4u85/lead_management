import request from '@/utils/request';
export async function query() {
  return request('/api/users');
}
export async function queryCurrent() {
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  if (currentUser) {
    return request(`/api/resource/User/${currentUser.full_name}`);
  }
}
export async function queryNotices() {
  return request('/api/resource/Notice Board');
}