import express from 'express';
import path from 'node:path';
import indexRouter from './routes/indexRouter.js';
import newRouter from './routes/newRouter.js'

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join('./', "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(indexRouter);
app.use('/new', newRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 