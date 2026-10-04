from flask import Flask, request, jsonify
from flask_cors import CORS
import json
import os

import requests # Add this new import

app = Flask(__name__)
# This allows your React app (running on localhost:5173) to talk to Flask
CORS(app) 

DATA_FILE = 'tasks.json'

# Helper function to read tasks from the JSON file
def read_tasks():
    if not os.path.exists(DATA_FILE):
        # Default tasks if the file doesn't exist yet
        default_tasks = [
            { "id": 1, "title": "DSA - 2 problems", "xp": "+20 XP", "icon": "</>", "completed": False },
            { "id": 2, "title": "Python - 30 mins", "xp": "+20 XP", "icon": "🐍", "completed": False }
        ]
        write_tasks(default_tasks)
        return default_tasks
        
    with open(DATA_FILE, 'r') as f:
        return json.load(f)

# Helper function to write tasks to the JSON file
def write_tasks(tasks):
    with open(DATA_FILE, 'w') as f:
        json.dump(tasks, f, indent=4)

# API Endpoint: GET /tasks (React will call this when the page loads)
@app.route('/tasks', methods=['GET'])
def get_tasks():
    tasks = read_tasks()
    return jsonify(tasks)

# API Endpoint: POST /tasks (React will call this when you check a box)
@app.route('/tasks', methods=['POST'])
def save_tasks():
    new_tasks = request.json
    write_tasks(new_tasks)
    return jsonify({"status": "success", "message": "Tasks saved permanently!"})



# API Endpoint: POST /chat
@app.route('/chat', methods=['POST'])
def chat_with_gemma():
    user_message = request.json.get('message')
    
    prompt = f"You are StudyBuddy, a kawaii, supportive study companion. Keep your answers short (1-2 sentences), sweet, and motivating. End with cute emojis like ♡. User says: {user_message}"
    
    try:
        # Talk to your local Ollama server instead of Google's cloud
        response = requests.post('http://localhost:11434/api/generate', json={
           "model": "gemma:2b",
            "prompt": prompt,
            "stream": False,
            "keep_alive": "1h"
        })
        
        data = response.json()
        # If Ollama sends an error (like a missing model), this will catch it!
        if 'error' in data:
            print(f"OLLAMA EXACT ERROR: {data['error']}")
            return jsonify({"reply": f"Ollama says: {data['error']} 💤♡"}), 500
        return jsonify({"reply": data['response']})
        
    except Exception as e:
        print(f"OLLAMA CRASHED BECAUSE: {e}") 
        return jsonify({"reply": "Oops, my local brain needs a quick nap! Make sure Ollama is running. 💤♡"}), 500



# API Endpoint: GET /quote (Generates a daily AI quote)
@app.route('/quote', methods=['GET'])
def get_daily_quote():
    prompt = "You are StudyBuddy. Generate a single, short, inspiring kawaii study quote (max 15 words) and sign it '- StudyBuddy ♡'."
    try:
        # Requesting a short generation from local Gemma 
        response = requests.post('http://localhost:11434/api/generate', json={
            "model": "gemma:2b", # Ensure this matches your downloaded model
            "prompt": prompt,
            "stream": False
        })
        data = response.json()
        return jsonify({"quote": data['response'].strip()})
    except Exception as e:
        print(f"OLLAMA QUOTE ERROR: {e}")
        # Safe fallback if Ollama isn't running
        return jsonify({"quote": "\"Small steps every day lead to big results.\" — StudyBuddy ♡"})




    
if __name__ == '__main__':
    app.run(debug=True, port=5000, use_reloader=False)