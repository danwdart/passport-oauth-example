# Passport OAuth Example

Simple web application that uses OAuth2 to log in for demonstration purposes.

Simply log in using the provided credentials in the challenge PDF and a profile view will be provided.

## Installing

You will need to copy `.env.example` to `.env` to start with, and add the required parameters.
This is to ensure critical secrets are kept in the environment.

Environment variables are:

```
PORT=3000
IP=0.0.0.0
AUTHORIZATION_URL=[HOST]/oauth/authorize
TOKEN_URL=[HOST]/oauth/token
CLIENT_ID=[id]
CLIENT_SECRET=[secret]
CALLBACK_URL=http://localhost:3000
USER_INFO=[HOST]/oauth/userinfo
```

## Building, running and testing


### Building
- `npm run build` will do a build - it triggers `grunt`. This has not been added into a trigger but can be if needed.
- `npm run watch` triggers `grunt watch` and looks out for changes.

### Running
- `npm start` will run the server - it'll require a `npm run build`. This is equivalent to `node -r esm server.js` - this is explained in COVER.md.

### Testing
- `npm test` will trigger `grunt test` which will run linting and unit testing.
- `npm run coverage` will trigger the tests and output a code coverage report.