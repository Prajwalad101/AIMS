// utility functions
import AppError from "../../../lib/appError";
import catchAsync from "../../../lib/catchAsync";
import dbConnect from "../../../lib/dbConnect";

// models
import Admin from "../../../models/AdminModel";

// middleware
import globalErrorHandler from "../../../middlewares/errorMd";

async function handler(req, res) {
  await dbConnect();
  const { method } = req;

  if (method === "GET") {
    const admins = await Admin.find();
    return res.status(200).json({
      status: "success",
      data: admins,
    });
  } else if (method === "POST") {
    const newAdmin = await Admin.create(req.body);
    res.status(200).json({
      status: "success",
      message: newAdmin,
    });
  } else {
    const err = new AppError(`No route for ${req.url} found`, 404);
    globalErrorHandler(err, req, res);
  }
}

// wrapping function with catchAsync to handler errors
export default catchAsync(handler);
