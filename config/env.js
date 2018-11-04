/**
 * I like to keep the actual env constants and ways to access them apart.
 * This way, I only need to specify how I'm talking to the environment once
 * per constant, and allows the constants to change in one place.
 */
export default env => ({
    port: env.PORT || 3000,
    ip: env.IP || '0.0.0.0', // This could well be "::" for all it matters.
    oauth: {
        authorizationURL: env.AUTHORIZATION_URL || '',
        tokenURL: env.TOKEN_URL || '',
        clientID: env.CLIENT_ID || '',
        clientSecret: env.CLIENT_SECRET || '',
        callbackURL: env.CALLBACK_URL || ''
    },
    endpoints: {
        userInfo: env.USER_INFO || ''
    }
});
