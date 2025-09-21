import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
  urlCode: {
    type: String,
    required: true,
    unique: true,
  },
});

const urlModel = mongoose.model("URL", urlSchema);
export default urlModel;
