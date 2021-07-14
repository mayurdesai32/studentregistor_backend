const express = require('express');
const {getallstudentcontroller,createallstudentcontroller,updatestudentcontroller,deletestudentcontroller}=require('../controller/studentcontroller')
const router = express.Router();
// // @route- /api/v1/student
router.route('/').get(getallstudentcontroller).post(createallstudentcontroller);
// // @route- /api/v1/student/someid
router.route('/:id').put(updatestudentcontroller).delete(deletestudentcontroller);

module.exports = router;