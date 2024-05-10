var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from 'axios';
import { checkOptions, getTitle } from './utils/index.js';
const searchUrl = 'https://api.genius.com/search?q=';
/**
 * @param {Options} options
 */
const getSong = function (options) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            checkOptions(options);
            const { apiKey, title, artist, optimizeQuery = false, authHeader = false } = options;
            const song = optimizeQuery ? getTitle(title, artist) : `${title} ${artist}`;
            const reqUrl = `${searchUrl}${encodeURIComponent(song)}`;
            const headers = {
                Authorization: 'Bearer ' + apiKey
            };
            const { data } = yield axios.get(authHeader ? reqUrl : `${reqUrl}&access_token=${apiKey}`, authHeader ? { headers } : undefined);
            if (data.response.hits.length === 0)
                return null;
            const results = data.response.hits.map((val) => {
                const { full_title, song_art_image_url, id, url } = val.result;
                return { id, title: full_title, albumArt: song_art_image_url, url };
            });
            return results;
        }
        catch (e) {
            throw e;
        }
    });
};
export { getSong };
//# sourceMappingURL=getSong.js.map