// utils
import dbConnect from "../../../lib/dbConnect";
import AppError from "../../../lib/appError";

// middlewares
import catchAsync from "../../../middlewares/catchAsync";
import globalErrorHandler from "../../../middlewares/errorMd";

// models
import Item from "../../../models/itemModel";

async function handler(req, res) {
  await dbConnect();

  const { method } = req;
  const { itemId } = req.query;

  if (method === "DELETE") {
    const items = await Item.findByIdAndDelete(itemId);
    return res.status(204).json();
  } else {
    const err = new AppError(`No route found for ${req.url}`, 404);
    return globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
