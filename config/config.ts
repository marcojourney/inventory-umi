// https://umijs.org/config/
import MonacoEditorWebpackPlugin from 'monaco-editor-webpack-plugin';
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  model: {},
  antd: {},
  request: {},
  initialState: {},
  mock: {
    include: ['src/pages/**/_mock.ts'],
  },
  dva: {
    // hmr: true,
  },
  srcTranspiler: 'esbuild',
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'zh-CN',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  // dynamicImport: {
  //   loading: '@ant-design/pro-components/es/PageLoading',
  // },
  targets: {
    // TODO: vite mode don't support ie 11
    // ie: 11,
  },
  // umi routes: https://umijs.org/docs/guides/routes
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user/login',
          layout: false,
          name: 'login',
          component: './user/Login',
        },
        {
          path: '/user',
          redirect: '/user/login',
        },
        {
          name: 'register-result',
          icon: 'smile',
          path: '/user/register-result',
          component: '@/pages/user/register-result',
        },
        {
          name: 'register',
          icon: 'smile',
          path: '/user/register',
          component: './user/register',
        },
        {
          component: '404',
        },
      ],
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      icon: 'dashboard',
      routes: [
        {
          path: '/dashboard',
          redirect: '/dashboard/analysis',
        },
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
    {
      path: '/form',
      icon: 'form',
      name: 'Sales',
      routes: [
        {
          path: '/form',
          redirect: '/form/basic-form',
        },
        {
          name: 'Orders',
          icon: 'smile',
          path: '/form/basic-form',
          component: './form/basic-form',
        },
        {
          name: 'Quotes',
          icon: 'smile',
          path: '/form/step-form',
          component: './form/step-form',
        },
        {
          name: 'Invoices',
          icon: 'smile',
          path: '/form/advanced-form',
          component: './form/advanced-form',
        },
        {
          name: 'Customers',
          icon: 'smile',
          path: '/form/advanced-form',
          component: './form/advanced-form',
        },
      ],
    },
    {
      path: '/inventory',
      icon: 'table',
      name: 'Purchasing',
      routes: [
        {
          path: '/inventory/search',
          name: 'Orders',
          component: './inventory/search',
          routes: [
            {
              path: '/inventory/search',
              redirect: '/inventory/search/articles',
            },
            {
              name: 'articles',
              icon: 'smile',
              path: '/inventory/search/articles',
              component: './inventory/search/articles',
            },
            {
              name: 'projects',
              icon: 'smile',
              path: '/inventory/search/projects',
              component: './inventory/search/projects',
            },
            {
              name: 'applications',
              icon: 'smile',
              path: '/inventory/search/applications',
              component: './inventory/search/applications',
            },
          ],
        },
        {
          path: '/inventory',
          redirect: '/inventory/table-list',
        },
        {
          name: 'RFPs',
          icon: 'smile',
          path: '/inventory/products',
          component: './inventory/table-list',
        },
        {
          name: 'Vendors',
          icon: 'smile',
          path: '/inventory/basic-list',
          component: './inventory/basic-list',
        },
        {
          name: 'card-list',
          icon: 'smile',
          path: '/inventory/card-list',
          component: './inventory/card-list',
        },
      ],
    },
    {
      path: '/inventory',
      icon: 'table',
      name: 'Inventory',
      routes: [
        {
          path: '/inventory',
          redirect: '/inventory/table-list',
        },
        {
          name: 'Items',
          icon: 'smile',
          path: '/inventory/products',
          component: './inventory/table-list',
        },
        {
          name: 'Transfers',
          icon: 'smile',
          path: '/inventory/basic-list',
          component: './inventory/basic-list',
        },
        {
          name: 'Adjustment',
          icon: 'smile',
          path: '/inventory/card-list',
          component: './inventory/card-list',
        },
      ],
    },
    {
      path: '/profile',
      name: 'Sales',
      icon: 'profile',
      routes: [
        {
          path: '/profile',
          redirect: '/profile/basic',
        },
        {
          name: 'basic',
          icon: 'smile',
          path: '/profile/basic',
          component: './profile/basic',
        },
        {
          name: 'advanced',
          icon: 'smile',
          path: '/profile/advanced',
          component: './profile/advanced',
        },
      ],
    },
    {
      name: 'Reports',
      icon: 'CheckCircleOutlined',
      path: '/result',
      routes: [
        {
          path: '/result',
          redirect: '/result/success',
        },
        {
          name: 'Financial Reports',
          icon: 'smile',
          path: '/result/success',
          component: './result/success',
          description: 'Income statements, balance sheets, cash flow statements, profit and loss reports.',
        },
        {
          name: 'Sales Reports',
          icon: 'smile',
          path: '/result/fail',
          component: './result/fail',
          description: 'Sales by product, customer, region, time period, sales team performance.'
        },
        {
          name: 'Purchasing Reports',
          icon: 'smile',
          path: '/result/fail',
          component: './result/fail',
          description: 'Purchase orders by vendor, product, time period, purchase order status.'
        },
        {
          name: 'HR Reports',
          icon: 'smile',
          path: '/result/fail',
          component: './result/fail',
          description: 'Employee turnover, absenteeism, payroll reports, training records'
        },
      ],
    },
    {
      name: 'exception',
      icon: 'warning',
      path: '/exception',
      routes: [
        {
          path: '/exception',
          redirect: '/exception/403',
        },
        {
          name: '403',
          icon: 'smile',
          path: '/exception/403',
          component: './exception/403',
        },
        {
          name: '404',
          icon: 'smile',
          path: '/exception/404',
          component: './exception/404',
        },
        {
          name: '500',
          icon: 'smile',
          path: '/exception/500',
          component: './exception/500',
        },
      ],
    },
    {
      name: 'account',
      icon: 'user',
      path: '/account',
      routes: [
        {
          path: '/account',
          redirect: '/account/center',
        },
        {
          name: 'center',
          icon: 'smile',
          path: '/account/center',
          component: '@/pages/account/center',
        },
        {
          name: 'settings',
          icon: 'smile',
          path: '/account/settings',
          component: './account/settings',
        },
      ],
    },
    {
      name: 'Setting',
      icon: 'setting',
      path: '/setting',
      component: './setting/center'
    },
    {
      path: '/',
      redirect: '/dashboard/analysis',
    },
    {
      component: '404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    'root-entry-name': 'variable',
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  // esbuild: {},
  // title: false,
  ignoreMomentLocale: true,
  // @ts-ignore
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // Fast Refresh 热更新
  fastRefresh: true,
  mfsu: {
    // esbuild: true,
  },
  chainWebpack(memo: any) {
    memo.plugin('monaco-editor').use(MonacoEditorWebpackPlugin, []);
    return memo;
  },
  // openAPI: [
  //   {
  //     requestLibPath: "import { request } from 'umi'",
  //     // 或者使用在线的版本
  //     // schemaPath: "https://gw.alipayobjects.com/os/antfincdn/M%24jrzTTYJN/oneapi.json"
  //     schemaPath: join(__dirname, 'oneapi.json'),
  //     mock: false,
  //   },
  //   {
  //     requestLibPath: "import { request } from 'umi'",
  //     schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
  //     projectName: 'swagger',
  //   },
  // ],
  // nodeModulesTransform: {
  //   type: 'none',
  // },
  // exportStatic: {},
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  // ui: {},
  mako: {},
});
