import SignIn from '../components/auth/SignIn';
import SignUp from '../components/auth/SignUp';
import Forgot from '../components/auth/Forgot';
import Home from '../pages/Home';
import Main from '../pages/Main';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings'
import { TypeRouters } from '../types';

export const privateRoutes: TypeRouters[] = [
  { path: '*', element: Main },
  { path: '/home', element: Home },
  { path: '/main', element: Main },
  { path: '/main/profile', element: Profile },
  { path: '/main/settings', element: Settings },
];

export const publicRoutes = [
  { path: '*', element: SignIn },
  { path: '/sign_in', element: SignIn },
  { path: '/sign_up', element: SignUp },
  { path: '/forgot', element: Forgot },
  { path: '/home', element: Home },
  { path: '/main/profile', element: Profile },
  { path: '/main/settings', element: Settings },
];
