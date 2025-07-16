from flask import Flask, jsonify, request, send_from_directory
from flask_cors import CORS
import os

# Указываем, где лежат статические файлы
app = Flask(__name__, static_folder='static', static_url_path='')
CORS(app)

# Простой счетчик в памяти
counter = 0

# Отдача index.html при заходе на "/"
@app.route('/')
def serve_index():
    return send_from_directory(app.static_folder, 'index.html')

# Обработка всех остальных файлов (CSS, JS, картинки и т.д.)
@app.route('/<path:path>')
def serve_static_file(path):
    return send_from_directory(app.static_folder, path)

# Получение текущего значения счетчика
@app.route('/counter', methods=['GET'])
def get_counter():
    return jsonify({'counter': counter})

# Увеличение счетчика
@app.route('/counter', methods=['POST'])
def increment_counter():
    global counter
    counter += 1
    return jsonify({'counter': counter})

# Запуск приложения
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))  # для Render
    app.run(host='0.0.0.0', port=port)
