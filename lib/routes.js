import {IndexCtrl} from './controller/indexctrl';
import {ProfileCtrl} from './controller/profilectrl';

import OAuth2 from './passport/oauth2';

export default app => {
    app.get('/', IndexCtrl);
    app.get('/profile', ProfileCtrl);

    const oauth2 = new OAuth2();
    oauth2.addRoutesTo(app);
};
