// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';

export async function getRoutes() {
  const routes = {"1":{"path":"/user","layout":false,"id":"1"},"2":{"path":"/user/login","layout":false,"name":"login","parentId":"1","id":"2"},"3":{"path":"/user","redirect":"/user/login","parentId":"1","id":"3"},"4":{"name":"register-result","icon":"smile","path":"/user/register-result","parentId":"1","id":"4"},"5":{"name":"register","icon":"smile","path":"/user/register","parentId":"1","id":"5"},"6":{"parentId":"1","id":"6"},"7":{"path":"/dashboard","name":"dashboard","icon":"dashboard","parentId":"@@/global-layout","id":"7"},"8":{"path":"/dashboard","redirect":"/dashboard/analysis","parentId":"7","id":"8"},"9":{"name":"analysis","icon":"smile","path":"/dashboard/analysis","parentId":"7","id":"9"},"10":{"name":"monitor","icon":"smile","path":"/dashboard/monitor","parentId":"7","id":"10"},"11":{"name":"workplace","icon":"smile","path":"/dashboard/workplace","parentId":"7","id":"11"},"12":{"path":"/form","icon":"form","name":"Sales","parentId":"@@/global-layout","id":"12"},"13":{"path":"/form","redirect":"/form/basic-form","parentId":"12","id":"13"},"14":{"name":"Orders","icon":"smile","path":"/form/basic-form","parentId":"12","id":"14"},"15":{"name":"Quotes","icon":"smile","path":"/form/step-form","parentId":"12","id":"15"},"16":{"name":"Invoices","icon":"smile","path":"/form/advanced-form","parentId":"12","id":"16"},"17":{"name":"Customers","icon":"smile","path":"/form/advanced-form","parentId":"12","id":"17"},"18":{"path":"/inventory","icon":"table","name":"Purchasing","parentId":"@@/global-layout","id":"18"},"19":{"path":"/inventory/search","name":"Orders","parentId":"18","id":"19"},"20":{"path":"/inventory/search","redirect":"/inventory/search/articles","parentId":"19","id":"20"},"21":{"name":"articles","icon":"smile","path":"/inventory/search/articles","parentId":"19","id":"21"},"22":{"name":"projects","icon":"smile","path":"/inventory/search/projects","parentId":"19","id":"22"},"23":{"name":"applications","icon":"smile","path":"/inventory/search/applications","parentId":"19","id":"23"},"24":{"path":"/inventory","redirect":"/inventory/table-list","parentId":"18","id":"24"},"25":{"name":"RFPs","icon":"smile","path":"/inventory/products","parentId":"18","id":"25"},"26":{"name":"Vendors","icon":"smile","path":"/inventory/basic-list","parentId":"18","id":"26"},"27":{"name":"card-list","icon":"smile","path":"/inventory/card-list","parentId":"18","id":"27"},"28":{"path":"/inventory","icon":"table","name":"Inventory","parentId":"@@/global-layout","id":"28"},"29":{"path":"/inventory","redirect":"/inventory/table-list","parentId":"28","id":"29"},"30":{"name":"Items","icon":"smile","path":"/inventory/products","parentId":"28","id":"30"},"31":{"name":"Transfers","icon":"smile","path":"/inventory/basic-list","parentId":"28","id":"31"},"32":{"name":"Adjustment","icon":"smile","path":"/inventory/card-list","parentId":"28","id":"32"},"33":{"path":"/profile","name":"Sales","icon":"profile","parentId":"@@/global-layout","id":"33"},"34":{"path":"/profile","redirect":"/profile/basic","parentId":"33","id":"34"},"35":{"name":"basic","icon":"smile","path":"/profile/basic","parentId":"33","id":"35"},"36":{"name":"advanced","icon":"smile","path":"/profile/advanced","parentId":"33","id":"36"},"37":{"name":"Reports","icon":"CheckCircleOutlined","path":"/result","parentId":"@@/global-layout","id":"37"},"38":{"path":"/result","redirect":"/result/success","parentId":"37","id":"38"},"39":{"name":"Financial Reports","icon":"smile","path":"/result/success","description":"Income statements, balance sheets, cash flow statements, profit and loss reports.","parentId":"37","id":"39"},"40":{"name":"Sales Reports","icon":"smile","path":"/result/fail","description":"Sales by product, customer, region, time period, sales team performance.","parentId":"37","id":"40"},"41":{"name":"Purchasing Reports","icon":"smile","path":"/result/fail","description":"Purchase orders by vendor, product, time period, purchase order status.","parentId":"37","id":"41"},"42":{"name":"HR Reports","icon":"smile","path":"/result/fail","description":"Employee turnover, absenteeism, payroll reports, training records","parentId":"37","id":"42"},"43":{"name":"exception","icon":"warning","path":"/exception","parentId":"@@/global-layout","id":"43"},"44":{"path":"/exception","redirect":"/exception/403","parentId":"43","id":"44"},"45":{"name":"403","icon":"smile","path":"/exception/403","parentId":"43","id":"45"},"46":{"name":"404","icon":"smile","path":"/exception/404","parentId":"43","id":"46"},"47":{"name":"500","icon":"smile","path":"/exception/500","parentId":"43","id":"47"},"48":{"name":"account","icon":"user","path":"/account","parentId":"@@/global-layout","id":"48"},"49":{"path":"/account","redirect":"/account/center","parentId":"48","id":"49"},"50":{"name":"center","icon":"smile","path":"/account/center","parentId":"48","id":"50"},"51":{"name":"settings","icon":"smile","path":"/account/settings","parentId":"48","id":"51"},"52":{"name":"Setting","icon":"setting","path":"/setting","parentId":"@@/global-layout","id":"52"},"53":{"path":"/","redirect":"/dashboard/analysis","parentId":"@@/global-layout","id":"53"},"54":{"parentId":"@@/global-layout","id":"54"},"@@/global-layout":{"id":"@@/global-layout","path":"/","parentId":"ant-design-pro-layout","isLayout":true},"ant-design-pro-layout":{"id":"ant-design-pro-layout","path":"/","isLayout":true}} as const;
  return {
    routes,
    routeComponents: {
'1': React.lazy(() => import('./EmptyRoute')),
'2': React.lazy(() => import(/* webpackChunkName: "p__user__Login__index" */'@/pages/user/Login/index.tsx')),
'3': React.lazy(() => import('./EmptyRoute')),
'4': React.lazy(() => import(/* webpackChunkName: "p__user__register-result__index" */'@/pages/user/register-result/index.tsx')),
'5': React.lazy(() => import(/* webpackChunkName: "p__user__register__index" */'@/pages/user/register/index.tsx')),
'6': React.lazy(() => import(/* webpackChunkName: "p__404" */'@/pages/404.tsx')),
'7': React.lazy(() => import('./EmptyRoute')),
'8': React.lazy(() => import('./EmptyRoute')),
'9': React.lazy(() => import(/* webpackChunkName: "p__dashboard__analysis__index" */'@/pages/dashboard/analysis/index.tsx')),
'10': React.lazy(() => import(/* webpackChunkName: "p__dashboard__monitor__index" */'@/pages/dashboard/monitor/index.tsx')),
'11': React.lazy(() => import(/* webpackChunkName: "p__dashboard__workplace__index" */'@/pages/dashboard/workplace/index.tsx')),
'12': React.lazy(() => import('./EmptyRoute')),
'13': React.lazy(() => import('./EmptyRoute')),
'14': React.lazy(() => import(/* webpackChunkName: "p__form__basic-form__index" */'@/pages/form/basic-form/index.tsx')),
'15': React.lazy(() => import(/* webpackChunkName: "p__form__step-form__index" */'@/pages/form/step-form/index.tsx')),
'16': React.lazy(() => import(/* webpackChunkName: "p__form__advanced-form__index" */'@/pages/form/advanced-form/index.tsx')),
'17': React.lazy(() => import(/* webpackChunkName: "p__form__advanced-form__index" */'@/pages/form/advanced-form/index.tsx')),
'18': React.lazy(() => import('./EmptyRoute')),
'19': React.lazy(() => import(/* webpackChunkName: "p__inventory__search__index" */'@/pages/inventory/search/index.tsx')),
'20': React.lazy(() => import('./EmptyRoute')),
'21': React.lazy(() => import(/* webpackChunkName: "p__inventory__search__articles__index" */'@/pages/inventory/search/articles/index.tsx')),
'22': React.lazy(() => import(/* webpackChunkName: "p__inventory__search__projects__index" */'@/pages/inventory/search/projects/index.tsx')),
'23': React.lazy(() => import(/* webpackChunkName: "p__inventory__search__applications__index" */'@/pages/inventory/search/applications/index.tsx')),
'24': React.lazy(() => import('./EmptyRoute')),
'25': React.lazy(() => import(/* webpackChunkName: "p__inventory__table-list__index" */'@/pages/inventory/table-list/index.tsx')),
'26': React.lazy(() => import(/* webpackChunkName: "p__inventory__basic-list__index" */'@/pages/inventory/basic-list/index.tsx')),
'27': React.lazy(() => import(/* webpackChunkName: "p__inventory__card-list__index" */'@/pages/inventory/card-list/index.tsx')),
'28': React.lazy(() => import('./EmptyRoute')),
'29': React.lazy(() => import('./EmptyRoute')),
'30': React.lazy(() => import(/* webpackChunkName: "p__inventory__table-list__index" */'@/pages/inventory/table-list/index.tsx')),
'31': React.lazy(() => import(/* webpackChunkName: "p__inventory__basic-list__index" */'@/pages/inventory/basic-list/index.tsx')),
'32': React.lazy(() => import(/* webpackChunkName: "p__inventory__card-list__index" */'@/pages/inventory/card-list/index.tsx')),
'33': React.lazy(() => import('./EmptyRoute')),
'34': React.lazy(() => import('./EmptyRoute')),
'35': React.lazy(() => import(/* webpackChunkName: "p__profile__basic__index" */'@/pages/profile/basic/index.tsx')),
'36': React.lazy(() => import(/* webpackChunkName: "p__profile__advanced__index" */'@/pages/profile/advanced/index.tsx')),
'37': React.lazy(() => import('./EmptyRoute')),
'38': React.lazy(() => import('./EmptyRoute')),
'39': React.lazy(() => import(/* webpackChunkName: "p__result__success__index" */'@/pages/result/success/index.tsx')),
'40': React.lazy(() => import(/* webpackChunkName: "p__result__fail__index" */'@/pages/result/fail/index.tsx')),
'41': React.lazy(() => import(/* webpackChunkName: "p__result__fail__index" */'@/pages/result/fail/index.tsx')),
'42': React.lazy(() => import(/* webpackChunkName: "p__result__fail__index" */'@/pages/result/fail/index.tsx')),
'43': React.lazy(() => import('./EmptyRoute')),
'44': React.lazy(() => import('./EmptyRoute')),
'45': React.lazy(() => import(/* webpackChunkName: "p__exception__403__index" */'@/pages/exception/403/index.tsx')),
'46': React.lazy(() => import(/* webpackChunkName: "p__exception__404__index" */'@/pages/exception/404/index.tsx')),
'47': React.lazy(() => import(/* webpackChunkName: "p__exception__500__index" */'@/pages/exception/500/index.tsx')),
'48': React.lazy(() => import('./EmptyRoute')),
'49': React.lazy(() => import('./EmptyRoute')),
'50': React.lazy(() => import(/* webpackChunkName: "p__account__center__index" */'@/pages/account/center/index.tsx')),
'51': React.lazy(() => import(/* webpackChunkName: "p__account__settings__index" */'@/pages/account/settings/index.tsx')),
'52': React.lazy(() => import(/* webpackChunkName: "p__setting__center__index" */'@/pages/setting/center/index.tsx')),
'53': React.lazy(() => import('./EmptyRoute')),
'54': React.lazy(() => import(/* webpackChunkName: "p__404" */'@/pages/404.tsx')),
'@@/global-layout': React.lazy(() => import(/* webpackChunkName: "layouts__index" */'D:/RND/inventory-umi/src/layouts/index.tsx')),
'ant-design-pro-layout': React.lazy(() => import(/* webpackChunkName: "umi__plugin-layout__Layout" */'D:/RND/inventory-umi/src/.umi/plugin-layout/Layout.tsx')),
},
  };
}
