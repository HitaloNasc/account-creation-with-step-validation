import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './src/routes'

const app = express();
const port: number = 5000;

mongoose.connect('mongodb://localhost:27017/interview-project', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, (err) => {
    if(err){
        console.log(err);
    } else {
        console.log('MONGODB CONECTED!');
    }
});

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, () => console.log(`Server running at port ${port}`));