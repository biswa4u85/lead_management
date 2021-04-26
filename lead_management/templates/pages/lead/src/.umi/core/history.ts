// @ts-nocheck
import { createBrowserHistory, History } from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/node_modules/@umijs/runtime';

let options = {
  "basename": "/"
};
if ((<any>window).routerBase) {
  options.basename = (<any>window).routerBase;
}

// remove initial history because of ssr
let history: History = process.env.__IS_SERVER ? null : createBrowserHistory(options);
export const createHistory = (hotReload = false) => {
  if (!hotReload) {
    history = createBrowserHistory(options);
  }

  return history;
};

export { history };
