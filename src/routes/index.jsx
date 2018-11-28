import Components from 'views/Components/Components';
import LandingPage from 'views/LandingPage/LandingPage';
import ProfilePage from 'views/ProfilePage/ProfilePage';
import LoginPage from 'views/LoginPage/LoginPage';
import MainPage from 'views/MainPage/MainPage';
import ClubPage from 'views/ClubPage/ClubPage';

const indexRoutes = [
  { path: '/landing-page', name: 'LandingPage', component: LandingPage },
  { path: '/profile-page', name: 'ProfilePage', component: ProfilePage },
  { path: '/login-page', name: 'LoginPage', component: LoginPage },
  { path: '/test', name: 'Components', component: Components },
  { path: '/club', name: 'ClubPage', component: ClubPage },
  { path: '/', name: 'MainPage', component: MainPage }
];

export default indexRoutes;