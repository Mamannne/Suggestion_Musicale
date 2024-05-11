from flask import request, jsonify, Flask
from main import best as _best
import json
import requests
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

best_suggest = None

@app.route('/calcul', methods=['POST'])
def calcul():
    global best_suggest
    data = request.get_json()
    lyrics = data['lyrics']
    best_suggest = _best(lyrics)
    data = {'best_suggest': best_suggest}
    print(data)
    # Envoi de la requête avec les données JSON correctement définies
    requests.post('http://127.0.0.1:5000/BEST', json=data)
    return jsonify({'message': 'Success'})

@app.route('/BEST', methods=['POST'])
def best():
    global best_suggest
    if best_suggest is not None:
        return jsonify({'best_suggest': best_suggest}), 200
    else:
        return jsonify({'error': 'No suggestion available'}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)
