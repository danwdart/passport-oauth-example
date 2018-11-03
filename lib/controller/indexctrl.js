export const IndexCtrl = (req, res) => {
    // Hack to ensure we use the correct auth callback
    if (req.query.code) {
        return res.redirect(302, `/auth/callback?code=${req.query.code}`);
    }
    res.render('index');
};