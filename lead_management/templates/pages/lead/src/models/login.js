import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { setAuthority } from '@/utils/authority';
import { getPageQuery } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';
import { erpAccountLogin, getLoggedUser, queryCurrentUser } from '@/services/others';
import defaultSettings from '../../config/defaultSettings';

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
        const json = yield call(getLoggedUser);
        if (json && json.message) {
          sessionStorage.setItem('user', JSON.stringify(json));
          const userDetails = yield call(queryCurrentUser, json);
          if (userDetails && userDetails.data) {
            yield put({
              type: 'changeLoginStatus',
              payload: {
                status: false,
                currentAuthority: userDetails.data.role_profile_name,
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
      }
    },

    *logout(_, { put }) {
      sessionStorage.setItem('user', JSON.stringify(null));
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

    *fetchCurrent({ payload }, { call, put }) {
      const user = JSON.parse(sessionStorage.getItem('user'));
      const json = yield call(queryCurrentUser, user);
      if (json && json.data) {
        yield put({
          type: 'saveCurrentUser',
          payload: json.data,
        });
      } else {
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