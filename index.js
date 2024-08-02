const PORT = process.env.PORT || 5000;
const Application = require('./myframework/Application');
const userRouter = require('./src/user-router');
const jsonParser = require('./myframework/parseJson')
const parseUrl = require('./myframework/parseUrl');
const mongoose = require('mongoose');
const app = new Application();
const uri = "mongodb+srv://almarkiz777:gh0CE4jCTFUtrXN5@cluster123.qrlzkxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster123";

app.use(jsonParser);
app.use(parseUrl('http://localhost:' + PORT));
app.addRouter(userRouter)


//gh0CE4jCTFUtrXN5

const start = async () => {
    try {
        await mongoose.connect(uri)
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (err) {
        console.log(err);
    }
}

start();