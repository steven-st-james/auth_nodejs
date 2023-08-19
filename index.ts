import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { signUp} from './controller/sign-up';
import { logIn } from './controller/log-in';
dotenv.config();

const app = express();
app.use(express.json());

const port = process.env.PORT;


app.get('/', (req: Request, res: Response) => {
    res.send('Express + Typescript Yeah!!!!');
});


app.post('/sign-up', signUp);

app.post('/log-in', logIn);
app.listen(port, () => {
    console.log(`[server]: Server is running on http://localhost:${port}`);
})