import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';
import { erpAccountLogin, queryCurrentUser } from '@/services/others';

export default {
  namespace: 'login',

  state: {
    confirmationResult: null,
    status: undefined,
    message: undefined,
    currentUser: {},
  },

  effects: {
    *login({ payload }, { call, put }) {
      const response = yield call(erpAccountLogin, payload);
      if (response && response.message === 'Logged In') {
        const json = yield call(queryCurrentUser, response);
        if (json && json.data) {
          sessionStorage.setItem('currentUser', JSON.stringify(json.data));
          yield put({
            type: 'saveCurrentUser',
            payload: json.data,
          });
          yield put({
            type: 'changeLoginStatus',
            payload: {
              status: false,
              currentAuthority: json.data.username,
            },
          });
          reloadAuthorized();
          const urlParams = new URL(window.location.href);
          const params = getPageQuery();
          let { redirect } = params;
          if (redirect) {
            const redirectUrlParams = new URL(redirect);
            if (redirectUrlParams.origin === urlParams.origin) {
              redirect = redirect.substr(urlParams.origin.length);
              if (redirect.match(/^\/.*#/)) {
                redirect = redirect.substr(redirect.indexOf('#') + 1);
              }
            } else {
              redirect = null;
            }
          }
          yield put(routerRedux.replace('/'));
        }
      }
    },

    *logout(_, { put }) {
      sessionStorage.setItem('currentUser', JSON.stringify(null));
      yield put({
        type: 'changeLoginStatus',
        payload: {
          status: false,
          currentAuthority: 'guest',
        },
      });
      reloadAuthorized();
      // redirect
      if (window.location.pathname !== '/user/login') {
        yield put(
          routerRedux.replace({
            pathname: '/user/login',
            search: stringify({
              redirect: window.location.href,
            }),
          }),
        );
      }
    },

    *fetchCurrent(_, { call, put }) {
      const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
      // redirect
      if (!currentUser) {
        yield put(
          routerRedux.replace({
            pathname: '/user/login',
            search: stringify({
              redirect: window.location.href,
            }),
          }),
        );
      }
      yield put({
        type: 'saveCurrentUser',
        payload: currentUser,
      });
    },
  },

  reducers: {
    setConfirmationResult(state, action) {
      return {
        ...state,
        confirmationResult: action.payload || null,
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload || {},
      };
    },
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.currentAuthority);
      return {
        ...state,
        status: payload.error,
        message: payload.message,
      };
    },
  },
};