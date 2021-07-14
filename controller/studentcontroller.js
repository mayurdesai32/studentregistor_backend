const STUDENT = require('../models/studentSchema');

exports.getallstudentcontroller = async (req, res, next) => {
  try {
    const result = await STUDENT.find();

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, data: error.message || 'server issue' });
  }
};

exports.createallstudentcontroller = async (req, res, next) => {
  try {
    let result = new STUDENT(req.body);
    result = await result.save();
    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, data: error.message || 'server issue' });
  }
};

exports.updatestudentcontroller = async (req, res, next) => {
  try {
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
  } catch (error) {
    res
      .status(500)
      .json({ success: false, data: error.message || 'server issue' });
  }
};

exports.deletestudentcontroller = async (req, res, next) => {
  try {
    let result = await STUDENT.findById(req.params.id);
    if (!result) {
      res.status(404).json({ success: false, data: 'not found' });
    } else {
      result = await STUDENT.findByIdAndDelete(req.params.id);
      res.status(200).json({ success: true, data: {} });
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ success: false, data: error.message || 'server issue' });
  }
};
