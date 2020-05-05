let express = require('express');
let router = express.Router();
let caseModel = require('../models/caseModel');

router.get('/', async (req, res) => {
    const response = await caseModel.getCases();
    res.json(response).status(200);
});

router.post('/', async (req, res) => {
    console.log(req.body);
    const{
        test_date,
        site_name,
        state
    } = req.body

    const postData = await caseModel.addCase(
        test_date,
        site_name,
        state
    );
    console.log('DATA FROM FRONT END USER RESPONSE: ', postData);

    res.status(200).redirect('/')
});

module.exports = router;