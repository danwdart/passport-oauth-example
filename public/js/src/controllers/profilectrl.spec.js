/* global __POE__*/

import {assert, stub} from 'sinon';
import mock from 'mock-require';

describe('Profile Controller', () => {
    beforeEach(() => {
        // Huge hack, but it's what it looks for.
        global.__POE__ ={
            accessToken: 'accessToken',
            endpoints: {
                userInfo: 'userInfoEndpoint'
            }
        };
    });
    afterEach(() => {
        // clean up
        delete global.__POE__;
    });
    it('correctly asks for JSON and renders, with all mocks', () => {
        const gravatar = stub(),
            html = stub(),
            jQ = stub().callsFake(() => ({
                gravatar,
                html
            }));
        
        const fakeResult = {
            fake: 'result'
        };

        jQ.getJSON = stub().callsFake(() => ({
            then: (res) => res(fakeResult)
        }));

        const tabulate = stub().callsFake(() => 'table');

        mock('jquery', jQ);
        mock('../lib/gravatar', {});
        mock('../lib/tabulate', {
            tabulate
        });

        const profileCtrl = require('./profilectrl').profileCtrl;

        profileCtrl();

        assert.calledWith(
            jQ.getJSON,
            {
                headers: {
                    Authorization: `Bearer ${__POE__.accessToken}`
                },
                url: __POE__.endpoints.userInfo
            }
        );

        assert.calledWith(gravatar, fakeResult);
        assert.calledWith(tabulate, fakeResult);
        assert.calledWith(jQ, '#picture');
        assert.calledWith(jQ, '#profileInfo');
        assert.calledWith(html, 'table');
    });
});