import $ from 'jquery';
import '../lib/gravatar';
import {tabulate} from '../lib/tabulate';

export const profileCtrl = () => {
    $.getJSON({
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