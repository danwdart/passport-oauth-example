import Env from '../../config/env';

/**
 * Copies the contents of the required pieces of session to the current view.
 */
export default (req, res, next) => {
    const env = Env(process.env);

    if (req.session.user) {
        res.locals.user = req.session.user;
    }
    if (env.endpoints) {
        res.locals.endpoints = JSON.stringify(env.endpoints);
    }
    next();
};