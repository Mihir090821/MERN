const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const app = express()
const port = 8080;
// const DB = process.env.MONGODB_URL || 'mongodb+srv://Mihir:Mihir@0912@cluster0.w9ens.mongodb.net/mern?retryWrites=true&w=majority';
const DB = "mongodb://localhost:27017/mernapp";


mongoose.connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
    // useFindAndModify: false
}
).then(() => console.log('MongoDB connection established.'))
    .catch((error) => console.error("MongoDB connection failed:", error.message))


// middeleware function for jwt token varification
// const middleware = (req, res, Next) => {
//     console.log("Middelware");
//     Next();
// }

app.get('/', (req, res) => {
    res.send('Hello World 123')
})
// app.get('/a', middleware, (req, res) => {
//     console.log("A is here");
//     res.send('Hello World About')
// })
// app.get('/b', (req, res) => {
//     res.send('Hello World b')
// })
app.listen(port, () => {
    console.log(`Mern app listening on port ${port}`)
})
// process.exit(1);