import { querySettings, queryList, getDataApi, addDataApi, editDataApi, deleteDataApi, getSingleDataApi } from '@/services/global';
import { message } from 'antd';
const tableName = 'Exam Application'

export default {
  namespace: 'leads',
  state: {
    settings: {},
    singleData: {},
    isAddEdit: false,
    data: {
      list: [],
      pagination: {},
    },
  },

  effects: {
    *fetchSettings({ payload }, { call, put }) {
      const response = yield call(querySettings, tableName, payload);
      yield put({ type: 'saveSettings', payload: response.data });
    },
    *fetchSearchData({ payload }, { call, put }) {
      const response = yield call(queryList, tableName, payload);
      yield put({ type: 'saveData', payload: response.data });
    },
    *fetchSingleData({ payload, token }, { call, put }) {
      const response = yield call(getSingleDataApi, payload, tableName, token);
      yield put({ type: 'saveSingleData', payload: response });
    },
    *fetchSingleDataNull({ payload, token }, { call, put }) {
      yield put({ type: 'saveSingleData', payload: {} });
    },
    *fetchAddData({ payload, token }, { call, put }) {
      const response = yield call(addDataApi, payload, tableName, token);
      if (response.error) {
        message.warning(response.message);
      } else {
        message.success('New Page Added Successfully');
        yield put({ type: 'addData', payload: response });
      }
    },
    *fetchEditData({ payload, token }, { call, put }) {
      const response = yield call(editDataApi, payload, tableName, token);
      if (response.error) {
        message.warning(response.message);
      } else {
        message.success('Page Edit Successfully');
        yield put({ type: 'editData', payload: response });
      }
    },
    *fetchDeleteData({ payload, token }, { call, put }) {
      const response = yield call(deleteDataApi, payload, tableName, token);
      yield put({ type: 'deleteData', payload: response });
    },
  },

  reducers: {
    saveSettings(state, action) {
      return {
        ...state,
        settings: action.payload,
      };
    },
    saveData(state, action) {
      return {
        ...state,
        data: {
          list: action.payload,
          pagination: {},
        },
      };
    },
    saveSingleData(state, action) {
      return {
        ...state,
        isAddEdit: true,
        singleData: action.payload,
      };
    },
    addData(state, action) {
      action.payload['key'] = (state.data.list).length
      return {
        ...state,
        isAddEdit: false,
        data: {
          list: [...state.data.list, action.payload],
          pagination: {},
        },
      };
    },
    editData(state, action) {
      let data = []
      for (let key in state.data.list) {
        if (state.data.list[key].id === action.payload.id) {
          action.payload['key'] = key
          data.push(action.payload)
        } else {
          state.data.list[key]['key'] = key
          data.push(state.data.list[key])
        }
      }
      return {
        ...state,
        isAddEdit: false,
        data: {
          list: data,
          pagination: {},
        },
      };
    },
    deleteData(state, action) {
      let data = []
      for (let key in state.data.list) {
        if (state.data.list[key] && (state.data.list[key].id !== action.payload.id)) {
          state.data.list[key]['key'] = key
          data.push(state.data.list[key])
        }
      }
      return {
        ...state,
        data: {
          list: data,
          pagination: {},
        },
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload.totalCount,
          unreadCount: action.payload.unreadCount,
        },
      };
    },
  },
};
