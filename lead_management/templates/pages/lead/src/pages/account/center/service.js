import request from 'umi-request';
export async function queryCurrent() {
  const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
  if (currentUser) {
    return request(`/api/resource/User/${currentUser.full_name}`);
  }
}
export async function queryFakeList(params) {
  return request('/api/fake_list', {
    params,
  });
}
