import request from '@/utils/request';
export async function querySettings(DocType, params ) {
    return request(`/api/resource/DocType/${DocType}`);
}
export async function queryListTable(DocType, params) {
    console.log(DocType, params)
    // return request("/api/resource/Notice Board/?fields=[\"*\"]");
    return request(`/api/resource/${DocType}`);
}
export async function queryList(DocType, params) {
    // return request("/api/resource/Notice Board/?fields=[\"*\"]");
    return request(`/api/resource/${DocType}`);
}