import express from 'express';
import bodyParser from 'body-parser';
import AuthRouter from './routes';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

AuthRouter(app);

app.get('/', (req, res) => {
    res.send('Eğitimbudur Rest API');
});


app.listen(3300, () => console.log("Çalıştı.."))