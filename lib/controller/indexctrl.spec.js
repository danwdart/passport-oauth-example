import {IndexCtrl} from './indexctrl';
import {assert, spy} from 'sinon';
// Here I'm using spies, but I could be using stubs... this is just an example
// I should use spies if I want the real function too, stubs if not.

describe('Index Controller', () => {
    it('redirects if query has ?code', () => {
        const req = {
                query: {
                    code: 'abc123'
                }
            },
            res = {
                redirect: spy()
            };
        IndexCtrl(req, res);
        assert.calledWith(res.redirect, 302, `/auth/callback?code=${req.query.code}`);
    });

    it('renders otherwise', () => {
        const req = {
                query: {
                    
                }
            },
            res = {
                render: spy()
            };
        IndexCtrl(req, res);
        assert.calledWith(res.render, `index`);
    })
})