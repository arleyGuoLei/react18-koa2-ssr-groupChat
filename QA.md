# QA

## 遇到的问题

### 服务端渲染不一致，客户端使用HMR技术，代码变更局部更新，导致和服务端渲染不一致

```text
Warning: Text content did not match. Server: "login" Client: "login1"
    at h1
    at div
    at __WEBPACK_DEFAULT_EXPORT__
    at body
    at html
    at __WEBPACK_DEFAULT_EXPORT__ (webpack://react18-koa2-ssr-groupChat/./client/components/Html.tsx?:14:25)
    at __WEBPACK_DEFAULT_EXPORT__
```

#### 思路

- 其他项目的HMR静态更新后，不会做页面刷新reload请求HTML，当前架构下会，配置不对？
- 服务端刷新的时候前端还没编译完，所以出现渲染不一致

- 整页刷新是因为

```text
log.js:26 [HMR] Cannot apply update. Need to do a full reload!
log.js:26 [HMR] Error: Aborted because ./client/pages/login/index.tsx is not accepted

Update propagation: ./client/pages/login/index.tsx -> ./client/app.tsx -> ./client/index.tsx
```

- 在客户端入口增加`if (module.hot) { module.hot.accept() }`实现不刷新了，报了不可重新创建root的错误；移动到App后，热更新失效了。

### 服务端代码变化，服务重启后，浏览器不会重新刷新 (需要手动刷新浏览器)

### ReferenceError: $RefreshSig$ is not defined

服务端渲染不能加`require.resolve('react-refresh/babel')`

## 参考链接

- [一分钟用上热更新 React Fast Refresh（react-refresh）](https://segmentfault.com/a/1190000023534941)
- [webpack hot-module-replacement 原理&踩坑](https://segmentfault.com/a/1190000010796038)
