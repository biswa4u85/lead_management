// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/layouts/UserLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/user/login",
            "name": "login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__User__login' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/User/login'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "path": "/user",
            "redirect": "/user/login",
            "exact": true
          },
          {
            "name": "register-result",
            "icon": "smile",
            "path": "/user/register-result",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register-result' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/user/register-result'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register",
            "icon": "smile",
            "path": "/user/register",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/user/register'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/layouts/BasicLayout'), loading: LoadingComponent}),
        "Routes": [
          "src/pages/Authorized"
        ],
        "authority": [
          "admin",
          "user"
        ],
        "routes": [
          {
            "path": "/",
            "redirect": "/dashboard/analysis",
            "exact": true
          },
          {
            "path": "/dashboard",
            "name": "dashboard",
            "icon": "dashboard",
            "routes": [
              {
                "path": "/",
                "redirect": "/dashboard/analysis",
                "exact": true
              },
              {
                "name": "analysis",
                "icon": "smile",
                "path": "/dashboard/analysis",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__analysis' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/dashboard/analysis'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "monitor",
                "icon": "smile",
                "path": "/dashboard/monitor",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__monitor' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/dashboard/monitor'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "workplace",
                "icon": "smile",
                "path": "/dashboard/workplace",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__workplace' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/dashboard/workplace'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/lead",
            "name": "lead",
            "icon": "smile",
            "routes": [
              {
                "path": "/",
                "redirect": "/lead/list",
                "exact": true
              },
              {
                "name": "list",
                "icon": "smile",
                "path": "/lead/list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Leads' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/Leads'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/form",
            "icon": "form",
            "name": "form",
            "routes": [
              {
                "path": "/",
                "redirect": "/form/basic-form",
                "exact": true
              },
              {
                "name": "basic-form",
                "icon": "smile",
                "path": "/form/basic-form",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__basic-form' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/form/basic-form'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "step-form",
                "icon": "smile",
                "path": "/form/step-form",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__step-form' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/form/step-form'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "advanced-form",
                "icon": "smile",
                "path": "/form/advanced-form",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__form__advanced-form' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/form/advanced-form'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/list",
            "icon": "table",
            "name": "list",
            "routes": [
              {
                "path": "/list/search",
                "name": "search-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/list/search'), loading: LoadingComponent}),
                "routes": [
                  {
                    "path": "/list/search",
                    "redirect": "/list/search/articles",
                    "exact": true
                  },
                  {
                    "name": "articles",
                    "icon": "smile",
                    "path": "/list/search/articles",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__articles' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/list/search/articles'), loading: LoadingComponent}),
                    "exact": true
                  },
                  {
                    "name": "projects",
                    "icon": "smile",
                    "path": "/list/search/projects",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__projects' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/list/search/projects'), loading: LoadingComponent}),
                    "exact": true
                  },
                  {
                    "name": "applications",
                    "icon": "smile",
                    "path": "/list/search/applications",
                    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__search__applications' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/list/search/applications'), loading: LoadingComponent}),
                    "exact": true
                  }
                ]
              },
              {
                "path": "/",
                "redirect": "/list/table-list",
                "exact": true
              },
              {
                "name": "table-list",
                "icon": "smile",
                "path": "/list/table-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__table-list' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/list/table-list'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "basic-list",
                "icon": "smile",
                "path": "/list/basic-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__basic-list' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/list/basic-list'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "card-list",
                "icon": "smile",
                "path": "/list/card-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__list__card-list' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/list/card-list'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/profile",
            "name": "profile",
            "icon": "profile",
            "routes": [
              {
                "path": "/",
                "redirect": "/profile/basic",
                "exact": true
              },
              {
                "name": "basic",
                "icon": "smile",
                "path": "/profile/basic",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__profile__basic' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/profile/basic'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "advanced",
                "icon": "smile",
                "path": "/profile/advanced",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__profile__advanced' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/profile/advanced'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "name": "result",
            "icon": "CheckCircleOutlined",
            "path": "/result",
            "routes": [
              {
                "path": "/",
                "redirect": "/result/success",
                "exact": true
              },
              {
                "name": "success",
                "icon": "smile",
                "path": "/result/success",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__result__success' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/result/success'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "fail",
                "icon": "smile",
                "path": "/result/fail",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__result__fail' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/result/fail'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "name": "exception",
            "icon": "warning",
            "path": "/exception",
            "routes": [
              {
                "path": "/",
                "redirect": "/exception/403",
                "exact": true
              },
              {
                "name": "403",
                "icon": "smile",
                "path": "/exception/403",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__403' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/exception/403'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "404",
                "icon": "smile",
                "path": "/exception/404",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__404' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/exception/404'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "500",
                "icon": "smile",
                "path": "/exception/500",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__exception__500' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/exception/500'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "name": "account",
            "icon": "user",
            "path": "/account",
            "routes": [
              {
                "path": "/",
                "redirect": "/account/center",
                "exact": true
              },
              {
                "name": "center",
                "icon": "smile",
                "path": "/account/center",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__center' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/account/center'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "settings",
                "icon": "smile",
                "path": "/account/settings",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__account__settings' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/account/settings'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "name": "editor",
            "icon": "highlight",
            "path": "/editor",
            "routes": [
              {
                "path": "/",
                "redirect": "/editor/flow",
                "exact": true
              },
              {
                "name": "flow",
                "icon": "smile",
                "path": "/editor/flow",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__flow' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/editor/flow'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "mind",
                "icon": "smile",
                "path": "/editor/mind",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__mind' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/editor/mind'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "koni",
                "icon": "smile",
                "path": "/editor/koni",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__editor__koni' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/editor/koni'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'C:/Users/BiswajitSahoo/Sites/Docker/frappe_docker/development/frappe-bench-v13/apps/lead_management/lead_management/templates/pages/lead/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
