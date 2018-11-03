import dotenv from 'dotenv';
import express from 'express';
import exphbs from 'express-handlebars';
import http from 'http';
import sessions from 'client-sessions';
import bodyParser from 'body-parser';
import passportsetup from './lib/passport/setup';
import sessionToView from './lib/middleware/session-to-view';
import routes from './lib/routes';
import Env from './config/env';

// On production, these values should be set in the actual environment
if (process.env.NODE_ENV !== 'production') {
    dotenv.load();
}

const env = Env(process.env),
    app = express(),
    server = http.Server(app);

// App setup
// This could be moved into another library
// but it uses __dirname, so I'd rather keep it here.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
app.use(express.static(__dirname + '/public'));

app.use(sessions({
    cookieName: 'session',
    secret: 'YouShouldProbablyReplaceThisBecauseItsASecurityRisk',
    duration: 24 * 60 * 60 * 1000,
    activeDuration: 1000 * 60 * 5,
    httpOnly: true,
    ephemeral: false
}));

passportsetup(app);

// use own middleware
app.use(sessionToView);

routes(app);

/*
process.on('SIGINT', () => {
    console.log('SIGINT caught, exiting...');
    server.close(() => process.exit());
});
*/

server.listen(
    env.port,
    env.ip,
    () => {
        console.log(`Listening on port ${env.port} on IP ${env.ip}\n`);
    }
);