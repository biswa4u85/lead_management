import { fakeChartData } from './service';
import { queryGlobal } from '@/services/global';
const initState = {
  visitData: [],
  visitData2: [],
  salesData: [],
  searchData: [],
  offlineData: [],
  offlineChartData: [],
  salesTypeData: [],
  salesTypeDataOnline: [],
  salesTypeDataOffline: [],
  radarData: [],
};
const Model = {
  namespace: 'dashboardAndanalysis',
  state: initState,
  effects: {
    *fetchNew(_, { call, put }) {
      const response = yield call(queryGlobal, 'Workspace/Education');
      yield put({
        type: 'save',
        payload: response.data,
      });
    },
    *fetch(_, { call, put }) {
      const response = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchSalesData(_, { call, put }) {
      const response = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: {
          salesData: response.salesData,
        },
      });
    },
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    clear() {
      return initState;
    },
  },
};
export default Model;
