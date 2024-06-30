const express = require('express')
const app = express()
const port = 3000

const imageRouter = require("./routers/imageRouter")

app.use(express.json());

app.use('/image', imageRouter )



// getting-started.js
const mongoose = require('mongoose');
const router = require('./routers/imageRouter');

main().then(() => console.log("connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://jishnu:72R7dVSpzMY9WHmk@cluster0.idlxkmv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})