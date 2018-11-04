import $ from 'jquery';
import '../lib/gravatar';
import {tabulate} from '../lib/tabulate';

export const profileCtrl = () => {
    // This could be in a library like getUserInfo(): Promise
    // - I'd also maybe make jQuery have ajax defaults
    // if I knew that they were always going to be like this.
    $.getJSON({
        // I like to have things like this in environments too, so they can be changed
        // per-dev, per-prod, etc
        url: __POE__.endpoints.userInfo,
        headers: {
            Authorization: `Bearer ${__POE__.accessToken}`
        }
    }).then(
        // We could call this with a table-creating library,
        // some kind of other library or simply Handlebars again.
        result => {
            $('#picture').gravatar(result);
            $('#profileInfo').html(tabulate(result));
        },
        error => {
            console.error(error);
        }
    )
}