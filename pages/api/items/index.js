// utils
import dbConnect from "../../../lib/dbConnect";
import AppError from "../../../lib/appError";

// middlewares
import catchAsync from "../../../middlewares/catchAsync";
import globalErrorHandler from "../../../middlewares/errorMd";

// models
import Item from "../../../models/itemModel";

async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    const items = await Item.find();

    return res.status(200).json({
      status: "success",
      data: items,
    });
  } else if (method === "POST") {
    const newItem = await Item.create(req.body);
    return res.status(200).json({
      status: "success",
      data: newItem,
    });
  } else {
    const err = new AppError(`No route found for ${req.url}`, 404);
    return globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
