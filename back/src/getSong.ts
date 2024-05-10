import axios from 'axios';
import { checkOptions, getTitle } from './utils/index.js';

const searchUrl = 'https://api.genius.com/search?q=';

interface Options {
  apiKey: string;
  title: string;
  artist: string;
  optimizeQuery?: boolean;
  authHeader?: boolean;
}

interface Result {
  id: string;
  title: string;
  albumArt: string;
  url: string;
}

/**
 * @param {Options} options
 */
const getSong = async function (options: Options): Promise<Result[] | null> {
  try {
    checkOptions(options);
    const { apiKey, title, artist, optimizeQuery = false, authHeader = false } = options;
    const song = optimizeQuery ? getTitle(title, artist) : `${title} ${artist}`;
    const reqUrl = `${searchUrl}${encodeURIComponent(song)}`;
    const headers = {
      Authorization: 'Bearer ' + apiKey
    };
    const { data } = await axios.get(
      authHeader ? reqUrl : `${reqUrl}&access_token=${apiKey}`,
      authHeader ? { headers } : undefined
    );
    if (data.response.hits.length === 0) return null;
    const results = data.response.hits.map((val) => {
      const { full_title, song_art_image_url, id, url } = val.result;
      return { id, title: full_title, albumArt: song_art_image_url, url };
    });
    return results;
  } catch (e) {
    throw e;
  }
};


export {getSong}