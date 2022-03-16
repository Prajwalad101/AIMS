// utils
import AppError from "../../../lib/appError";
import dbConnect from "../../../lib/dbConnect";

// models
import Admin from "../../../models/adminModel";

// middlewares
import catchAsync from "../../../middlewares/catchAsync";
import globalErrorHandler from "../../../middlewares/errorMd";

async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  const { id } = req.query;

  if (method === "GET") {
    const admin = await Admin.find({ email: id });

    return res.status(200).json({
      status: "success",
      body: admin,
    });
  } else {
    const err = new AppError(`No routes for ${req.url} found`);
    globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
