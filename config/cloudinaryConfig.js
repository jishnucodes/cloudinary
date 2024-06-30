const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "dfpqal29y",
    api_key: "747814451416335",
    api_secret: "cOU3_mvowtskJWRVWFJF0PjXANE",
});

module.exports = { cloudinaryInstance: cloudinary };
