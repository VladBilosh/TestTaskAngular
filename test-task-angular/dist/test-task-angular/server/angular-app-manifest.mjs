
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/dashboard",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/accounts"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 499, hash: 'ab7ecea16a71ca07d3468c9c0cfee4357b176a743c936ce0b69694cf676bd27f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1012, hash: '87cb4c63cbbdbee01f22255ee70632164a4c4cf16b59f36eca7b36b94208d128', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'accounts/index.html': {size: 17045, hash: 'ff70f91f2bfe30b776363aff65b9bf3d2f8f0df69853d06d7d680e529a963fc4', text: () => import('./assets-chunks/accounts_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 21152, hash: '91035c96ad4840b7cf04f23cf874c2de7c9a3944442e06be2016070a35fcb06d', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
