// We don't have a single-page application set up, nor a routes.
// Let's just do rudimentary routes.
import {profileCtrl} from './controllers/profilectrl';

if (location.pathname.startsWith('/profile')) {
    profileCtrl();
}