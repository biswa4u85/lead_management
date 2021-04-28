import { querySettings, queryListAll, updateRecord, addRecord, removeRecord } from '@/services/global';
const MODULE_NAME = 'student'
const Model = {
  namespace: MODULE_NAME,
  state: {
    settings: null,
  },
  effects: {
    *fetchSettings({ payload }, { call, put }) {
      const response = yield call(querySettings, payload);
      if (response && response.data) {
        for (let item of response.data.fields) {
          if (item.fieldtype == 'Select') {
            item.options = String(item.options).split('\n')
          }
          if (item.fieldtype == 'Link') {
            let json = yield call(queryListAll, { DocType: item.options });
            if (json && json.data) {
              item['optionLists'] = json.data
            } else {
              item['optionLists'] = []
            }
          }
          if (item.fieldtype == 'Table') {
            // let list = yield call(queryListAll, { DocType: item.options });
            // console.log(list)
            // if (list && list.data) {
            //   item['lists'] = list.data
            // }
          }
        }
      }
      // console.log(response.data)
      yield put({
        type: 'SaveSettings',
        payload: response ? response.data : {},
      });
    },
  },
  reducers: {
    SaveSettings(state, action) {
      return { ...state, settings: action.payload };
    },
  },
};
export default Model;