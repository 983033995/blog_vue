const index = () => import(/* webpackChunkName: "index" */ '@/components/home/index')
const adminHome = () => import(/* webpackChunkName: "adminHome" */ '@/components/admin/adminHome')

export default [
  {
    path: '/',
    component: index,
    meta: '首页',
    index: 0,
    children: [
      {
        path: ''
      }
    ]
  }, {
    path: '/admin',
    component: adminHome,
    meta: '管理员首页',
    index: 0,
    children: [
      {
        path: '/system',
        component: adminSystem,
        meta: '我的桌面',
        index: 1
      },
      {
        path: '/echarts',
        component: adminEcharts,
        meta: '图表',
        index: 1
      }
    ]
  }
]
