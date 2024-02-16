const express = require("express");
const router = express.Router();

const controller = require('../controllers/tracking')

router.get('/:IDtask', controller.getByTask);
router.post('/:IDtask', controller.updateDateFact);
router.patch('/:IDtask', controller.update);


module.exports = router