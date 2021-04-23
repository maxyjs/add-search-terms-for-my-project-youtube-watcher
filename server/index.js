import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

const PORT = 5000;
const CONNECTION_URL = 'mongodb+srv://eReactLearner:Zik739mb@yt-terms.bmef7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.error(`${error} did not connect`));

mongoose.set('useFindAndModify', true);
