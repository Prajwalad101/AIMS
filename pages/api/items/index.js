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
  const { userId } = req.query;

  if (method === "GET") {
    let items;
    if (!userId) {
      items = await Item.find();
    } else {
      items = await Item.find({ "addedBy.id": userId });
    }
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
