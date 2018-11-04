# Passport OAuth Example

Initial thoughts:
- Node 6.5 is very very old and unsupported. I'm using it as required but would recommend using supported and/or non-deprecated versions of Node, such as 8 or 10. I've included an .nvmrc to stick to 6.5 as requested.
- I don't want to include credentials in the app, as it is not a recommended strategy for security purposes. These will be provided through environment variables. I've provided an example `.env` file to copy, edit and source.
- Grunt's pretty old - I'm used to doing things with npm and/or webpack now - but I am stil able to use it. I suppose I'll make it lint and include client JS code with browserify. Could also be used to minify.
- Surprised that ES5 is a recommendation anymore - we should be using native ES2016-2018 code depending on whether we wish to transpile or support modern browsers.
- We don't often need jQuery anymore - DOM manipulation can be done using `document.querySelector` and Ajax with the `fetch()` API. These can all be transpiled down to whatever browser the developer wishes to support.
- I'm including eslint, because I like code to be standardised. This is part of the test suite.
- I've been using ECMAScript Modules for a while now, it's usable in Node 10 and backportable to other versions, so I'm using it here with a polyfill (I changed the way we run in `npm start` to `node -r esm server.js`).
- I was a little confused to whether you wanted the web page to be a single page application or a server-rendered application. I would normally work closely with the project requirements, but right now I have to guess. We're using passportjs so we're using handlebars server-side.
- I came up across a challenge in that the OAuth application only allowed callbacks to the index page of the application, not for example `/callback`. I hacked this into the index view, but realistically, this would be configurable.
- I decided to stash the access token into the user and into the frontend, but this could have been done on the "get user details" section of the passport server-side. This way, no more log-ons would be necessary.
- I made some basic frontend and backend tests - didn't test everything - but just to show what I would do and that I can do it.



Create a basic “standard” page layout using a responsive CSS framework of your choice

Include header and footer components

- A codebase that installs and runs from just running npm install and node server.js
Could do a build then

A project README file
A covering note - explaining choices for approaches and anything else you think might assist the review