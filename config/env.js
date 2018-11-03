
export default env => ({
    port: env.PORT || 3000,
    ip: env.IP || '0.0.0.0',
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
