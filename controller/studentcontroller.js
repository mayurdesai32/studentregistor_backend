const STUDENT = require('../models/studentSchema');
const asyncHandler = require('../middleware/asyncHandler');
exports.getallstudentcontroller = async (req, res, next) => {
  const result = await STUDENT.find();

  res.status(200).json({ success: true, data: result });
};

exports.createallstudentcontroller = asyncHandler(async (req, res, next) => {
  let result = new STUDENT(req.body);
  result = await result.save();
  res.status(200).json({ success: true, data: result });
});

exports.updatestudentcontroller = asyncHandler(async (req, res, next) => {
  let result = await STUDENT.findById(req.params.id);
  if (!result) {
    res.status(404).json({ success: false, data: 'not found' });
  } else {
    result = await STUDENT.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ success: true, data: result });
  }
});

exports.deletestudentcontroller = asyncHandler(async (req, res, next) => {
  let result = await STUDENT.findById(req.params.id);
  if (!result) {
    res.status(404).json({ success: false, data: 'not found' });
  } else {
    result = await STUDENT.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, data: {} });
  }
});
