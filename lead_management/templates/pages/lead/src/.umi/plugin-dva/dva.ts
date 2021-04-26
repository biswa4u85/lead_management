// @ts-nocheck
import { Component } from 'react';
import { ApplyPluginsType } from 'umi';
import dva from 'dva';
// @ts-ignore
import createLoading from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/node_modules/dva-loading/dist/index.esm.js';
import { plugin, history } from '../core/umiExports';
import ModelGlobal0 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/models/global.js';
import ModelLogin1 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/models/login.js';
import ModelSetting2 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/models/setting.js';
import ModelUser3 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/models/user.js';
import ModelModel4 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/account/center/model.js';
import ModelModel5 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/account/settings/model.js';
import ModelModel6 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/dashboard/analysis/model.js';
import ModelModel7 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/dashboard/monitor/model.js';
import ModelModel8 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/dashboard/workplace/model.js';
import ModelModel9 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/form/advanced-form/model.js';
import ModelModel10 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/form/basic-form/model.js';
import ModelModel11 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/form/step-form/model.js';
import ModelModel12 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/Leads/model.js';
import ModelModel13 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/list/basic-list/model.js';
import ModelModel14 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/list/card-list/model.js';
import ModelModel15 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/list/search/applications/model.js';
import ModelModel16 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/list/search/articles/model.js';
import ModelModel17 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/list/search/projects/model.js';
import ModelModel18 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/profile/advanced/model.js';
import ModelModel19 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/profile/basic/model.js';
import ModelModel20 from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/User/register/model.js';

let app:any = null;

export function _onCreate(options = {}) {
  const runtimeDva = plugin.applyPlugins({
    key: 'dva',
    type: ApplyPluginsType.modify,
    initialValue: {},
  });
  app = dva({
    history,
    
    ...(runtimeDva.config || {}),
    // @ts-ignore
    ...(typeof window !== 'undefined' && window.g_useSSR ? { initialState: window.g_initialProps } : {}),
    ...(options || {}),
  });
  
  app.use(createLoading());
  (runtimeDva.plugins || []).forEach((plugin:any) => {
    app.use(plugin);
  });
  app.model({ namespace: 'global', ...ModelGlobal0 });
app.model({ namespace: 'login', ...ModelLogin1 });
app.model({ namespace: 'setting', ...ModelSetting2 });
app.model({ namespace: 'user', ...ModelUser3 });
app.model({ namespace: 'model', ...ModelModel4 });
app.model({ namespace: 'model', ...ModelModel5 });
app.model({ namespace: 'model', ...ModelModel6 });
app.model({ namespace: 'model', ...ModelModel7 });
app.model({ namespace: 'model', ...ModelModel8 });
app.model({ namespace: 'model', ...ModelModel9 });
app.model({ namespace: 'model', ...ModelModel10 });
app.model({ namespace: 'model', ...ModelModel11 });
app.model({ namespace: 'model', ...ModelModel12 });
app.model({ namespace: 'model', ...ModelModel13 });
app.model({ namespace: 'model', ...ModelModel14 });
app.model({ namespace: 'model', ...ModelModel15 });
app.model({ namespace: 'model', ...ModelModel16 });
app.model({ namespace: 'model', ...ModelModel17 });
app.model({ namespace: 'model', ...ModelModel18 });
app.model({ namespace: 'model', ...ModelModel19 });
app.model({ namespace: 'model', ...ModelModel20 });
  return app;
}

export function getApp() {
  return app;
}

export class _DvaContainer extends Component {
  constructor(props: any) {
    super(props);
    // run only in client, avoid override server _onCreate()
    if (typeof window !== 'undefined') {
      _onCreate()
    }
  }

  componentWillUnmount() {
    let app = getApp();
    app._models.forEach((model:any) => {
      app.unmodel(model.namespace);
    });
    app._models = [];
    try {
      // 释放 app，for gc
      // immer 场景 app 是 read-only 的，这里 try catch 一下
      app = null;
    } catch(e) {
      console.error(e);
    }
  }

  render() {
    const app = getApp();
    app.router(() => this.props.children);
    return app.start()();
  }
}
