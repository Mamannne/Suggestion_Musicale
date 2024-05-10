import {getSong} from './getSong.js';
import { checkOptions } from './utils/index.js';
import {extract} from './utils/extractlyrics.js';

interface Options {
  apiKey: string;
  title: string;
  artist: string;
  optimizeQuery?: boolean;
}

/**
 * @param {(Options | string)} arg - options object, or Genius URL
 */
const get_lyrics = async function (arg: Options | string): Promise<string | null> {
  try {
    if (arg && typeof arg === 'string') {
      let lyrics = await extract(arg);
      return lyrics;
    } else if (typeof arg === 'object') {
      checkOptions(arg);
      let results = await getSong(arg);
      if (!results) return null;
      let lyrics = await extract(results[0].url);
      return lyrics;
    } else {
      throw new Error('Invalid argument');
    }
  } catch (e) {
    throw e;
  }
};

export {get_lyrics};

/* get_lyrics({
  apiKey: "1AqF1vBdyL1PRwnyWdxgj8r2nBtBZBnHrJL9Y2azkdne04F-FzOUBzSyATmgGqKA",
  title: "Drake",
  artist: "IDGAF",
  optimizeQuery: true}).then((lyrics) => {console.log(lyrics);}).catch((e) => {console.error(e);}); */