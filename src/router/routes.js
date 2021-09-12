/**
 * @type {Array<import("vue-router").RouteRecordRaw>}
 */
const routes = [
  {
    path: '/',
    redirect: 'new',
  },
  {
    path: '/new',
    name: 'new',
    component: () => import('../views/NewPage.vue'),
  },
  {
    path: '/code/:slug',
    name: 'code',
    component: () => import('../views/CodeDisplay.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: 'new',
  },
];

export default routes;
