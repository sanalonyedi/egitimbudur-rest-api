import express from 'express';
import bodyParser from 'body-parser';
import AuthRouter from './routes';
import mongoose from 'mongoose';
import cors from 'cors';

mongoose.connect('mongodb://ebdbuser:ebdbpassword@ds121336.mlab.com:21336/egitimbudur_db', { useMongoClient: true });
mongoose.Promise = global.Promise;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

AuthRouter(app);

app.get('/', (req, res) => {
    res.send('Eğitimbudur Rest API');
});


app.listen(3300, () => console.log("Çalıştı.."))