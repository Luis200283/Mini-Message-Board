import express from 'express';
import path from 'node:path';
import indexRouter from './routes/indexRouter.js';
import newRouter from './routes/newRouter.js'
import { body, validationResult } from 'express-validator';
import { sql } from './db/pool.js';

const app = express();
const PORT = process.env.PORT || 3000;

const requestHandler = async (req, res) => {
    const result = await sql`SELECT version()`;
    const { version } = result[0];
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(version);
};


app.set("views", path.join(import.meta.dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(indexRouter);
app.use('/new', newRouter);
app.get("/db", async (req, res) => {
    try {
        const result = await sql`SELECT NOW()`;
        res.json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error de base de datos");
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 