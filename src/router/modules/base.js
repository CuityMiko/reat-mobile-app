import { BaseLayout } from '@/layouts'
import Login from '@pages/login'

const appRoutes = [
  {
    path: '/app',
    component: BaseLayout,
    routes: [
      {
        path: '/app/login',
        meta: { title: '登录页', icon: 'login', auth: false },
        component: Login,
        routes: []
      }
    ]
  }
]

export default appRoutes
