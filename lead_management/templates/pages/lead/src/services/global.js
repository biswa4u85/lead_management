import request from 'umi-request';
import { message } from 'antd';
export async function querySettings(DocType) {
  return request(`/api/resource/DocType/${DocType}`);
}
export async function queryList(DocType, params) {
  try {
    let json = await request(`/api/resource/${DocType}?fields=["*"]&limit_start=${params.current}&limit_page_length=${params.pageSize}`);
    return {
      current: params.current,
      data: json.data,
      pageSize: params.pageSize,
      success: true,
      total: json.data.length,
    }
  } catch (error) {
    message.error('Failed to Fetching, please try again!');
    return false;
  }
}
export async function removeRecord(params, settings) {
  return request(`api/resource/${settings.name}/${params.name}`, {
    method: 'DELETE',
    data: { ...params, method: 'delete' },
  });
}
export async function addRecord(params, settings) {
  return request(`api/resource/${settings.name}`, {
    method: 'POST',
    data: { ...params, method: 'post' },
  });
}
export async function updateRecord(params, settings) {
  return request(`api/resource/${settings.name}/${params.name}`, {
    method: 'PUT',
    data: { ...params, method: 'update' },
  });
}