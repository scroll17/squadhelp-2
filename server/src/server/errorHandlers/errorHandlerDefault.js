const { HTTP_CODE : {
    SERVER_ERROR: { INTERNAL_SERVER_ERROR }
}} = require('../utils/consts');

module.exports = (err,req,res, next) =>{
    if(!err.status)
        res.status(INTERNAL_SERVER_ERROR.CODE).json(err);
    else {
        res.status(err.status).send( { statusText: err.message } )
    }
};
