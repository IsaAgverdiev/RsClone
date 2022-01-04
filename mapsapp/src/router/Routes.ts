import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import Forgot from '../components/auth/Forgot';
import Home from '../pages/Home';
import Main from '../pages/Main';
import { TypeRouters } from '../types';

export const privateRoutes: TypeRouters[] = [
  { path: '*', element: Main },
  { path: '/home', element: Home },
  { path: '/main', element: Main },
];

export const publicRoutes = [
  { path: '*', element: SignIn },
  { path: '/sign_in', element: SignIn },
  { path: '/sign_up', element: SignUp },
  { path: '/forgot', element: Forgot },
  { path: '/home', element: Home },
];
