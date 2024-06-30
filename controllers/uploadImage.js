const mongoose = require('mongoose');
const { cloudinaryInstance } = require('../config/cloudinaryConfig');
const Banner = require('../models/Banner');

const uploadImage = async (req, res) => {
    console.log("hitting");
    try {
        if (!req.file && !req.body.image) {
            return res.status(400).send("File or image URL is not provided");
        }

        let imageUrl;
        if (req.file) {
            // Upload file to Cloudinary
            const result = await cloudinaryInstance.uploader.upload(req.file.path);
            imageUrl = result.url;
        } else if (req.body.image) {
            // Upload image URL to Cloudinary
            const result = await cloudinaryInstance.uploader.upload(req.body.image);
            imageUrl = result.url;
        }

        const body = req.body;
        console.log(body, "body");

        const newImage = new Banner({
            image: imageUrl,
            ...body // Assuming you want to include other properties from req.body
        });

        await newImage.save();

        if (!newImage) {
            return res.status(500).send("Image is not created");
        } else {
            return res.status(201).json(newImage);
        }
    } catch (error) {
        console.log("An error occurred", error);
        return res.status(500).json({
            success: false,
            message: "An error occurred",
        });
    }
};

module.exports = uploadImage;
