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
import cheerio from 'cheerio-without-node-native';
/**
 * @param {string} url - Genius URL
 */
const extract = function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data } = yield axios.get(url);
            const $ = cheerio.load(data);
            let lyrics = $('div[class="lyrics"]').text().trim();
            if (!lyrics) {
                lyrics = '';
                $('div[class^="Lyrics__Container"]').each((i, elem) => {
                    if ($(elem).text().length !== 0) {
                        let snippet = $(elem)
                            .html()
                            .replace(/<br>/g, '\n')
                            .replace(/<(?!\s*br\s*\/?)[^>]+>/gi, '');
                        lyrics += $('<textarea/>').html(snippet).text().trim() + '\n\n';
                    }
                });
            }
            if (!lyrics)
                return null;
            return lyrics.trim();
        }
        catch (e) {
            throw e;
        }
    });
};
export { extract };
//# sourceMappingURL=extractlyrics.js.map