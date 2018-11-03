import $ from 'jquery';

import md5 from 'md5';

const hash = email => md5(email.trim().toLowerCase());

$.fn.gravatar = function(userData) {
    this.html(
        `<img src="https://www.gravatar.com/avatar/${hash(userData.emails &&
        userData.emails[0] &&
        userData.emails[0].value)}"/>`
    );
}

export default $;