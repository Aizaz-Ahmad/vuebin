const router = require('express').Router();
const Controller = require('./controller');
router.get('/code/:slug', Controller.getCode);
router.post('/new', Controller.postCode);

module.exports = router;
