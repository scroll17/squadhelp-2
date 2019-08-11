const {jwtSignAccess, jwtSignRefresh } = require('../utils/jwtTokenVerify');
const { RefreshToken } = require('../models/index');

module.exports = async (req, res, next) => {
    const user = Object.assign({},req.body.user);
    try{
        let tokenPair = {
            accessToken: await jwtSignAccess(user.email, user.firstName, user.role, user.id),
            refreshToken: await jwtSignRefresh(user.id, user.role)
        };
        await RefreshToken.create({userId: user.id, tokenString: tokenPair.refreshToken});

        return res.send({
            user,
            tokenPair,
        });
    }catch (err) {
        next(err)
    }
};
