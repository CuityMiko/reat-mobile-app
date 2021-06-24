import { AppLayout } from "@/layouts";
import Home from "@pages/Home";
import Category from "@pages/Category";
import User from "@pages/User";
import Cart from "@pages/Cart";

const baseRoutes = [
  {
    path: "/",
    component: AppLayout,
    exact: true,
    routes: [],
  },
  {
    path: "/propaganda",
    component: AppLayout,
    routes: [
      {
        path: "/propaganda/home",
        component: Home,
        meta: {
          title: "商城首页",
          isShowNavbar: false,
          isBack: false,
          isShowTabbar: true,
        },
        routes: [],
      },
      {
        path: "/propaganda/category",
        component: Category,
        meta: { title: "商品分类", isBack: false, isShowTabbar: true },
        routes: [],
      },
      {
        path: "/propaganda/cart",
        component: Cart,
        meta: { title: "购物车", isBack: false, isShowTabbar: true },
        routes: [],
      },
      {
        path: "/propaganda/user",
        component: User,
        meta: { title: "我的", isBack: false, isShowTabbar: true },
        routes: [],
      },
    ],
  },
];

export default baseRoutes;
