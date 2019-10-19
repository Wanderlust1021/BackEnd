module.exports = {
    validateAccount
  };

function validateAccount(req, res, next) {
    if (!req.body) {
        res.status(400).json({ message: 'missing data' })
    } else if (!req.body.password) {
        res.status(400).json({ message: 'missing required password field' })
    } else {
        next()
    }
};