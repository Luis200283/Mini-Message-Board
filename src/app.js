import express from 'express';
import indexRouter from './routes/indexRouter.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.set("views", path.join('./', "views"));
app.set("view engine", "ejs");

app.use(indexRouter);


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 