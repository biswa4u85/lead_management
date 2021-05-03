// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/Users/biswa/Sites/erp/lead_management/lead_management/templates/pages/lead/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/user",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'/Users/biswa/Sites/erp/lead_management/lead_management/templates/pages/lead/src/layouts/UserLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/user",
        "redirect": "/user/login",
        "exact": true
      },
      {
        "path": "/user/login",
        "name": "login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__User__Login' */'/Users/biswa/Sites/erp/lead_management/lead_management/templates/pages/lead/src/pages/User/Login'), loading: LoadingComponent}),
        "exact": true
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/biswa/Sites/erp/lead_management/lead_management/templates/pages/lead/src/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'/Users/biswa/Sites/erp/lead_management/lead_management/templates/pages/lead/src/layouts/BasicLayout'), loading: LoadingComponent}),
    "Routes": [
      "src/pages/Authorized"
    ],
    "routes": [
      {
        "path": "/",
        "redirect": "/dashboard/analysis",
        "authority": [
          "Student Role",
          "Employee Role"
        ],
        "exact": true
      },
      {
        "path": "/dashboard",
        "name": "dashboard",
        "icon": "dashboard",
        "authority": [
          "Student Role",
          "Employee Role"
        ],
        "routes": [
          {
            "name": "analysis",
            "icon": "smile",
            "path": "/dashboard/analysis",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__analysis' */'/Users/biswa/Sites/erp/lead_management/lead_management/templates/pages/lead/src/pages/dashboard/analysis'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "monitor",
            "icon": "smile",
            "path": "/dashboard/monitor",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__monitor' */'/Users/biswa/Sites/erp/lead_management/lead_management/templates/pages/lead/src/pages/dashboard/monitor'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "workplace",
            "icon": "smile",
            "path": "/dashboard/workplace",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__workplace' */'/Users/biswa/Sites/erp/lead_management/lead_management/templates/pages/lead/src/pages/dashboard/workplace'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/student",
        "name": "student",
        "icon": "smile",
        "authority": [
          "Student Role"
        ],
        "routes": [
          {
            "path": "/",
            "redirect": "/student/list",
            "exact": true
          },
          {
            "name": "list",
            "icon": "smile",
            "path": "/student/list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Leads' */'/Users/biswa/Sites/erp/lead_management/lead_management/templates/pages/lead/src/pages/Leads'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/employee",
        "name": "employee",
        "icon": "smile",
        "authority": [
          "Employee Role"
        ],
        "routes": [
          {
            "path": "/",
            "redirect": "/employee/list",
            "exact": true
          },
          {
            "name": "list",
            "icon": "smile",
            "path": "/employee/list",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__Leads' */'/Users/biswa/Sites/erp/lead_management/lead_management/templates/pages/lead/src/pages/Leads'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'/Users/biswa/Sites/erp/lead_management/lead_management/templates/pages/lead/src/pages/404'), loading: LoadingComponent}),
        "exact": true
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
