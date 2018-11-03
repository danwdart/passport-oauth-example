import Env from '../../config/env';
import passport from '@passport-next/passport';
import {Strategy as OAuth2Strategy} from '@passport-next/passport-oauth2';
import {requireLogin} from '../filters';

export default class OAuth2 {
    setup(req, res, next) {
        const env = Env(process.env);

        passport.use(new OAuth2Strategy(
            env.oauth,
            (accessToken, refreshToken, user, done) => {
                req.session.user = {
                    accessToken
                };
                done(null, user);
            }
        ));

        next();
    }

    addRoutesTo(app) {
        app.get('/auth',
            requireLogin,
            this.setup,
            passport.authenticate(
                'oauth2'
            )
        );

        app.get('/auth/callback',
            requireLogin,
            this.setup,
            passport.authenticate(
                'oauth2',
                {
                    failureRedirect: '/failure',
                    successRedirect: '/'
                }
            )
        );
    }
}
