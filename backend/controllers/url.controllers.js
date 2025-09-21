import asyncHandler from "express-async-handler";
import { nanoid } from "nanoid";
import urlModel from "../models/url.model.js";

const urlCreater = asyncHandler(async (req, res) => {
  const { url } = req.body;
  if (!url) {
    return res.status(400).json({
      error: "url is required",
    });
  }
  try {
    const urlCode = nanoid(6);
    const shortUrl = `http://localhost:3000/api/${urlCode}`;

    //save to DB
    const newUrl = await urlModel.create({
      url,
      shortUrl,
      urlCode,
    });

    res.json(newUrl);
  } catch (error) {
    res.status(500).json({
      error: "server error",
    });
  }
});

const getUrl = asyncHandler(async (req, res) => {
  try {
    const decodeUrl = await urlModel.findOne({
      urlCode: req.params.urlCode,
    });

    if (!decodeUrl) {
      return res.status(404).json({
        error: "url not found",
      });
    }
    let redirectUrl = decodeUrl.url;
    if (
      !redirectUrl.startsWith("http://") &&
      !redirectUrl.startsWith("https://")
    ) {
      redirectUrl = "https://" + redirectUrl;
    }

    res.redirect(redirectUrl);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "server error",
    });
  }
});

export { urlCreater, getUrl };
