// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
// defineApp
export { defineApp } from './core/defineApp'
export type { RuntimeConfig } from './core/defineApp'
// plugins
export { connect, useDispatch, useStore, useSelector, getDvaApp } from 'D:/RND/inventory-umi/src/.umi-production/plugin-dva';
export { addLocale, setLocale, getLocale, getIntl, useIntl, injectIntl, formatMessage, FormattedMessage, getAllLocales, FormattedDate, FormattedDateParts, FormattedDisplayName, FormattedHTMLMessage, FormattedList, FormattedNumber, FormattedNumberParts, FormattedPlural, FormattedRelativeTime, FormattedTime, FormattedTimeParts, IntlProvider, RawIntlProvider, SelectLang } from 'D:/RND/inventory-umi/src/.umi-production/plugin-locale';
export { Provider, useModel } from 'D:/RND/inventory-umi/src/.umi-production/plugin-model';
export { useRequest, UseRequestProvider, request, getRequestInstance } from 'D:/RND/inventory-umi/src/.umi-production/plugin-request';
// plugins types.d.ts
export * from 'D:/RND/inventory-umi/src/.umi-production/plugin-antd/types.d';
export * from 'D:/RND/inventory-umi/src/.umi-production/plugin-dva/types.d';
export * from 'D:/RND/inventory-umi/src/.umi-production/plugin-layout/types.d';
export * from 'D:/RND/inventory-umi/src/.umi-production/plugin-request/types.d';
// @umijs/renderer-*
export { createBrowserHistory, createHashHistory, createMemoryHistory, Helmet, HelmetProvider, createSearchParams, generatePath, matchPath, matchRoutes, Navigate, NavLink, Outlet, resolvePath, useLocation, useMatch, useNavigate, useOutlet, useOutletContext, useParams, useResolvedPath, useRoutes, useSearchParams, useAppData, useClientLoaderData, useLoaderData, useRouteProps, useSelectedRoutes, useServerLoaderData, renderClient, __getRoot, Link, useRouteData, __useFetcher, withRouter } from 'D:/RND/inventory-umi/node_modules/@umijs/renderer-react';
export type { History, ClientLoader } from 'D:/RND/inventory-umi/node_modules/@umijs/renderer-react'
// umi/client/client/plugin
export { ApplyPluginsType, PluginManager } from 'D:/RND/inventory-umi/node_modules/umi/client/client/plugin.js';
export { history, createHistory } from './core/history';
export { terminal } from './core/terminal';
// react ssr
export const useServerInsertedHTML: Function = () => {};
