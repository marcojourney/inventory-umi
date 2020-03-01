import { ConfigType } from '@umijs/bundler-utils';
import { winPath } from '@umijs/utils';
import getConfig from './getConfig';

test('normal', async () => {
  const config = await getConfig({
    cwd: '/foo',
    config: {},
    env: 'development',
    type: ConfigType.csr,
  });
  expect(config.mode).toEqual('development');
  expect(config.devtool).toEqual('cheap-module-source-map');
  expect(config.resolve!.modules![0]).toEqual('node_modules');
  expect({
    ...config.output,
    path: winPath(config.output!.path!),
  }).toEqual({
    path: '/foo/dist',
    filename: '[name].js',
    chunkFilename: '[name].js',
    publicPath: undefined,
    futureEmitAssets: true,
    pathinfo: true,
  });
});

test('opts.entry', async () => {
  const config = await getConfig({
    cwd: '/foo',
    config: {},
    env: 'development',
    type: ConfigType.csr,
    entry: {
      bar: 'bar.js',
    },
  });
  expect(config.entry).toEqual({
    bar: ['bar.js'],
  });
});

test('opts.entry + config.runtimePublicPath', async () => {
  const config = await getConfig({
    cwd: '/foo',
    config: {
      runtimePublicPath: true,
    },
    env: 'development',
    type: ConfigType.csr,
    entry: {
      bar: 'bar.js',
    },
  });
  // @ts-ignore
  expect(config.entry!.bar[0]).toContain('runtimePublicPathEntry');
  // @ts-ignore
  expect(config.entry!.bar[1]).toEqual('bar.js');
});

test('opts.entry + opts.hot', async () => {
  const config = await getConfig({
    cwd: '/foo',
    config: {},
    env: 'development',
    type: ConfigType.csr,
    entry: {
      bar: 'bar.js',
    },
    hot: true,
  });
  // @ts-ignore
  expect(config.entry!.bar[0]).toContain('webpackHotDevClient');
  // @ts-ignore
  expect(config.entry!.bar[1]).toEqual('bar.js');
});

test('config.devtool + development', async () => {
  const config = await getConfig({
    cwd: '/foo',
    config: {
      devtool: 'eval',
    },
    env: 'development',
    type: ConfigType.csr,
  });
  expect(config.devtool).toEqual('eval');
});

test('no config.devtool + production', async () => {
  const config = await getConfig({
    cwd: '/foo',
    config: {},
    env: 'production',
    type: ConfigType.csr,
  });
  expect(config.devtool).toEqual(undefined);
});

test('config.devtool + production', async () => {
  const config = await getConfig({
    cwd: '/foo',
    config: {
      devtool: 'eval',
    },
    env: 'production',
    type: ConfigType.csr,
  });
  expect(config.devtool).toEqual('eval');
});

test('config.hash + production', async () => {
  const config = await getConfig({
    cwd: '/foo',
    config: {
      hash: true,
    },
    env: 'production',
    type: ConfigType.csr,
  });
  expect(config.output?.filename).toEqual('[name].[contenthash:8].js');
  expect(config.output?.chunkFilename).toEqual(
    '[name].[contenthash:8].async.js',
  );
});

test('config.hash + production', async () => {
  const config = await getConfig({
    cwd: '/foo',
    config: {
      hash: true,
    },
    env: 'production',
    type: ConfigType.csr,
  });
  expect(config.output?.filename).toEqual('[name].[contenthash:8].js');
  expect(config.output?.chunkFilename).toEqual(
    '[name].[contenthash:8].async.js',
  );
});

test('config.alias', async () => {
  const config = await getConfig({
    cwd: '/foo',
    config: {
      alias: {
        bar: 'rab',
      },
    },
    env: 'development',
    type: ConfigType.csr,
  });
  expect(config.resolve?.alias).toEqual({
    bar: 'rab',
  });
});

test('config.externals', async () => {
  const config = await getConfig({
    cwd: '/foo',
    config: {
      externals: {
        bar: 'window.Bar',
      },
    },
    env: 'development',
    type: ConfigType.csr,
  });
  expect(config.externals).toEqual({
    bar: 'window.Bar',
  });
});

test('config.chainWebpack', async () => {
  const config = await getConfig({
    cwd: '/foo',
    config: {
      chainWebpack(memo) {
        memo.resolve.alias.set('foo', 'bar');
      },
    },
    env: 'development',
    type: ConfigType.csr,
  });
  expect(config.resolve?.alias).toEqual({
    foo: 'bar',
  });
});

test('opts.chainWebpack', async () => {
  const config = await getConfig({
    cwd: '/foo',
    config: {},
    env: 'development',
    type: ConfigType.csr,
    chainWebpack(memo) {
      memo.resolve.alias.set('foo', 'bar');
      return memo;
    },
  });
  expect(config.resolve?.alias).toEqual({
    foo: 'bar',
  });
});

test('config.manifest + production', async () => {
  const config = await getConfig({
    cwd: '/foo',
    config: {
      manifest: {},
    },
    env: 'production',
    type: ConfigType.csr,
  });
  expect(
    config.plugins?.filter(plugin => {
      return plugin instanceof require('webpack-manifest-plugin');
    }).length,
  ).toEqual(1);
});

test('env SPEED_MEASURE', async () => {
  process.env.SPEED_MEASURE = 'CONSOLE';
  const config = await getConfig({
    cwd: '/foo',
    config: {},
    env: 'development',
    type: ConfigType.csr,
  });
  expect(
    config.plugins?.filter(plugin => {
      return plugin instanceof require('speed-measure-webpack-plugin');
    }).length,
  ).toEqual(1);
  delete process.env.SPEED_MEASURE;
});

test('env SPEED_MEASURE = !CONSOLE', async () => {
  // @ts-ignore
  process.env.SPEED_MEASURE = '2';
  const config = await getConfig({
    cwd: '/foo',
    config: {},
    env: 'development',
    type: ConfigType.csr,
  });
  const p = config.plugins?.filter(plugin => {
    return plugin instanceof require('speed-measure-webpack-plugin');
  })[0];
  // @ts-ignore
  expect(p.options.outputFormat).toEqual('json');
  delete process.env.SPEED_MEASURE;
});

test('env COMPRESS = none + production', async () => {
  process.env.COMPRESS = 'none';
  const config = await getConfig({
    cwd: '/foo',
    config: {},
    env: 'production',
    type: ConfigType.csr,
  });
  expect(config.optimization?.minimize).toEqual(false);
  delete process.env.COMPRESS;
});
