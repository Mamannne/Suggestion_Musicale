import express, { Request, Response } from 'express';
import { get_lyrics } from './lyrics.js';

const API_KEY = "1AqF1vBdyL1PRwnyWdxgj8r2nBtBZBnHrJL9Y2azkdne04F-FzOUBzSyATmgGqKA";

const app = express();

app.use(express.json());

const MyMiddleware = async (req: Request, res: Response, next: Function) => {
  const data = req.body;
  const artist = data.artiste;
  if (!artist) {
    /* res.status(400).send('No artist in request'); */
    return;
  }
  const titre = data.titre;
  if (!titre) {
    /* res.status(400).send('No titre in request'); */
    return;
  }
  const lyrics = await get_lyrics({apiKey: API_KEY,
    title: titre,
    artist: artist,
    optimizeQuery: true});
    res.json(lyrics);
  //console.log('got out')
  next();
}

app.get('/get', (req: Request, res: Response) => {
  res.send('Hello World!');
});


app.post('/post', MyMiddleware, (req: Request, res: Response) => {
  console.log(req.body);
  //res.send('Hello World!');
  res.end();
  //console.log('end');
});

const PORT = 3000;


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
