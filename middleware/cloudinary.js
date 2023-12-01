//const dotenv = require('dotenv');
//const cloudinary = require('cloudinary').v2;
import cloudinary from "cloudinary"
import dotenv from "dotenv"

const cloud=cloudinary.v2

dotenv.config();
console.log(process.env.CLOUDINARY_API_KEY)

cloud.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const upload = async (file) => {
  const image = await cloud.uploader.upload(
    file,
    {folder:"space"},
    (result) => result
  );
  return image;
};

export default upload

