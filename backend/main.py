from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from pathlib import Path

app = FastAPI(title="Example App")

# Serve static files
static_dir = Path(__file__).resolve().parent.parent / "frontend" / "static"
app.mount("/static", StaticFiles(directory=static_dir), name="static")


@app.get("/")
def read_index():
    index_path = Path(__file__).resolve().parent.parent / "frontend" / "index.html"
    return FileResponse(index_path)


@app.get("/api/hello")
def read_hello(name: str = "World"):
    return {"message": f"Hello, {name}!"}
