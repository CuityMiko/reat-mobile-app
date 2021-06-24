import { BaseLayout } from "@/layouts";
import Login from "@pages/Login";

const appRoutes = [
  {
    path: "/app",
    component: BaseLayout,
    routes: [
      {
        path: "/app/login",
        meta: { title: "login", icon: "login", auth: false },
        component: Login,
        routes: [],
      },
    ],
  },
];

export default appRoutes;
