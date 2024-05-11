var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.onload = () => {
    console.log('Hello, world!');
    const app = new App();
    app.run();
    const submit = document.querySelector('button');
    submit.addEventListener('click', () => app.catch_Form()); // Utilisation d'une fonction fléchée pour lier le contexte de "this"
};
class App {
    run() {
        console.log('Hello, world!');
        const container = document.createElement('div');
        container.id = 'container';
        const h = document.createElement('h1');
        h.textContent = 'Quelle est votre coup de coeur du moment?';
        container.appendChild(h);
        const artist = document.createElement('input');
        artist.placeholder = 'Artiste';
        container.appendChild(artist);
        const title = document.createElement('input');
        title.placeholder = 'Titre';
        container.appendChild(title);
        const submit = document.createElement('button');
        submit.textContent = 'Envoyer';
        container.appendChild(submit);
        document.body.appendChild(container);
    }
    catch_Form() {
        return __awaiter(this, void 0, void 0, function* () {
            const artist = document.querySelector('input[placeholder="Artiste"]').value;
            const title = document.querySelector('input[placeholder="Titre"]').value;
            const data = { 'artiste': artist, 'titre': title };
            let container = document.getElementById('container');
            container.innerHTML = 'L\'attente dure environ 30s';
            this.send(data);
        });
    }
    ;
    send(data) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(data);
            yield fetch('http://[::1]:3000/post', {
                //mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            }).then(response => {
                // return the response body as JSON
                return response.json();
            }).then(data => {
                // process the JSON data
                console.log(data);
            }).catch(error => {
                // handle errors
                console.error('Error:', error);
            });
            console.log('first fetch done');
            setTimeout(() => {
                fetch('http://127.0.0.1:5000/BEST', {
                    //mode: 'no-cors',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then(response => {
                    // return the response body as JSON
                    console.log(response);
                    return response.json();
                }).then(data => {
                    // process the JSON data
                    const best = data['best_suggest'];
                    console.log(best);
                    let container = document.getElementById('container');
                    container.innerHTML = `La suggestion la plus pertinente est : ${best}`;
                }).catch(error => {
                    // handle errors
                    console.error('Error:', error);
                });
            }, 30000);
            console.log('fin');
        });
    }
    ;
}
//# sourceMappingURL=app.js.map