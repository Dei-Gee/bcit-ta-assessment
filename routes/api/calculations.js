const express = require('express');
const router  = express.Router();

router.get('/:numOne/:numTwo', (req, res) => {
    let sum = parseInt(req.params.numOne) + parseInt(req.params.numTwo);
    res.send({sum: sum.toString()});
});

module.exports = router;