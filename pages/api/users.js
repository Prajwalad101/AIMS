// utils
import clientPromise from "../../lib/mongodb";
import AppError from "../../lib/appError";

// middlewares
import catchAsync from "../../middlewares/catchAsync";
import globalErrorHandler from "../../middlewares/errorMd";

async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    const client = await clientPromise;
    const usersCollection = client.db().collection("users");

    const cursor = usersCollection.find();
    const docs = await cursor.toArray();

    return res.status(200).json({
      status: "success",
      data: docs,
    });
  } else {
    const err = new AppError(`Could not find route for ${req.url}`, 404);
    return globalErrorHandler(err, req, res);
  }
}

export default catchAsync(handler);
