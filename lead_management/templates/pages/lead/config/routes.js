export default [
      // Login user
      {
        path: '/user',
        component: '../layouts/UserLayout',
        routes: [
          { path: '/user', redirect: '/user/login' },
          { path: '/user/login', name: 'login', component: './User/Login' },
          // { path: '/user/forgot-password', name: 'forgot-password', component: './Login/ForgotPassword' },
          // { path: '/user/otp/:id', name: 'otp', component: './Login/Otp' },
          // { path: '/user/forgot-user', name: 'forgot-user', component: './Login/ForgotUser' },
          { component: '404' },
        ],
      },
      // app
      {
        path: '/',
        component: '../layouts/BasicLayout',
        Routes: ['src/pages/Authorized'],
        routes: [
          // dashboard
          { path: '/', redirect: '/dashboard/analysis', authority: ['Student Role', 'Employee Role'], },
          {
            path: '/dashboard',
            name: 'dashboard',
            icon: 'dashboard',
            authority: ['Student Role', 'Employee Role'],
            routes: [
              {
                name: 'analysis',
                icon: 'smile',
                path: '/dashboard/analysis',
                component: './dashboard/analysis',
              },
              {
                name: 'monitor',
                icon: 'smile',
                path: '/dashboard/monitor',
                component: './dashboard/monitor',
              },
              {
                name: 'workplace',
                icon: 'smile',
                path: '/dashboard/workplace',
                component: './dashboard/workplace',
              },
            ],
          },
          // Lead User
          {
            path: '/student',
            name: 'student',
            icon: 'smile',
            authority: ['Student Role'],
            routes: [
              {
                path: '/',
                redirect: '/student/list',
              },
              {
                name: 'list',
                icon: 'smile',
                path: '/student/list',
                component: './Leads',
              },
              // {
              //   name: 'advanced',
              //   icon: 'smile',
              //   path: '/profile/advanced',
              //   component: './profile/advanced',
              // },
            ],
          },
          // Lead User
          {
            path: '/employee',
            name: 'employee',
            icon: 'smile',
            authority: ['Employee Role'],
            routes: [
              {
                path: '/',
                redirect: '/employee/list',
              },
              {
                name: 'list',
                icon: 'smile',
                path: '/employee/list',
                component: './Leads',
              },
              // {
              //   name: 'advanced',
              //   icon: 'smile',
              //   path: '/profile/advanced',
              //   component: './profile/advanced',
              // },
            ],
          },
          {
            component: '404',
          },
        ],
      }
    ]