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

This task is to create a very simple web application that presents an unauthenticated landing page, with an option for the user to login via our
OAuth2 Identity Service, retrieve their user profile and display it in a server-rendered view, enhanced with a custom jQuery plugin.

Technologies

You will be expected to demonstrate a solution using all of the following technologies:

Grunt

HTML5
Native ES5 JavaScript
jQuery
Ajax


To display a user interface to allow the user to login and view their profile. Please construct the profile view in the most appropriate way.

Create a basic “standard” page layout using a responsive CSS framework of your choice

Include header and footer components

Create a jQuery plugin to enhance the profile view

Define “enhance” yourself - try to choose an enhancement that adds to the user experience in the most useful way.

Examples:

An analytics plugin that records the path the users mouse and keyboard took

An avatar plugin - convert the users profile image URL into an image control, or look for / generate a public

avatar is missing

Identity Service

Test User Credentials
User ID
codingtest

Password
password09876

Obtaining your User Profile

Make a simple GET request to https://staging-auth.wallstreetdocs.com/oauth/userinfo and send your access token via the Authorization header,

e.g.:
curl -X GET -H "Authorization: Bearer [YOUR_TOKEN]" -H "Cache-Control: no-cache" "https://staging-auth.wall
streetdocs.com/oauth/userinfo

Deliverables

A codebase that installs and runs from just running npm install and node server.js
A project README file
A custom jQuery plugin
A ZIP file or git repo containing the codebase
A covering note - explaining choices for approaches and anything else you think might assist the review

Bonus Points

Any sort of unit or integration tests!

