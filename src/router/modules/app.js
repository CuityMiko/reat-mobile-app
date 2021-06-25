import { AppLayout } from '@/layouts'
import Home from '@pages/home'
import User from '@pages/user'

const baseRoutes = [
  {
    path: '/',
    component: AppLayout,
    exact: true,
    routes: []
  },
  {
    path: '/propaganda',
    component: AppLayout,
    routes: [
      {
        path: '/propaganda/home',
        component: Home,
        meta: {
          title: '首页',
          isShowNavbar: true,
          isBack: false,
          isShowTabbar: true
        },
        routes: []
      },
      {
        path: '/propaganda/user',
        component: User,
        meta: { title: '个人中心', isBack: false, isShowTabbar: true },
        routes: []
      }
    ]
  }
]

export default baseRoutes
