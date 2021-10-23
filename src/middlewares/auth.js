const auth = (req, res, next) => {
    if (!req.session.user) {
        res.send('Informacion sensible, necesitas logearte primero');
    }
    return next();
}
export default auth