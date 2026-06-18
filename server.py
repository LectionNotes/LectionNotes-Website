from flask import Flask, jsonify, request
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests for local development

counter = 0

@app.route('/counter', methods=['GET'])
def get_counter():
    return jsonify({'counter': counter})

@app.route('/counter', methods=['POST'])
def increment_counter():
    global counter
    counter += 1
    return jsonify({'counter': counter})

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
