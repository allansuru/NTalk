module.exports = (req, res, next) => {
    if (!req.session.usuario) {
        console.log('Não existe usuario na sessao!');      
        return res.redirect('/');
    }
    return next();
};