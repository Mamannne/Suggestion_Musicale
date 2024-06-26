var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import { get_lyrics } from './lyrics.js';
import cors from 'cors';
const API_KEY = "1AqF1vBdyL1PRwnyWdxgj8r2nBtBZBnHrJL9Y2azkdne04F-FzOUBzSyATmgGqKA";
const app = express();
app.use(cors());
app.use(express.json());
/* const HandleBest = async (req: Request, res: Response, next: Function) => {
  const data = req.body;
  app.get('/BEST', (req: Request, res: Response) => {
    res.send(data);
  });
  console.log('data sent');
  //console.log('got out')
  next();
}
  */
const MyMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
    const lyrics = yield get_lyrics({ apiKey: API_KEY,
        title: titre,
        artist: artist,
        optimizeQuery: true });
    res.json(lyrics);
    yield fetch('http://127.0.0.1:5000/calcul', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ lyrics: lyrics })
    });
    //console.log('got out')
    next();
});
/* app.get('/BEST', HandleBest, (req: Request, res: Response) => {
  console.log(req.body);
  res.end();
}); */
/* app.patch('/BEST', (req: Request, res: Response) => {
  let best = req.body;
  console.log(best);
  res.send('Hello World!');
}); */
app.get('/get', (req, res) => {
    res.send('Hello World!');
});
app.post('/post', MyMiddleware, (req, res) => {
    console.log(req.body);
    //res.send('Hello World!');
    res.end();
    //console.log('end');
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
//# sourceMappingURL=server.js.map