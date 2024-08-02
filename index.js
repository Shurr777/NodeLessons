const PORT = process.env.PORT || 5000;
const Application = require('./myframework/Application');
const userRouter = require('./src/user-router');
const jsonParser = require('./myframework/parseJson')
const parseUrl = require('./myframework/parseUrl');
const app = new Application();

app.use(jsonParser);
app.use(parseUrl('http://localhost:' + PORT));
app.addRouter(userRouter)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))