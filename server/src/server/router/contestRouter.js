const express = require('express');

const path = require('path');
const multer = require('multer');

const {
 createContest,
 sendPriceToContests
} = require('../controllers/contestController');


const parseContestFormData = require('../middlewares/contest/parseContestFormData');
const compareThePriceOfContests = require('../middlewares/contest/compareThePriceOfContests');

const { URL: { API, QUERY } } = require('../utils/consts');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {

        cb(null, path.join(__dirname, '../tmp/taskFiles'))
    },
    filename: function (req, file, cb) {
        const originalFileName = `${Date.now()}_${file.originalname}`;

        cb(null, originalFileName);
    }
});
const upload = multer({storage: storage});


const router = express.Router();


router.post(API.CONTEST,
    upload.array('files', 3),
    parseContestFormData,
    compareThePriceOfContests,
    createContest
);

router.get(API.CONTEST_PRICE,
    sendPriceToContests,
);


module.exports = router;