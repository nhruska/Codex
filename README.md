# Codex Example App

This repository contains a minimal example application using **FastAPI** for the backend and a small HTML/JavaScript/CSS front‑end.

## Running locally

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
2. Start the server:
   ```bash
   python main.py
   ```
3. Open your browser at [http://localhost:8000](http://localhost:8000) to see the app.

The page fetches a greeting from `/api/hello` and lets you submit a message to `/api/echo`. Responses are displayed dynamically on the page.

