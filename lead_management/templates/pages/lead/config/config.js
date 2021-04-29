import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import routes from './routes';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {
    dark: true, // active dark theme
    compact: true, // active compact theme
  },
  dva: {
    hmr: true,
  },
  // history: {type: 'browser'},
  history: { type: 'hash' },
  publicPath: process.env.NODE_ENV === 'development' ? '/' :  './lead/dist/',
  locale: {
    default: 'en-EN',
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  routes: routes,
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  esbuild: {},
});
