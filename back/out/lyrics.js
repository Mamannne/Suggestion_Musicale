var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getSong } from './getSong.js';
import { checkOptions } from './utils/index.js';
import { extract } from './utils/extractlyrics.js';
/**
 * @param {(Options | string)} arg - options object, or Genius URL
 */
const get_lyrics = function (arg) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (arg && typeof arg === 'string') {
                let lyrics = yield extract(arg);
                return lyrics;
            }
            else if (typeof arg === 'object') {
                checkOptions(arg);
                let results = yield getSong(arg);
                if (!results)
                    return null;
                let lyrics = yield extract(results[0].url);
                return lyrics;
            }
            else {
                throw new Error('Invalid argument');
            }
        }
        catch (e) {
            throw e;
        }
    });
};
export { get_lyrics };
/* get_lyrics({
  apiKey: "1AqF1vBdyL1PRwnyWdxgj8r2nBtBZBnHrJL9Y2azkdne04F-FzOUBzSyATmgGqKA",
  title: "Drake",
  artist: "IDGAF",
  optimizeQuery: true}).then((lyrics) => {console.log(lyrics);}).catch((e) => {console.error(e);}); */ 
//# sourceMappingURL=lyrics.js.map