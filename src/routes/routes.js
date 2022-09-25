import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";

export const homePath = "/home";
export const loginPath = "/";
export const cartPath = "/cart";
export const routes = [
  {
    path: homePath,
    component: () => <Home />,
    isProtected: true,
  },
  {
    path: cartPath,
    component: () => <Cart />,
    isProtected: true,
  },
   {
    path: loginPath,
    component: () => <Login/>,
    isProtected: false,
  },
];
